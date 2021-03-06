import React from 'react'

function Message({message, timestamp, user, userImage }) {
  return (
    <div className='message'>
      <img src={userImage} alt=''/>
      <div className='message__info'>
        <h4>{user} 
          <span className="message_timestamp">
            {new Date(timestamp?.toDate()).toLocaleString()}
          </span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Message
