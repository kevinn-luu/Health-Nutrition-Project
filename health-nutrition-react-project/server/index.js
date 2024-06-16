import express from "express"
import {PORT} from "./config.js"

const app = express(); 

app.get('/', (req,res) => {
  res.send("HELLO BOZO")
})

app.listen(PORT, (req, res) => {
  console.log(`App is Listening on PORT ${PORT}`); 
})