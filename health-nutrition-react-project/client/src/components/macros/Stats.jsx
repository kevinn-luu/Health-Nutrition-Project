import axios from "axios";
import React from "react";
import { useState } from "react"
import MacroEditForm from "./MarcoEditForm";
import {Link} from "react-router-dom"
import MacrosByDate from "./MacrosByDate";

export default function Stats(props) {

  const [toggle, setToggle] = useState(false)

  function toToggle() {
    setToggle(prevToggle => !prevToggle);
  }


  function handleClick(input) {

    axios
      .delete(`http://localhost:5555/personal/macro/${input}`)
      .then((res) => {
        console.log('User deleted successfully:', res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  return (
    <div className='macro-display'>
      {props.macros.length > 0 ? (
        props.macros.map((macro) => (
          <div key={macro._id} className='macro--container'>
            <p>fats: {macro.fats}g</p>
            <p>cholesterol: {macro.cholesterol}g</p>
            <p>sodium: {macro.sodium}g</p>
            <p>fiber: {macro.fiber}g</p>
            <p>sugar: {macro.sugar}g</p>
            <p>protein: {macro.protein}g</p>
            <p>date: {macro.updatedAt.substr(0, 10)}</p>
            <button onClick={toToggle}>Edit Entry</button>
            {toggle && <MacroEditForm id={macro._id} />}
            <br></br>
            <br></br>
            <button onClick={() => handleClick(macro._id)}>Delete Macro Stat</button>
          </div>
        ))
      ) : (
        <p>No macros available</p>
      )}
    </div>
  )
}