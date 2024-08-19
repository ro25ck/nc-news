import React, { useState, useEffect } from "react";
import { getTopics } from "../../api";
import { useParams } from "react-router";
import './articles.css'

function ArticlesByTopic() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { topic } = useParams();

  useEffect(() => {
    getTopics()
      .then((res) => {
        setData(res.topics);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  const topicInfo = data.filter(description => description.slug === topic);

  const articleData =
  [{
      author: "grumpy20",
      title: "The Notorious MSG’s Unlikely Formula For Success",
      article_id: 34,
      topic: "cooking",
      created_at: "2020-11-22T11:13:00.000Z",
      votes: 0,
      article_img_url:
        "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
      comment_count: "11",
    },
    {
      author: "grumpy20",
      title: "The Notorious MSG’s Unlikely Formula For Success",
      article_id: 35,
      topic: "cooking",
      created_at: "2020-11-22T11:13:00.000Z",
      votes: 0,
      article_img_url:
        "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
      comment_count: "11",
    },
    {
      author: "grumpy20",
      title: "The Notorious MSG’s Unlikely Formula For Success",
      article_id: 36,
      topic: "coding",
      created_at: "2020-11-22T11:13:00.000Z",
      votes: 0,
      article_img_url:
        "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
      comment_count: "11",
    },
    {
      author: "grumpy20",
      title: "The Notorious MSG’s Unlikely Formula For Success",
      article_id: 37,
      topic: "coding",
      created_at: "2020-11-22T11:13:00.000Z",
      votes: 0,
      article_img_url:
        "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
      comment_count: "11",
    },
    {
      author: "grumpy20",
      title: "The Notorious MSG’s Unlikely Formula For Success",
      article_id: 38,
      topic: "football",
      created_at: "2020-11-22T11:13:00.000Z",
      votes: 0,
      article_img_url:
        "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
      comment_count: "11",
    },
    {
      author: "grumpy20",
      title: "The Notorious MSG’s Unlikely Formula For Success",
      article_id: 39,
      topic: "football",
      created_at: "2020-11-22T11:13:00.000Z",
      votes: 0,
      article_img_url:
        "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
      comment_count: "11",
    }
]

  const dataArticlesFilterByTopic = articleData.filter(article=> article.topic === topic)

  const formatArticlesToDisplay = dataArticlesFilterByTopic.map((article)=> {
   return(
   <article className="container__topic-article" key={article.article_id}>
    <a>
    <div className="topic-article__text">
      <h2>{article.title}</h2>
      <div className="article__author">By {article.author}</div>
    </div>
    <div className="topic-article__image">
      <img src={article.article_img_url}></img>
    </div>
    </a>
  </article>
  )
  })

  return (<>
  {isLoading ? <p>Loading...</p> :
   
    <section>
      <div className="container__topic-header">
        <div className="topic-header__title"><h1>{topicInfo[0].slug}</h1></div>
        <p>{topicInfo.length > 0 ? topicInfo[0].description : "No description available"}</p>
      </div>
      <hr className="section-divider"/>
      <div className="container__articlesByTopic">
        {formatArticlesToDisplay}
      </div>
    </section>
}
    </>
  );
}

export default ArticlesByTopic;
