import React from 'react'
import { useState, useEffect } from 'react'
import { getArticleById } from '../api'
import { useParams } from 'react-router'
import SingleArticleComments from './SingleArticleComments'

const imgStyle = { 
    maxWidth: "70%",
    }


export default function SingleArticle() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    const { article_id } = useParams()

    useEffect(()=>{
        getArticleById(article_id)
        .then((fetchedArticle)=> {
            setData(fetchedArticle)
            setIsLoading(false)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }, [])

    if (isLoading) return <p>Loading...</p>

  return (
    <>
    <img src={data.article_img_url} key={data.article_id} style={imgStyle}></img>
    <div className='SingleArticleHeader'>
        <p>{data.topic}</p>
        <h4>{data.title}</h4>
        <p>By <b>{data.author}</b> | Posted: {data.created_at.substring(0,10)} | Votes: {data.votes}</p>
    </div>
    <div id="ArticleBody" className='SingleArticleBody'>
        <p>{data.body}</p>
    </div>
    <div id="ArticleComments" className='SingleArticleComments'>
        <SingleArticleComments article_id={article_id}/>
    </div>
    </>
  )
}
