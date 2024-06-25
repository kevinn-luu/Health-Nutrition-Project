import React from 'react'
import {Link} from "react-router-dom"

const Personal = () => {
  return (
    <div>
      <button><Link to="/personal/macro">CHECK UR MACROS BOZO</Link></button>
      <button><Link to="/personal/calorie">CALORIE DEEEEUIGH DOOOOSH</Link></button>
      <button><Link to="/">BACK TO HOME</Link></button>
    </div>
  )
}

export default Personal