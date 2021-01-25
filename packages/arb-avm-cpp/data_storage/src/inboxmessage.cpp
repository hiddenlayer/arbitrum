/*
 * Copyright 2020, Offchain Labs, Inc.
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

#include <data_storage/inboxmessage.hpp>

#include "value/utils.hpp"

#include <ethash/keccak.hpp>

uint256_t InboxMessage::hash(const uint256_t& previous_inbox_hash) const {
    std::vector<unsigned char> inbox_vector;

    inbox_vector.push_back(kind);
    marshal_uint256_t(sender, inbox_vector);
    marshal_uint256_t(block_number, inbox_vector);
    marshal_uint256_t(timestamp, inbox_vector);
    marshal_uint256_t(inbox_sequence_number, inbox_vector);
    auto data_hash = ::hash(data);
    marshal_uint256_t(data_hash, inbox_vector);

    auto message_hash = ::hash(inbox_vector);

    return ::hash(previous_inbox_hash, message_hash);
}

uint256_t hash_inbox(const uint256_t& previous_inbox_hash,
                     const std::vector<unsigned char>& stored_state) {
    constexpr auto message_fixed_size = 124;

    // Calculate hash of variable length data
    std::vector<unsigned char> variable_data{
        stored_state.begin() + message_fixed_size + 1, stored_state.end()};
    auto variable_hash = hash(variable_data);

    std::vector<unsigned char> fixed_data{
        stored_state.begin(), stored_state.begin() + message_fixed_size};
    marshal_uint256_t(variable_hash, fixed_data);

    auto message_hash = hash(fixed_data);

    return hash(previous_inbox_hash, message_hash);
}

InboxMessage extractInboxMessage(
    const std::vector<unsigned char>& stored_state) {
    auto current_iter = stored_state.begin();

    auto kind = *reinterpret_cast<const uint8_t*>(&*current_iter);
    current_iter++;
    auto sender = extractUint256(current_iter);
    auto block_number = extractUint256(current_iter);
    auto timestamp = extractUint256(current_iter);
    auto inbox_sequence_number = extractUint256(current_iter);

    std::vector<unsigned char> data;
    data.insert(data.end(), current_iter, stored_state.end());

    return InboxMessage{
        kind, sender, block_number, timestamp, inbox_sequence_number, data};
}

std::vector<InboxMessage> extractInboxMessages(
    const std::vector<rocksdb::Slice>& slices) {
    std::vector<InboxMessage> messages;

    for (const auto& slice : slices) {
        auto slice_vec = std::vector<unsigned char>{
            slice.data(), slice.data() + slice.size()};
        auto message = extractInboxMessage(slice_vec);
        messages.push_back(message);
    }

    return messages;
}

std::vector<unsigned char> serializeInboxMessage(
    const InboxMessage& state_data) {
    std::vector<unsigned char> state_data_vector;

    state_data_vector.push_back(state_data.kind);
    marshal_uint256_t(state_data.sender, state_data_vector);
    marshal_uint256_t(state_data.block_number, state_data_vector);
    marshal_uint256_t(state_data.timestamp, state_data_vector);
    marshal_uint256_t(state_data.inbox_sequence_number, state_data_vector);

    state_data_vector.insert(state_data_vector.end(), state_data.data.begin(),
                             state_data.data.end());

    return state_data_vector;
}