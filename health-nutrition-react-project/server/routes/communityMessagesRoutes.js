import express from 'express'
import { communityMessageModel } from '../models/communityMessageModel.js';



const communityMessagesRouter = express.Router();

communityMessagesRouter.post("/", async (req, res) => {
  try {
    const { username, entry } = req.body;
    if (!username || !entry) {
      return res.status(404).json({ message: "Incorrect data input, please try again." });
    }
    const newMessage = {
      username: username,
      entry: entry
    }
    communityMessageModel.create(newMessage)
    return res.status(201).json({ message: "Successfully created new Macro report!" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
})

communityMessagesRouter.get("/", async (req, res) => {
  try {
    const messages = await communityMessageModel.find({});
    if (!messages) {
      return res.status(404).json({ message: "Cannot find messages" });
    }
    return res.status(200).json({
      count: messages.length,
      data: messages,
    })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

communityMessagesRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const message = await communityMessageModel.findById(id);
    if (!message) {
      res.status(404).json({ message: "Cannot find ID" })
    }
    return res.status(200).json({ message })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

communityMessagesRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, entry } = req.body;
    if (!username || !entry) {
      return res.status(404).json({ message: "Invalid Input, try again." })
    }
    const newMessage = {
      username: username,
      entry: entry
    }
    const message = await communityMessageModel.findByIdAndUpdate(id, newMessage);
    if (!message) {
      return res.status(404).json({ message: "Cannot find ID" });
    }

    return res.status(201).json({ message: "Successfully updated message!" })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }

})

communityMessagesRouter.delete("/:id", async (req, res) => {

  try {
    const { id } = req.params;
    const message = await communityMessageModel.findByIdAndDelete(id);
    if (!message) {
      return res.status(404).json({ message: "Invalid ID" })
    }
    return res.status(200).json({ message: "Successfully deleted Message" })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
})

export default communityMessagesRouter;