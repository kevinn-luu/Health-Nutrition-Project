import express from "express";
import CalorieGoals from "../models/calorieGoalModel.js";

 const calorieGoalRouter = express.Router();

 calorieGoalRouter.post('/', async (req, res) => {
    try {
        const {userId, caloriegoal } = req.body;

        if (!userId || !caloriegoal) {
            return res.status(400).json({ message: "please fill out all required fields" });
        }

        const calorieGoal = new CalorieGoals({
            userId, 
            caloriegoal,
        });

        await calorieGoal.save();

        return res.status(201).json({ message: "Calorie goal saved", calorieGoal });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
 });

 calorieGoalRouter.get('/', async (req, res) => {
    try {
        const calorieGoals = await CalorieGoals.find({});

        return res.status(200).json({
            count: calorieGoals.length,
            data: calorieGoals,
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
 });

 calorieGoalRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const calorieGoal = await CalorieGoals.findById(id);

        if (!calorieGoal) {
            return res.status(404).json({ message: "Calorie goal not found" });
        } 

        return res.status(200).json(calorieGoal);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message })
    }
 });

 calorieGoalRouter.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { caloriegoal } = req.body;

        if (!caloriegoal) {
            return res.status(400).json({ message: "Calorie goal is required "});
        }

        const calorieGoal = await CalorieGoals.findByIdAndUpdate(id, { caloriegoal }, { new: true });

        if (!calorieGoal) {
            return res.status(404).json({ message: "Calorie goal not found "});
        }

        return res.status(200).json({ message: "Calorie goal updated", calorieGoal });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message });
    }
 });

 calorieGoalRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const calorieGoal = await CalorieGoals.findByIdAndDelete(id);

        if (!calorieGoal) {
            return res.status(404).json({ message: "Calorie goal not found" });
        }

        return res.status(200).json({ message: "Calorie goal deleted" });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: error.message })
    }
 });

 export default calorieGoalRouter;