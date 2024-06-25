import mongoose from "mongoose";

const messageModel = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    entry: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

export const communityMessageModel = mongoose.model("Message", messageModel);