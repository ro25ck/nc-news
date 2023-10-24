import React from 'react'

function ArticleShowCard({data}) {

    const articleListInfo = data.map((article)=> {
        const {article_id, title, author, created_at, topic, article_img_url, votes, comment_count} = article
        const hrefArticle = "/articles/" + article_id
        const hrefArticleComments = hrefArticle + "#article_comments"

        return (<section className="articleCard" key={article_id}>
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
    <div>{articleListInfo}</div>
  )
}



export default ArticleShowCard