import express, { Router } from "express"
import {PORT, mongoDBURL} from "./config.js"
import cors from "cors";
import mongoose from 'mongoose'
import router from "./routes/personalMacroRoutes.js";
import calorieRouter from "./routes/personalCalorieRoutes.js";
import calorieGoalRouter from "./routes/personalCalorieGoalRoutes.js";
import communityMessagesRouter from "./routes/communityMessagesRoutes.js";

const app = express(); 

app.use(cors());
app.use(express.json());

app.use("/personal/macro", router); 
app.use("/personal/calorie", calorieRouter);
app.use("/personal/calorie-goals", calorieGoalRouter);
app.use("/community", communityMessagesRouter);

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