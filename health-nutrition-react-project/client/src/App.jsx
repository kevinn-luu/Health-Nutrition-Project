import React, { useEffect, useState } from "react";
import api from "./services/api";
import {Routes, Route} from 'react-router-dom'
import Home from "./routes/Home.jsx"
import Personal from "./routes/Personal.jsx";
import Macro from "./routes/Macro.jsx"
import CalorieTrackerPage from "./routes/CalorieTrackerPage.jsx";
import MacrosByDate from "./components/macros/MacrosByDate.jsx";
import Layout from "./components/Layout.jsx";

function app () {

  return (
    <Layout>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/personal/macro" element={<Macro />} />
          <Route path="/personal/calorie" element={<CalorieTrackerPage />} />
          <Route path="/personal/macro/dates" element={<MacrosByDate />} />
        </Routes>
      </div>
    </Layout>
  )
};

export default app;