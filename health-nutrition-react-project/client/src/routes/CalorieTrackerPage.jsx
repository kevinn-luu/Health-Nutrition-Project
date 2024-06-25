import React, { useEffect, useState } from "react";
import "../styles/caloriePage.css";
import CalorieForm from "../components/calories/CalorieForm.jsx";
import "../styles/calorieEntries.css";
import axios from "axios";
import CalorieBanner from "../components/calories/CalorieBanner.jsx";
import CalorieGoalForm from "../components/calories/CalorieGoalForm.jsx";



const CalorieTrackerPage = () => {
  const [loading, setLoading] = useState(false);
  const [calories, setCalories] = useState([]);
  const userId = '60b6b3f96f1b2c001a3b8b0d';

    useEffect(() => {
      setLoading(true);
      axios
        .get('http://localhost:5555/personal/calorie')
        .then((res) => {
          setCalories(res.data.data);
          setLoading(false);
        })
      .catch((err) => {
        console.log(err);
      })
    }, []);

    return(
        <div>
            <div>
              <CalorieBanner />
            </div>
            <div>
              <CalorieGoalForm userId={userId}/>
            </div>
            <div>
              <CalorieForm />
            </div>        
        </div>
    )
};

export default CalorieTrackerPage;
   
        

