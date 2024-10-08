import mongoose from "mongoose";

const chatHistorySchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    sender: {
      type: String,
      required: true
    }
  }
);

const ChatHistoryModel = mongoose.model("ChatHistory", chatHistorySchema);
// Model name is capitalized, MongoDB collection name will be 'chathistories'


export default ChatHistoryModel;
// returning a mongoose model that will be used to interact with the MongoDB collection
