import React from 'react'

function ArticleShowCard({filteredCategoryData}) {

    const articleListInfo = filteredCategoryData.map((article)=> {
        const {article_id, title, author, created_at, topic, article_img_url, votes, comment_count} = article
        const hrefArticle = "/articles/" + article_id
        const hrefCategory = "/articles?topic="+ topic
        // const hrefArticleComments = hrefArticle + "#article_comments"

        return (<section className="articleCard" key={article_id}>
        <div className='articleCard-header-img'>
        <a href={hrefArticle}><img src={article_img_url} alt={title} ></img></a>
        </div>
        <div className='articleCard-header'><a href={hrefArticle}>{title}</a></div>
        <div className='articleCard-body'>
        <p>Author: <a href="#">{author}</a> | Posted: {created_at.substring(0,10)} </p>
        <p>Votes: {votes} | Comments: <a href={hrefArticle}>{comment_count}</a></p>
        <p>Category: <a href={hrefCategory}>{topic}</a></p>
        </div>
        <div className='articleCard-footer'></div>
        </section>
        )
    })


  return (
    <div className='articleList-grid'>{articleListInfo}</div>
  )
}



export default ArticleShowCard