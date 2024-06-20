import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

const Macro = () => {
  const [loading, setLoading] = useState(false)
  const [macros, setMacros] = useState([])

  useEffect(() => {
    setLoading(true)
    axios
      .get('http://localhost:5555/personal/macro')
      .then((res) => {
        setMacros(res.data.data)
        setLoading(false)
      })
    .catch((err) => {
      console.log(err); 
    })
  }, [])

  return (

    <div>
      {loading ? ( <p>DEEEEUIGH</p>) : (
        // <div>
        //   {
        //     macros.map((macro) => {
        //       <div key={macro._id} style={{border: "5px solid", margin: "10px"}}>
        //         <p>
        //           fats: {macro.fats}
        //         </p>
        //       </div>
        //     })
        //   }
        // </div>
        <p>{macros[0].fats}</p>
      )}

    </div>
  )
}

export default Macro