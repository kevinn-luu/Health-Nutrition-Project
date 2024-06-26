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
    <div>
      {reversedArray.length > 0 ? (
        reversedArray.map((message) => (
          <div key={message._id} className='message-box'>
            <p>User: {message.username}</p>
            <p>Message: {message.entry}</p>
            <p>Date: {message.updatedAt.substr(0, 10)}</p>
          </div>
        ))
      ) : (
        <p>No macros available</p>
      )}
    </div>
  )
}

export default CommunityMessages