import React from 'react'
import { useState, useEffect } from 'react'
import { getCommentsByArticleId } from '../../api'
import CommentShowCard from './CommentShowCard'
import "./comments.css"


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
    <section id="ArticleCommentsAll" >
      <div className='container__allComments-header'>
        <b>Comments: {data.length}</b> <button >add a comment</button>
      </div>
        <CommentShowCard data={data}/>
    </section>
  )
}
