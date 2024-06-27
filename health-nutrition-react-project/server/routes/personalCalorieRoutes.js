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

        const dailyCaloriesWithoutDefaultDate = dailyCalories.map(calorie =>({
            totalcalories: calorie.totalcalories,
            meals: calorie.meals
        }));

        const calorieCount = new CalorieCounter({
            userId,
            weekStart,
            dailyCalories: dailyCaloriesWithoutDefaultDate,
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
        const { userId, date, totalcalories, meals } = req.body;

        const calorieCounter = await CalorieCounter.findOneAndUpdate(
            { "dailyCalories._id": id },
            {
                $set: {
                    "dailyCalories.$.date": date,
                    "dailyCalories.$.totalcalories": totalcalories,
                    "dailyCalories.$.meals": meals
                }
            },
            { new: true }
        );

        if (!calorieCounter) {
            return res.status(404).json({ message: "Information not found" });
        }

        return res.status(200).json({ message: "Information successfully updated", calorieCounter });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

calorieRouter.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        console.log(`Attemping to delete entry with ID ${id}`);

        const calorieResult =  await CalorieCounter.updateOne(
            { "dailyCalories._id": id },
            { $pull: { dailyCalories: { _id: id } } }
        )

        if (calorieResult.n === 0) {
            console.log(`no entry found with ID ${id}`);
            return res.status(404).json({ message: "Information not found"});
        }

        const emptyDocumentCheck = await CalorieCounter.findOne({ "dailyCalories": { $size: 0 } });

        if (emptyDocumentCheck) {
            await CalorieCounter.deleteOne({ _id: emptyDocumentCheck._id });
            console.log(`Deleted empty document with id ${emptyDocumentCheck._id}`);
        }

        console.log(`Successfully deleted entry with ID ${id}`);
        return res.status(200).json({ message: "Information deleted successfully" });

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
    }
});

export default calorieRouter;