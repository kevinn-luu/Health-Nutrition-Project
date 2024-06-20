import axios from 'axios'
import React from 'react'
import {useState} from 'react'

const MacroForm = () => {

  const [formData, setFormData] = useState(
    {
      fats: 0, 
      cholesterol: 0, 
      sodium: 0,
      fiber: 0, 
      sugar: 0, 
      protein: 0
    }
  )
  


  function handleChange(event) {
    setFormData(prevFormData => {
      const {name, value} = event.target;
      return {
        ...prevFormData, 
        [name]: value

      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData)
    axios
      .post('http://localhost:5555/personal/macro', formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Input Your Macros!</h1>
      <label>Fats: 
        <input
          type="number"
          placeholder='deeeuigh'
          name="fats"
          onChange={handleChange}
          value={formData.fats}
          />
      </label>
      <label>Cholesterol: 
        <input
          type="number"
          placeholder='deeeuigh'
          name="cholesterol"
          onChange={handleChange}
          value={formData.cholesterol}
          />
      </label>
      <label>Sodium: 
        <input
          type="number"
          placeholder='deeeuigh'
          name="sodium"
          onChange={handleChange}
          value={formData.sodium}
          />
      </label>
      <label>Fiber: 
        <input
          type="number"
          placeholder='deeeuigh'
          name="fiber"
          onChange={handleChange}
          value={formData.fiber}
          />
      </label>
      <label>Sugar: 
        <input
          type="number"
          placeholder='deeeuigh'
          name="sugar"
          onChange={handleChange}
          value={formData.sugar}
          />
      </label>
      <label>Protein: 
        <input
          type="number"
          placeholder='deeeuigh'
          name="protein"
          onChange={handleChange}
          value={formData.protein}
          />
      </label>
      <button>Submit</button>
    </form>
  )
}

export default MacroForm