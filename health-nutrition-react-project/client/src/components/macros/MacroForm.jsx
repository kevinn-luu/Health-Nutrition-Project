import axios from 'axios'
import React from 'react'
import { useState } from 'react'

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
      const { name, value } = event.target;
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
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      })

  }

  return (
    <form onSubmit={handleSubmit} className='macro--form'>
      <h1 className='macro-form-title'>Input Your Macros!</h1>
      <div className='macro-form-labels-top-half'>
        <label className='form-label'>Fats:
          <input
            type="number"
            placeholder='fats'
            name="fats"
            onChange={handleChange}
            value={formData.fats}
          />
        </label>
        <label className='form-label'>Cholesterol:
          <input
            type="number"
            placeholder='cholesterol'
            name="cholesterol"
            onChange={handleChange}
            value={formData.cholesterol}
          />
        </label>
        <label className='form-label'>Sodium:
          <input
            type="number"
            placeholder='sodium'
            name="sodium"
            onChange={handleChange}
            value={formData.sodium}
          />
        </label>
        </div>
        <div className='macro-form-labels-bot-half'>
        <label className='form-label'>Fiber:
          <input
            type="number"
            placeholder='fiber'
            name="fiber"
            onChange={handleChange}
            value={formData.fiber}
          />
        </label>
        <label className='form-label'>Sugar:
          <input
            type="number"
            placeholder='sugar'
            name="sugar"
            onChange={handleChange}
            value={formData.sugar}
          />
        </label>
        <label className='form-label'>Protein:
          <input
            type="number"
            placeholder='protein'
            name="protein"
            onChange={handleChange}
            value={formData.protein}
          />
        </label>
        </div>
        <button type='form-submit-button'>Submit</button>
    </form>
  )
}

export default MacroForm