import React from 'react'
import { useState, useEffect } from 'react'
import { getCommentsByArticleId } from '../api'
import CommentShowCard from './CommentShowCard'
import CommentInput from './CommentInput'


export default function SingleArticleComments({article_id}) {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  const [showCommentInput, setShowCommentInput] = useState(false)
 
  
  useEffect(()=>{
    getCommentsByArticleId(article_id)
    .then((fetchedComments)=>{
      setData(fetchedComments)
      setIsLoading(false)
    })
    .catch((error)=> {
      console.log(error.response)
    })
  },[])
  
  if (isLoading) return <p>Loading...</p>

  return (
    <section id="ArticleCommentsAll">
      <div>
        <b>Comments: {data.length}</b> 
        {showCommentInput ? null : (<button onClick={()=>setShowCommentInput(true)}>add a comment</button>)}
        {showCommentInput ? (<button onClick={()=>setShowCommentInput(false)}>discard draft</button>) : null}
      </div>
        {showCommentInput ? <CommentInput /> : null}
        <CommentShowCard data={data}/>
    </section>
  )
}
