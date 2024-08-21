import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { ArticleContext } from "../../ArticleContext.jsx";
import { getTopics } from "../../api";
import './articles.css'

function ArticlesByTopic() {
  
  const {articles, loading} = useContext(ArticleContext)
  const { topic } = useParams();

  const [topicInfo, setTopicInfo] = useState(null)
  const [isLoadingTopicInfo, setIsLoadingTopicInfo] = useState(true)

  useEffect(()=> {
    getTopics()
    .then((res) => {
      const topicData = res.topics.find(description => description.slug === topic)
      setTopicInfo(topicData)
      setIsLoadingTopicInfo(false);
    })
    .catch((error) => {
      console.error("Error fetching topic info: ", error)
    })
  }, [topic])

  if (loading || isLoadingTopicInfo) return <p>Loading...</p>

  const articlesFilterByTopic = articles.filter(article=> article.topic === topic)

  const formatArticlesToDisplay = articlesFilterByTopic.map((article) => {
    const hrefArticle = "/articles/" + article.article_id;
    const truncateBodyText = (text, limit)=> {
      if (text.length > limit) {
        return text.substring(0, limit) + "..."
      }
      return text
    }

    return (
      <article className="container__topic-article" key={article.article_id}>
        <a href={hrefArticle}>
          <div className="topic-article__text">
            <h2>{article.title}</h2>
            <p>{truncateBodyText(article.body, 100)}</p>
            <div className="article__author">By {article.author}</div>
          </div>
          <div className="topic-article__image">
            <img src={article.article_img_url} alt={article.title} />
          </div>
        </a>
      </article>
    );
  });

  return (
    <section>
      {topicInfo && (
        <div className="container__topic-header">
          <div className="topic-header__title"><h1>{topicInfo.slug}</h1></div>
          <p>{topicInfo.description || "No description available"}</p>
        </div>
      )}
      <hr className="section-divider" />
      <div className="container__articlesByTopic">
        {formatArticlesToDisplay.length > 0 ? formatArticlesToDisplay : <p>No articles available for this topic.</p>}
      </div>
    </section>
  );
}

export default ArticlesByTopic;