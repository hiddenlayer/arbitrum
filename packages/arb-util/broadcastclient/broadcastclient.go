/*
 * Copyright 2021, Offchain Labs, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package broadcastclient

import (
	"context"
	"encoding/json"
	"io"
	"io/ioutil"
	"math/big"
	"net"
	"sync"
	"time"

	"github.com/gobwas/ws"
	"github.com/gobwas/ws/wsutil"

	"github.com/offchainlabs/arbitrum/packages/arb-util/broadcaster"
	"github.com/offchainlabs/arbitrum/packages/arb-util/common"
	"github.com/rs/zerolog/log"
)

type BroadcastClient struct {
	websocketUrl                 string
	lastInboxSeqNum              *big.Int
	conn                         net.Conn
	startingBroadcastClientMutex *sync.Mutex
	RetryCount                   int
	retrying                     bool
	shuttingDown                 bool
	ConfirmedAccumulatorListener chan common.Hash
	lastHeard                    time.Time
}

var logger = log.With().Caller().Str("component", "broadcaster").Logger()

func NewBroadcastClient(websocketUrl string, lastInboxSeqNum *big.Int) *BroadcastClient {
	var seqNum *big.Int
	if lastInboxSeqNum == nil {
		seqNum = big.NewInt(0)
	} else {
		seqNum = lastInboxSeqNum
	}

	return &BroadcastClient{
		startingBroadcastClientMutex: &sync.Mutex{},
		websocketUrl:                 websocketUrl,
		lastInboxSeqNum:              seqNum,
		lastHeard:                    time.Now(),
	}
}

func (bc *BroadcastClient) Connect(ctx context.Context) (chan broadcaster.BroadcastFeedMessage, error) {
	messageReceiver := make(chan broadcaster.BroadcastFeedMessage)
	return bc.connect(ctx, messageReceiver)
}

func (bc *BroadcastClient) connect(ctx context.Context, messageReceiver chan broadcaster.BroadcastFeedMessage) (chan broadcaster.BroadcastFeedMessage, error) {
	if len(bc.websocketUrl) == 0 {
		// Nothing to do
		return nil, nil
	}

	logger.Info().Str("url", bc.websocketUrl).Msg("connecting to arbitrum inbox message broadcaster")
	conn, _, _, err := ws.DefaultDialer.Dial(context.Background(), bc.websocketUrl)
	if err != nil {
		logger.Error().Err(err).Msg("broadcast client unable to connect")
		return nil, err
	} else {
		logger.Info().Msg("Connected")
	}

	bc.conn = conn

	go bc.backgroundReader(ctx, messageReceiver)

	return messageReceiver, err
}

func (bc *BroadcastClient) backgroundReader(ctx context.Context, messageReceiver chan broadcaster.BroadcastFeedMessage) {
	for {
		msg, op, err := bc.readData(ctx, bc.conn, ws.StateClientSide, ws.OpText|ws.OpBinary)
		if err != nil {
			if bc.shuttingDown {
				return
			}
			logger.Error().Err(err).Int("opcode", int(op)).Msgf("error calling ReadServerData")
			_ = bc.conn.Close()
			// Starts up a new backgroundReader
			bc.RetryConnect(ctx, messageReceiver)
			return
		}

		res := broadcaster.BroadcastMessage{}
		err = json.Unmarshal(msg, &res)
		if err != nil {
			logger.Error().Err(err).Msg("error unmarshalling message")
			continue
		}

		if len(res.Messages) > 0 {
			logger.Debug().Int("count", len(res.Messages)).Hex("acc", res.Messages[0].FeedItem.BatchItem.Accumulator.Bytes()).Msg("received batch item")
		} else {
			logger.Debug().Int("length", len(msg)).Msg("received broadcast without any messages")
		}

		if res.Version == 1 {
			for _, message := range res.Messages {
				logger.Debug().Msg("Received message from feed")
				messageReceiver <- *message
			}

			if res.ConfirmedAccumulator.IsConfirmed && bc.ConfirmedAccumulatorListener != nil {
				bc.ConfirmedAccumulatorListener <- res.ConfirmedAccumulator.Accumulator
			}
		}
	}
}

func (bc *BroadcastClient) readData(ctx context.Context, conn io.ReadWriter, state ws.State, want ws.OpCode) ([]byte, ws.OpCode, error) {
	controlHandler := wsutil.ControlFrameHandler(conn, state)
	reader := wsutil.Reader{
		Source:          conn,
		State:           state,
		CheckUTF8:       true,
		SkipHeaderCheck: false,
		OnIntermediate:  controlHandler,
	}

	// Remove timeout when leaving this function
	defer func(conn net.Conn) {
		err := conn.SetReadDeadline(time.Time{})
		if err != nil {
			logger.Error().Err(err).Msg("error removing read deadline")
		}
	}(bc.conn)

	for {
		select {
		case <-ctx.Done():
			return nil, 0, nil
		default:
		}

		err := bc.conn.SetReadDeadline(time.Now().Add(time.Second * 15))
		if err != nil {
			return nil, 0, err
		}

		header, err := reader.NextFrame()
		if err != nil {
			return nil, 0, err
		}

		bc.lastHeard = time.Now()
		if header.OpCode.IsControl() {
			if err := controlHandler(header, &reader); err != nil {
				return nil, 0, err
			}
			continue
		}
		if header.OpCode&want == 0 {
			if err := reader.Discard(); err != nil {
				return nil, 0, err
			}
			continue
		}

		data, err := ioutil.ReadAll(&reader)

		return data, header.OpCode, err
	}
}

func (bc *BroadcastClient) RetryConnect(ctx context.Context, messageReceiver chan broadcaster.BroadcastFeedMessage) {
	MaxWaitMs := 15000
	waitMs := 500
	bc.retrying = true
	for !bc.shuttingDown {
		time.Sleep(time.Duration(waitMs) * time.Millisecond)

		bc.RetryCount++
		_, err := bc.connect(ctx, messageReceiver)
		if err == nil {
			bc.retrying = false
			return
		}

		if waitMs < MaxWaitMs {
			waitMs += 500
		}
	}
}

func (bc *BroadcastClient) Close() {
	logger.Debug().Msg("closing broadcaster client connection")
	bc.shuttingDown = true
	_ = bc.conn.Close()
}
