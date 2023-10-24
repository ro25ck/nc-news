import React from 'react'
import { useState, useEffect } from 'react'
import { getArticles } from '../api'


function Articles() {
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([])
    
    useEffect(()=>{
        getArticles()
        .then((fetchedData) => {
            setData(fetchedData)
            setIsLoading(false)
        })
        .catch((error)=>{
            console.log(error.response)
        })
    }, [])
    
    if (isLoading) return <p>Loading...</p>

    const articleListInfo = data.map((article)=> {
        const {article_id, title, author, created_at, topic, article_img_url, votes, comment_count} = article
        const hrefArticle = "/articles/" + article_id
        const hrefArticleComments = hrefArticle + "#article_comments"
/* next iteration of page 
   Category link will re-render current Articles component with filtered list of articles in queried category
   Author link will re-render current Articles component with filtered list of articles in queried author

*/

        return (
            <section className="articleCard" key={article_id}>
            <div>
            <a href={hrefArticle}><img src={article_img_url} alt={title} ></img></a>
            </div>
            <div>
            <p>Title: <a href={hrefArticle}>{title}</a></p>
            <p>Author: <a href="#">{author}</a></p>
            <p>Category: <a href="#">{topic}</a></p>
            <p>Posted: {created_at.substring(0,10)}</p>
            <p>Votes: {votes}</p>
            <p>Comment: <a href={hrefArticleComments}>{comment_count}</a></p>
            </div>
            </section>
        )
    })

    return (
        <>
        <section className="main-articleList">
            <p>Here is the list all the articles on the site</p>
                <section id="articleList">
                {articleListInfo}
                </section>
        </section>
    </>
  )
}

export default Articles