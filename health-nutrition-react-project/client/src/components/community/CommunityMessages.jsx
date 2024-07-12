import React from 'react'

const CommunityMessages = (props) => {
  const fromEarliest = props.messages;
  const reversedArray = []

  for (let i = fromEarliest.length - 1; i >= 0; i--) {
    const valueAtIndex = fromEarliest[i]

    reversedArray.push(valueAtIndex)
  }

  console.log(reversedArray)

  return (
    <div className='messages-container'>
      <div className='message-sidebar'>
        <ul className='sidebar-menu'>
          <li>Profile</li>
          <li>Likes</li>
          <li>Saved Posts</li>
          <li>Logout</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className='messages'>
        {reversedArray.length > 0 ? (
          reversedArray.map((message) => (
            <div key={message._id} className='message-box'>
              <p className='user'>{message.username}</p>
              <p className='user-message'>Message: {message.entry}</p>
              <p className='user-message-date-time'>
                <span className='user-message-date'>Date: {message.updatedAt.substr(0, 10)}</span>
                <span className='user-message-time'>Time: {message.updatedAt.substr(12,16)}</span>
              </p>
            </div>
          ))
        ) : (
          <p>No macros available</p>
        )}
      </div>
      <div className='third-container'>
        <h1>Third container here</h1>
      </div>
    </div>
  )
}

export default CommunityMessages