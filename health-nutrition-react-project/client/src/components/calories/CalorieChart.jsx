// CalorieChart.jsx
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import DateFnsAdapter from "@date-io/date-fns";
import { format } from "date-fns";

Chart.register(...registerables);

Chart.register(...registerables);

const CalorieChart = ({ data }) => {
    const chartData = {
        labels: data.map(entry => format(new Date(entry.date), "yyyy-MM-dd")),
        datasets: [
            {
                label: "Calories Consumed",
                data: data.map(entry => entry.totalCalories),
                fill: false,
                backgroundColor: "rgba(75,192,192,0.6)",
                borderColor: "rgba(75,192,192,1)"
            }
        ]
    };

    const options = {
        scales: {
            x: {
                type: "time",
                time: {
                    unit: "day",
                    tooltipFormat: "yyyy-MM-dd",
                },
                title: {
                    display: true,
                    text: "Date",
                },
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: "Calories",
                },
            },
        },
    };

    return <Line data={chartData} options={options} />;
};

export default CalorieChart;
