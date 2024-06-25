import React from 'react'
import {Link} from "react-router-dom"
import api from "../services/api";
import { useEffect, useState } from "react";

const Home = () => {
  return (
    <div> 
      <button><Link to="/personal">TO PERSONAL</Link></button>
      <button><Link to="/community">TO COMMUNITY</Link></button>
    </div>
  );
};

export default Home