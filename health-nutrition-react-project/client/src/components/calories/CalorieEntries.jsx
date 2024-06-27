import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/calorieEntries.css";
import CalorieCounter from "./CalorieCounter.jsx";

const CalorieEntries = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [todayCalories, setTodayCalories] = useState(0);
  const [editingEntryId, setEditingEntryId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    date: '',
    totalcalories: '',
    meals: []
  });

  const handleClick = (id) => {
    axios
      .delete(`http://localhost:5555/personal/calorie/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.log("Error deleting entry: ", JSON.stringify(err, null, 2));
      });
  };

  const handleEditClick = (dailyCalorie) => {
    setEditingEntryId(dailyCalorie._id);
    setEditFormData({
      date: new Date(dailyCalorie.date).toISOString().slice(0, 10),
      totalcalories: dailyCalorie.totalcalories,
      meals: dailyCalorie.meals
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5555/personal/calorie/${editingEntryId}`, editFormData)
      .then((res) => {
        setEditingEntryId(null);
        window.location.reload();
      })
      .catch((err) => {
        console.log("Error updating entry: ", JSON.stringify(err, null, 2));
      });
  };

  const calculateTodayCalories = (data) => {
    const todayDate = new Date().toLocaleDateString();
    const todayTotal = data.reduce((total, entry) => {
      return (
        total +
        entry.dailyCalories.reduce((dailyTotal, dailyCalorie) => {
          if (new Date(dailyCalorie.date).toLocaleDateString() === todayDate) {
            return dailyTotal + dailyCalorie.totalcalories;
          }
          return dailyTotal;
        }, 0)
      );
    }, 0);
    setTodayCalories(todayTotal);
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/personal/calorie")
      .then((res) => {
        setEntries(res.data.data);
        setLoading(false);
        calculateTodayCalories(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="calorie-entries">
      <div>
        <CalorieCounter todayCalories={todayCalories} />
      </div>
      <h2>Calorie Entries</h2>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {entries.length > 0 ? (
            entries
              .slice()
              .sort((a, b) => {
                const dateA = new Date(a.dailyCalories[0]?.date);
                const dateB = new Date(b.dailyCalories[0]?.date);
                return dateB - dateA;
              })
              .map((entry) =>
                entry.dailyCalories
                  .slice()
                  .sort((a, b) => new Date(b.date) - new Date(a.date))
                  .map((dailyCalorie) => (
                    <div key={dailyCalorie._id} className="one-calorie">
                      <p>
                        Date: {new Date(dailyCalorie.date).toLocaleDateString()}
                      </p>
                      <p>Total Calories: {dailyCalorie.totalcalories}</p>
                      {dailyCalorie.meals.map((meal) => (
                        <div key={meal._id}>
                          <p>Meal Type: {meal.mealType}</p>
                          <p>Meal Calories: {meal.calories}</p>
                          <p>Meal Description: {meal.description}</p>
                        </div>
                      ))}
                      <button
                        onClick={() => handleClick(dailyCalorie._id)}
                        className="delete-entry-button"
                      >
                        Delete entry
                      </button>
                      <button
                        onClick={() => handleEditClick(dailyCalorie)}
                        className="edit-entry-button"
                      >
                        Edit entry
                      </button>
                      {editingEntryId === dailyCalorie._id && (
                        <div className="edit-entry-form">
                          <h2>Edit Entry</h2>
                          <form onSubmit={handleEditSubmit}>
                            <label>
                              Date:
                              <input
                                type="date"
                                name="date"
                                value={editFormData.date}
                                onChange={handleEditChange}
                                required
                              />
                            </label>
                            <label>
                              Total Calories:
                              <input
                                type="number"
                                name="totalcalories"
                                value={editFormData.totalcalories}
                                onChange={handleEditChange}
                                required
                              />
                            </label>
                            <button type="submit">Save Changes</button>
                            <button type="button" onClick={() => setEditingEntryId(null)}>Cancel</button>
                          </form>
                        </div>
                      )}
                    </div>
                  ))
              )
          ) : (
            <p>No entries available</p>
          )}
        </>
      )}
    </div>
  );
};

export default CalorieEntries;
