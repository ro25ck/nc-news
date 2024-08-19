import React from "react";
import "./articles.css";

function ArticlesByTopicShort({data = []}) {
  if (data.length === 0) return <p>No articles available in this category.</p>;
// const data = [{
//   author: "grumpy20",
//   title: "The Notorious MSG’s Unlikely Formula For Success",
//   article_id: 34,
//   topic: "cooking",
//   created_at: "2020-11-22T11:13:00.000Z",
//   votes: 0,
//   article_img_url:
//     "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
//   comment_count: "11",
// },
// {
//   author: "grumpy20",
//   title: "The Notorious MSG’s Unlikely Formula For Success",
//   article_id: 35,
//   topic: "cooking",
//   created_at: "2020-11-22T11:13:00.000Z",
//   votes: 0,
//   article_img_url:
//     "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
//   comment_count: "11",
// },
// {
//   author: "grumpy20",
//   title: "The Notorious MSG’s Unlikely Formula For Success",
//   article_id: 36,
//   topic: "cooking",
//   created_at: "2020-11-22T11:13:00.000Z",
//   votes: 0,
//   article_img_url:
//     "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
//   comment_count: "11",
// },
// {
//   author: "grumpy20",
//   title: "The Notorious MSG’s Unlikely Formula For Success",
//   article_id: 37,
//   topic: "cooking",
//   created_at: "2020-11-22T11:13:00.000Z",
//   votes: 0,
//   article_img_url:
//     "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
//   comment_count: "11",
// }]
  const hrefTopic = "/" + data[0].topic

  const formatTopicArticlesShort = data.map((article)=>{

    const hrefArticle = "/articles/" + article.article_id

    return (
      <article className="container__article" key={article.article_id}>
      <a href={hrefArticle}>
      <div className="article__image">
        <img src={article.article_img_url}></img>
      </div>
      <div className="container__article-text">
        <h2>{article.title}</h2>
        <div className="article__author">By {article.author}</div>
      </div>
      </a>
    </article>
    )
  })


  return (
    <div className="container__ShortList">
      <hr className="ShortList__hr" />
      <div className="ShortList__header">
        <div className="ShortList__topic">
          <h3>{data[0].topic}</h3>
        </div>
        <div className="ShortList__topic-link">
          <a href={hrefTopic}>MORE</a>
        </div>
      </div>
      <div className="container__articles">
       {formatTopicArticlesShort}
      </div>
    </div>
  );
}

export default ArticlesByTopicShort