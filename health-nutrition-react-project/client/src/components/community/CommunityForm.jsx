import React from 'react'
import {useState} from 'react'
import axios from 'axios';

const CommunityForm = () => {

  const [messageData, setMessageData] = useState({
    "username": "", 
    "entry": "",
  }); 

  function handleChange(event) {
    const {name, value} = event.target; 
    setMessageData(prevMessageData => {
      return {
        ...prevMessageData,
        [name]: value
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(messageData)
    axios
      .post('http://localhost:5555/community', messageData)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      })

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <label className='community-form-label'>Username:
          <input
            type="text"
            placeholder='username'
            name="username"
            onChange={handleChange}
            value={messageData.username}
          />
        </label>
        <label className='community-form-label'>Enter Your Message:
          <input
            type="text"
            placeholder='entry'
            name="entry"
            onChange={handleChange}
            value={messageData.entry}
          />
        </label>
        <button>Submit</button>
      </div>
    </form>
  )
}

export default CommunityForm