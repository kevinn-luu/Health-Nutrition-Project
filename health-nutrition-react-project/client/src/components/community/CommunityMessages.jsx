import React from 'react'

const CommunityMessages = (props) => {
  return (
    <div>
      {props.messages.length > 0 ? (
        props.messages.map((message) => (
          <div key={message._id} className='message-box'>
              <p>User: {message.username}</p>
              <p>Message: {message.entry}</p>
              <p>Date: {message.updatedAt.substr(0,10)}</p>
          </div>
        ))
      ) : (
        <p>No macros available</p>
      )}
    </div>
  )
}

export default CommunityMessages