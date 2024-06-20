import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import '../styles/macroPage.css'
import Stats from "../components/macros/Stats.jsx"
import MacroForm from '../components/macros/MacroForm.jsx'

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
          <Stats macros={macros} />
          <MacroForm />
        </div>
      )}

    </div>
  );
};

export default Macro