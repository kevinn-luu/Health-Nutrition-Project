import React, { useEffect, useState } from "react";
import api from "./services/api";
import {Routes, Route} from 'react-router-dom'
import Home from "./routes/Home.jsx"
import Personal from "./routes/Personal.jsx";
import Macro from "./routes/Macro.jsx"
import CaloriePage from "./routes/CalorieTrackerPage.jsx";

function app () {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/personal/macro" element={<Macro />} />
        <Route path="/personal/calorie" element={<CaloriePage />} />
      </Routes>

    </div>
  )
};

export default app;