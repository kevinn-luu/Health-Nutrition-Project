import express from "express"
import {PORT, mongoDBURL} from "./config.js"
import cors from "cors";
import mongoose from 'mongoose'
import { macroStats } from "./models/macroModel.js";


const app = express(); 

app.use(cors());
app.use(express.json());

app.get("/api/data", (req, res) => {
  res.json({ message: "this message is from the backend" });
})

app.get("/personal", async (req,res) => {
  try {
    const macros = await macroStats.find({}); 
    return res.status(200).json({
      count: macros.length, 
      data: macros,
    })
  } catch (err) {
    console.log(err);
    return res.status(404).json({message: err.message}); 
  }
})

app.post("/personal", async(req, res) => {
  try {
    const {fats, cholesterol, sodium, fiber, sugar, protein} = req.body;
    if(!fats || !cholesterol || !sodium || !fiber || !sugar || !protein) {
      return res.status(404).json({message: "You're missing a required field"});
    }
    const newMacro = {
      fats: fats, 
      cholesterol: cholesterol, 
      sodium: sodium, 
      fiber: fiber, 
      sugar: sugar, 
      protein: protein,
    }
    macroStats.create(newMacro)
    return res.status(200).json({message: "Successfully created new Macro report!"});
  } catch (err) {
    console.log(err.message); 
    return res.status(404).json({message: err.message});
  }
})

app.put("/personal/:id", async (req, res) => {
  try {
    const {id} = req.params; 
    const {fats, cholesterol, sodium, fiber, sugar, protein} = req.body;
    if(!fats || !cholesterol || !sodium || !fiber || !sugar || !protein) {
      return res.status(404).json({message: "You're missing a required field"});
    }
    const newMacro = {
      fats: fats, 
      cholesterol: cholesterol, 
      sodium: sodium, 
      fiber: fiber, 
      sugar: sugar, 
      protein: protein,
    }
    const stat = await macroStats.findByIdAndUpdate(id, newMacro); 
    if(!stat) {
      return res.status(404).json({message: "Macro Stats not found."});
    } else {
      return res.status(200).json({message: "Successfully updated Macro!"});
    }

  } catch (err) {
    console.log(err.message); 
    return res.status(404).json({message: err.message});
  }
})

app.get("/personal/:id", async (req, res) => {
  try {
    const {id} = req.params; 
    const macro = await macroStats.findById(id); 
    return res.status(200).json({macro});
  } catch (err) {
    console.log(err.message); 
    return res.status(404).json({message: err.message});
  }
})

app.delete("/personal/:id", async (req,res) => {
  try {
    const {id} = req.params; 
    const macro = await macroStats.findByIdAndDelete(id); 
    if(!macro) {
      return res.status(404).json({message: "Macro not found"}); 
    } else {
      return res.status(200).json({message: "Successfully deleted your Macro."});
    }
  } catch (err) {

  }
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