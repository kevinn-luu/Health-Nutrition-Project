import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../styles/messages.css'
import CommunityMessages from '../components/community/CommunityMessages.jsx'
import {Link} from 'react-router-dom'

const Community = () => {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5555/community")
      .then((res) => {
        setMessages(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])

  return (
    <main>
          <nav className="macro-nav">
            <h1>COMMUNITY BOARD</h1>
            <button><Link to="/">Back Home</Link></button>
          </nav>
          <section>
            <CommunityMessages messages={messages} />
 
          </section>
        </main>
  )
}

export default Community