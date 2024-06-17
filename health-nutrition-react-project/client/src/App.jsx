import React, { useEffect, useState } from "react";
import api from "./services/api";

function app () {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/data');
        setData(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Connect frontend backend test</h1>
      {data ? <h2>{data.message}</h2>: <h2>No message from backend</h2>}
    </div>
  )
};

export default app;