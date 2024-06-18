import mongoose from 'mongoose'

const macroSchema = mongoose.Schema(
  {
    fats: {
      type: Number, 
      required: true, 
    }, 
    cholesterol: {
      type: Number, 
      required: true, 
    }, 
    sodium: {
      type: Number, 
      required: true,
    }, 
    fiber: {
      type: Number,
      required: true
    }, 
    sugar: {
      type: Number, 
      required: true,
    }, 
    protein: {
      type: Number, 
      requried: true,
    }
  },
  {
    timestamps: true,
  }
)

export const macroStats = mongoose.model("Macros", macroSchema); 