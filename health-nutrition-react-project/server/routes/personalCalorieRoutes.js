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

calorieRouter.get("/", async (req, res) => {
    try {
        const calories = await CalorieCounter.find({});

        return res.status(200).json({
            count: calories.length,
            data: calories,
        });
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

calorieRouter.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const calories = await CalorieCounter.findById(id);

        return res.status(200).json(calories);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
}); 

calorieRouter.put('/:id', async (req, res) => {
    try {
    
        const { id } = req.params;

        const calorieResult = await CalorieCounter.findByIdAndUpdate(id, req.body, { new: true });

        if (!calorieResult) {
            return res.status(404).json({ message: "Information not found" });
        }

        return res.status(200).json({ message: "Information successfully updated", calorieResult });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

calorieRouter.delete('/id:', async (req, res) => {
    try {
        const { id } = req.params;

        const calorieResult = await CalorieCounter.findByIdAndDelete(id);

        if (!calorieResult) {
            return res.status(404).json({ message: "Information not found"})
        }

        return res.status(200).json({ message: "Information deleted successfully" })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

export default calorieRouter;