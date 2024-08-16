import React from "react";
import { useState, useEffect } from "react";
import { getArticleById } from "../../api.js";
import { useParams } from "react-router";
import SingleArticleComments from "../comments/SingleArticleComments.jsx";
import Votes from "../Votes.jsx";
import "./singleArticle.css";

function SingleArticle() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((fetchedArticle) => {
        setData(fetchedArticle);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return (
    <article className="article__content">
      <div className="article__content-header">
        <div className="article__content-category">{data.topic}</div>
        <div className="article__content-title">
          <h1>{data.title}</h1>
        </div>
        <div className="article__content-credit">
          <p>
            by <b>{data.author}</b> | Posted: {data.created_at.substring(0, 10)}{" "}
            | <Votes data={data} />
          </p>
        </div>
      </div>
      <img src={data.article_img_url} key={data.article_id}></img>
      <div className="article__content-body">
        {data.body}
      </div>
      <div className="article__content-comments">
        <SingleArticleComments article_id={article_id} />
      </div>
    </article>
  );
}

export default SingleArticle;
