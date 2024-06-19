import express from 'express'
import { macroStats } from '../models/macroModel.js';


const router = express.Router();

router.get("/", async (req,res) => {
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

router.post("/", async(req, res) => {
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

router.put("/:id", async (req, res) => {
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

router.get("/:id", async (req, res) => {
  try {
    const {id} = req.params; 
    const macro = await macroStats.findById(id); 
    return res.status(200).json({macro});
  } catch (err) {
    console.log(err.message); 
    return res.status(404).json({message: err.message});
  }
})

router.delete("/:id", async (req,res) => {
  try {
    const {id} = req.params; 
    const macro = await macroStats.findByIdAndDelete(id); 
    if(!macro) {
      return res.status(404).json({message: "Macro not found"}); 
    } else {
      return res.status(200).json({message: "Successfully deleted your Macro."});
    }
  } catch (err) {
    console.log(err.message); 
    return res.status(404).json({message: err.message});
  }
})

export default router;