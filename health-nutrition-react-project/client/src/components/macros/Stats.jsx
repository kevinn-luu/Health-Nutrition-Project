import axios from "axios";
import React from "react";
import { useState } from "react"
import MacroEditForm from "./MarcoEditForm";

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
    <div>
      <h1>YOUR MACROS!</h1>
      {props.macros.length > 0 ? (
        props.macros.map((macro) => (
          <div key={macro._id} className='macro--container'>
            <p>fats: {macro.fats}g</p>
            <p>cholesterol: {macro.cholesterol}g</p>
            <p>sodium: {macro.sodium}g</p>
            <p>fiber: {macro.fiber}g</p>
            <p>sugar: {macro.sugar}g</p>
            <p>protein: {macro.protein}g</p>
            <p>time: {macro.updatedAt}</p>
            <button onClick={() => handleClick(macro._id)}>Delete Macro Stat</button>
            <br></br>
            <br></br>
            <button onClick={toToggle}>Edit Entry</button>
            {toggle && <MacroEditForm id={macro._id} />}
          </div>
        ))
      ) : (
        <p>No macros available</p>
      )}
    </div>
  )
}