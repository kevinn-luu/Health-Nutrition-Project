import express from "express"
import {PORT, mongoDBURL} from "./config.js"
import cors from "cors";
import mongoose from 'mongoose'


const app = express(); 

app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  res.json({ message: "this message is from the backend" });
})


mongoose
  .connect(mongoDBURL)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Connected to the Database!"); 
      console.log(`App is listening on PORT ${PORT}`); 
    })
  }).catch((err) => {
    console.log(err);
  })