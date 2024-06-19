import mongoose from "mongoose";

const Schema = mongoose.Schema;

const dailyCalorieSchema = new Schema 
({
    date: {
        type: Date,
        required: true,
    },
    totalcalories: {
        type: Number,
        required: true,
    },
    meals: [{
        mealType: {
            type: String,
            enum: ['breakfast', 'lunch', 'dinner', 'snack'],
            required: true,
        },
        calories: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: false,
        }
    }]
});

const calorieCountSchema = new Schema ({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    weekStart: {
        type: Date,
        required: true,
    },
    dailyCalories: [dailyCalorieSchema]
});

const CalorieCounter = mongoose.model("CalorieCounter", calorieCountSchema);
export default CalorieCounter;