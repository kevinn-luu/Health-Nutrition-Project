import React, { useState } from "react";
import axios from "axios";
import "../../styles/setGoal.css";
import { Link } from "react-router-dom";

const SetGoal = () => {
    const [goal, setGoal] = useState('');

    const handleChange = (event) => {
        setGoal(event.target.value);
    };

    return (
        <div className="calorie-banner">
            <div className="calorie-banner-content">
                <h1>Welcome User to Your Calorie Tracker!</h1>
                <button><Link to={"/personal"}>Back to personal dashboard</Link></button>
            </div>
        </div>
    )
};

export default SetGoal

