import React from 'react'

function Message({text, username}) {
    return (
        <div>
            <h4>{text}</h4>
            {username}
        </div>
    )
}

export default Message
