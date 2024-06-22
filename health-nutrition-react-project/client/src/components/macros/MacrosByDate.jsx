import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'


const MacrosByDate = () => {
  const [loading, setLoading] = React.useState(false)
  const [macros, setMacros] = useState([]); 
  const [currentMacro, setCurrentMacro] = useState([])


  useEffect(() => {
    setLoading(true);
    axios
      .get('http://localhost:5555/personal/macro')
      .then((res) => {
        setMacros(res.data.data);
        setCurrentMacro(res.data.data[0]);
        console.log(res.data.data);
        setLoading(false);
      })
    .catch((err) => {
      console.log(err); 
    })
  }, [])

  return (
    <div>
      {loading? (<h1>DEEEEUIGH</h1>) : (
        <div>
          <h2>Pick a date to see your macros</h2>
          {macros.length > 0 ? (<div>
            {macros.map((macro) => {
              return <div key={macro._id}>
                      <button>{macro.updatedAt.substr(0, 10)}</button>
                    </div>
            })}
            </div>) : (<p>No Macros Available</p>)}
        </div>
      )}
      <div className="macro-get-by-id-container">
        <h1>test</h1>
      </div>


    </div>
  ) 
}

export default MacrosByDate