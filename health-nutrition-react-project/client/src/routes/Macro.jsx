import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

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
          {macros.length > 0 ? (
            macros.map((macro) => (
              <div key={macro._id}>
                <p>sodium: {macro.sodium}</p>
                <p>fats: {macro.fats}</p>
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