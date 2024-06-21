import React, { useEffect, useState } from "react";
import api from "../services/api.js";
import "../styles/caloriePage.css";
import CalorieForm from "../components/calories/CalorieForm.jsx";
import axios from "axios";



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
            <h1 id="page-title">Calorie Information</h1>
            <CalorieForm />
        </div>
    )
};

export default CalorieTrackerPage;
   
        

