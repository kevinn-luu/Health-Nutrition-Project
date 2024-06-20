import React from 'react'
import {Link} from "react-router-dom"
import api from "../services/api";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <div> 
      <Link to="/personal">TO PERSONAL</Link>
    </div>
  );
};

export default Home