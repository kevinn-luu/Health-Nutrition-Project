import React, { useEffect, useState } from "react";
import api from "../services/api.js";
import "../styles/caloriePage.css";


function CalorieTrackerPage () {
    const [calories, setCalories] = useState([]);

    useEffect(() => {
        const fetchCalories = async () => {
          try {
            const response = await api.get('/personal/calorie');
            setCalories(response.data.data);
          } catch (error) {
            console.log(error.message);
          }
        };
        fetchCalories();
    }, []);

    return(
        <div>
            <h1>Calorie Information</h1>
            <p>DEEEUEIGH DOOOOSH</p>
        </div>
    )
};

export default CalorieTrackerPage;
   
        

