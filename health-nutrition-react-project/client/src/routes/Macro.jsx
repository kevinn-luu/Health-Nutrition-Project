import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import '../styles.css'

const Macro = () => {
  const [loading, setLoading] = React.useState(false)
  const [macros, setMacros] = React.useState([])

  React.useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/personal/macro')
      .then((res) => {
        setMacros(res.data.data);
        setLoading(false);
      })
    .catch((err) => {
      console.log(err); 
    })
  }, [])

  return (

    <div>
      {loading ? (
        <p>DEEEUIGH</p>
      ) : (
        <div>
          <h1>YOUR MACROS!</h1>
          {macros.length > 0 ? (
            macros.map((macro) => (
              <div key={macro._id} className='macro--container'>
                <p>fats: {macro.fats}g</p>
                <p>cholesterol: {macro.cholesterol}g</p>
                <p>sodium: {macro.sodium}g</p>
                <p>fiber: {macro.fiber}g</p>
                <p>sugar: {macro.sugar}g</p>
                <p>protein: {macro.protein}g</p>
                <p>time: {macro.updatedAt}</p>
              </div>
            ))
          ) : (
            <p>No macros available</p>
          )}
        </div>
      )}

    </div>
  );
};

export default Macro