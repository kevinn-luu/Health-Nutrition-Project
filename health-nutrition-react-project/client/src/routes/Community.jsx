import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import '../styles/messages.css'
import CommunityMessages from '../components/community/CommunityMessages.jsx'
import {Link} from 'react-router-dom'
import CommunityForm from '../components/community/CommunityForm.jsx'

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
          <div className='community-header'>
            <div className='header-logo'>
              <strong>LOGO</strong>
            </div>
            <nav className='community-navbar'>
              <ul className='community-navbar__menu'>

                <li className='community-navbar__item'>
                  <a href='#' className='community-navbar__link'>
                    <span>Home</span>
                  </a>
                </li>

                <li className='community-navbar__item'>
                  <a href='#' className='community-navbar__link'>
                    <span>Friends</span>
                  </a>
                </li>

                <li className='community-navbar__item'>
                  <a href='#' className='community-navbar__link'>
                    <span>Notifications</span>
                  </a>
                </li>

                <li className='community-navbar__item'>
                  <a href='#' className='community-navbar__link'>
                    <span>Settings</span>
                  </a>
                </li>

                <li className='community-navbar__item'>
                  <a href='#' className='community-navbar__link'>
                    <span>GOD DID</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <section>
            <CommunityForm />
            <CommunityMessages messages={messages} />
          </section>
        </main>
  )
}

export default Community