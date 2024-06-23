import React, { useEffect, useState } from "react";
import api from "../services/api.js";
import "../styles/caloriePage.css";
import CalorieForm from "../components/calories/CalorieForm.jsx";
import "../styles/calorieEntries.css";
import axios from "axios";
import CalorieBanner from "../components/calories/CalorieBanner.jsx";



const CalorieTrackerPage = () => {
  const [loading, setLoading] = useState(false);
  const [calories, setCalories] = useState([]);

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
              <CalorieForm />
            </div>
            
        </div>
    )
};

export default CalorieTrackerPage;
   
        

