import express from 'express'
import { communityMessageModel } from '../models/communityMessageModel.js';



const communityMessagesRouter = express.Router();

communityMessagesRouter.post("/", async(req, res) => {
  try {
    const {username, entry} = req.body;
    if(!username || !entry) {
      return res.status(404).json({message: "Incorrect data input, please try again."});
    }
    const newMessage = {
      username: username, 
      entry: entry
    }
    communityMessageModel.create(newMessage)
    return res.status(200).json({message: "Successfully created new Macro report!"});
  } catch (err) {
    console.log(err.message); 
    return res.status(500).json({message: err.message});
  }
})

export default communityMessagesRouter;