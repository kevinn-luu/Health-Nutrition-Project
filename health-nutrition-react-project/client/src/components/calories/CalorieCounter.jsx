import React from 'react';

const CalorieCounter = ({ todayCalories }) => {
    return (
        <div className="calorie-counter">
            <h3>Calories Consumed Today: {todayCalories}</h3>
        </div>
    );
};

export default CalorieCounter;
