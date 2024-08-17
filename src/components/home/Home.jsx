import React, { useState, useEffect } from "react";
import "./home.css";
import CategoryList from "../categoryList/CategoryList";
import { getArticles } from "../../api";

function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    getArticles()
      .then((fetchedData) => {
        setData(fetchedData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  const article1 = data[0];
  const article2 = data[1];
  const article3 = data[2];
  const article4 = data[3];
  const article5 = data[4];

  return (
    <>
      <section className="container__categories">
        <CategoryList />
      </section>
      <section className="container__articlesFeatured">
        <div className="container__articlesFeatured-main">
          <img
            src={article1.article_img_url}
            className="articlesFeatured__main-img"
          ></img>
          <div className="container__articlesFeatured-main-text">
            <div className="articlesFeatured__main-topic">
              {article1.topic}
            </div>
            <h1>{article1.title}</h1>
            <p>By {article1.author}</p>
          </div>
        </div>
        <div className="container__articlesFeatured-secondary">
          <article className='container__articlesFeatured-secondary-article'>
            <div className='container__articlesFeatured-secondary-article2-text'>
            {article2.topic}
            <h2>{article2.title}</h2>
            </div>
            <div className='container__articlesFeatured-secondary-article2-image'><img src={article2.article_img_url}></img></div>
          </article>
          <article className='container__articlesFeatured-secondary-article'>
            <div className='container__articlesFeatured-secondary-article2-text'>
            {article3.topic}
            <h2>{article3.title}</h2>
            </div>
            <div className='container__articlesFeatured-secondary-article2-image'><img src={article3.article_img_url}></img></div>
          </article>
          <article className='container__articlesFeatured-tertiary-article'>
            <div className='container__articlesFeatured-tertiary-article3-text'>
            {article3.topic}
            <h2>{article3.title}</h2>
            </div>
          </article>
          <article className='container__articlesFeatured-tertiary-article'>
            <div className='container__articlesFeatured-tertiary-article3-text'>
            {article4.topic}
            <h2>{article4.title}</h2>
            </div>
          </article>
          <article className='container__articlesFeatured-tertiary-article'>
            <div className='container__articlesFeatured-tertiary-article3-text'>
            {article5.topic}
            <h2>{article5.title}</h2>
            </div>
          </article>
        </div>
      </section>

    </>
  );
}

export default Home;
