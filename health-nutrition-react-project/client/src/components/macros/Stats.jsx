import React from "react";

export default function Stats(props) {
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
          </div>
        ))
      ) : (
        <p>No macros available</p>
      )}
    </div>
  )
}