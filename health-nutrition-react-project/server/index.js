import express from "express"
import {PORT} from "./config.js"
import cors from "cors";

const app = express(); 

app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  res.json({ message: "this message is from the backend" });
})

app.listen(PORT, (req, res) => {
  console.log(`App is Listening on PORT ${PORT}`); 
})