import React from 'react'
import {useState} from 'react'


 function CommentInput(onSubmit) {
    const [message, setMessage] = useState("")
    const [newComment, setNewComment] = useState("")
    const [isValidMessage, setIsValidMessage] = useState("")

    function actionSubmit(e) {
        e.preventDefault()
        if(message.length !== 0)
        onSubmit(message)
          .then(()=> { 
            setMessage("") //clear input boxk
            setIsValidMessage(true)}) //validation check
            
        .catch(()=>{
            setIsValidMessage(false)
            setMessage(message)
        })
    }


  return (
    <form onSubmit={actionSubmit}>
        <div id='form-new-comment' className="inputComment">
            <textarea 
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder='Share your reaction...'
            />
            <button type="submit">Post</button>
        </div>
    </form>
  )
}

export default CommentInput