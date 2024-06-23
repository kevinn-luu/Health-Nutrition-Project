import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import '../styles/macroPage.css'
import Stats from "../components/macros/Stats.jsx"
import MacroForm from '../components/macros/MacroForm.jsx'
import MacrosByDate from '../components/macros/MacrosByDate.jsx'
import {Routes, Route} from 'react-router-dom'
import {Link} from "react-router-dom"

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
        <main>
          <h1>YOUR MACROS!</h1>
          <button><Link to="/personal/macro/dates">See Macros By Date</Link></button>
          <section>
            <MacroForm />
            <Stats macros={macros} />
          </section>
        </main>
      )}

    </div>
  );
};

export default Macro