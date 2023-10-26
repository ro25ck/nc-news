import React from 'react'

export default function CommentInput() {
  return (<>
    <div>this area needs to capture: username, comment body, timestamp</div>
    <div id='form-new-comment'>
        <form
            label="user"
            type="text"
            placeholder="your username here..."
        />
    </div>
    </>
  )
}
