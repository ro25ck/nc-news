import React from 'react'
import { useState, useEffect } from 'react'
import { getArticleById } from '../api'
import { useParams } from 'react-router'

const data2 = [{"comment_id":162,"body":"Et suscipit maxime sit sunt consequuntur consequatur fugiat molestias. Et quis enim vero.","article_id":2,"author":"grumpy19","votes":14,"created_at":"2020-10-03T19:22:00.000Z"},{"comment_id":102,"body":"Quia quos adipisci sint expedita voluptatem id ut at accusantium. Et ex itaque recusandae aut quo. Quia quam similique eum quidem iusto. Aspernatur ducimus vitae vel natus doloribus qui id. Excepturi voluptatem qui quia sit qui eveniet voluptatem. Fugit itaque libero quibusdam sunt.","article_id":2,"author":"jessjelly","votes":10,"created_at":"2020-09-14T12:13:00.000Z"}]

const commentFormat = data2.map((comment) => {
    const {comment_id, body, votes, author, created_at} = comment
    //need to grab avatar image if showing one
    return (
    <>
    <p><a href='#'>{author}</a> | {created_at.substring(0,10)} | votes: {votes}</p>
    <p key={comment_id}>{body}</p>
    </>
    )
})


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
        <p>By <a href='#'>{data.author}</a> | Posted: {data.created_at.substring(0,10)} | Votes: {data.votes}</p>
    </div>
    <div id="ArticleBody" className='SingleArticleBody'>
        <p>{data.body}</p>
    </div>
    <div id="ArticleComments" className='SingleArticleComments'>
        <a id="article_comments"></a>
        <h4>Comments: {data2.length}</h4> 
        <p>{commentFormat}</p>
        <button >add comment</button>
    </div>
    </>
  )
}
