import React from 'react'

export default function CommentShowCard({data}) {

    const commentFormatted = data.map((comment)=>{

        const {comment_id, author, created_at, votes, body } = comment
        return (
          <>
            <p>{author} | {created_at.substring(0,10)} | votes: {votes}</p>
            <p key={comment_id}>{body}</p>
          </>
          )
      })


  return (
    <div>{commentFormatted}</div>
  )
}

