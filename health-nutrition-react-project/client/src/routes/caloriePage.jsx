import React, { useEffect, useState } from "react";
import api from "../services/api.js";

function CaloriePage () {
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
            <ul>
                {calories.map(calorie => (
                    <li key={calorie._id}>
                        <h2>
                            Week Start :{new Date(calorie.weekStart.toLocalDateString())}
                        </h2>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default CaloriePage;
   
        
