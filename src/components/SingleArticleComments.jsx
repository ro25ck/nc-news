import React from 'react'
import { useState, useEffect } from 'react'
import { getCommentsByArticleId } from '../api'
import CommentShowCard from './CommentShowCard'


export default function SingleArticleComments({article_id}) {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])
  
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
    <div>
        <a id="article_comments"></a>
        <h4>Comments: {data.length}</h4> 
        <p><CommentShowCard data={data}/></p>
        <button >add comment</button>

    </div>
  )
}
