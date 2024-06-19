import express from 'express';
import CalorieCounter from '../models/calorieCountModel.js';

const calorieRouter = express.Router();

calorieRouter.post("/", async (req, res) => {
    try {
        const { userId, weekStart, dailyCalories } = req.body;

        console.log(req.body);

        if (!userId || !weekStart || !Array.isArray(dailyCalories)) {
            return res.status(400).json({ message: "Please fill out all fields "});
        }

        const calorieCount = new CalorieCounter({
            userId,
            weekStart,
            dailyCalories,
        });

        await calorieCount.save();

        return res.status(201).json({ message: "Calorie data saved", calorieCount })

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
})

export default calorieRouter;