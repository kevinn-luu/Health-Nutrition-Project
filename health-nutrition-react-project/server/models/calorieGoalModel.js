import mongoose from "mongoose";

const Schema = mongoose.Schema;

const calorieGoalSchema = new Schema
({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    },
    caloriegoal: {
        type: Number,
        required: true,
        validate: {
            validator: Number.isPositive,
            message: '{VALUE} is not a positive number'
        }
    }
}, {
    timestamps: true,
    collection: 'caloriegoals'
});

const CalorieGoals = mongoose.model("CalorieGoals", calorieGoalSchema);
export default CalorieGoals;
 