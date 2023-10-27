import React from 'react'
import {useState} from 'react'

export default function CommentInput() {
    const [message, setMessage] = useState("")
  return (
    <form>
        <div id='form-new-comment'>
            <textarea 
                value={message}
                onChange={e => setMessage(e.target.value)}
            />
        </div>
        <div>
            Error
        </div>
    </form>
  )
}
