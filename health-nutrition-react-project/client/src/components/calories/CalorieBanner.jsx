import React, { useState } from "react";
import axios from "axios";
import "../../styles/calorieBanner.css";
import { Link } from "react-router-dom";

const CalorieBanner = () => {
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

export default CalorieBanner;

