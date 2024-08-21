import React, { useState, useEffect, useContext } from "react";
import "./home.css";
// import { getArticles } from "../../api";
import CategoryList from "../categoryList/CategoryList";
import ArticlesByTopicShort from "../articles/ArticlesByTopicShort";
import { ArticleContext } from "../../ArticleContext";

function Home() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   getArticles()
  //     .then((fetchedData) => {
  //       setData(fetchedData);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // }, []);
  // if (isLoading) return <p>Loading...</p>;
  const {articles, loading} = useContext(ArticleContext)
  if (loading) return <p>Loading...</p>

  const article1 = articles[0] || {};;
  const article2 = articles[1] || {};;
  const article3 = articles[2] || {};;
  const article4 = articles[3] || {};;
  const article5 = articles[4] || {};;
  const article6 = articles[5] || {};;

  const articleTopic1 = 
    articles
    .filter(article => article.topic && article.topic === "coding" )
    .slice(0 ,5)
  const articleTopic2 = 
    articles
    .filter(article => article.topic && article.topic === "cooking" )
    .slice(0,5)
  const articleTopic3 = 
    articles
    .filter(article => article.topic && article.topic === "football" )
    .slice(0,5)

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
            <div className="article__topic">{article2.topic}</div>
            <h2>{article2.title}</h2>
            </div>
            <div className='container__articlesFeatured-secondary-article2-image'><img src={article2.article_img_url}></img></div>
          </article>
          <article className='container__articlesFeatured-secondary-article'>
            <div className='container__articlesFeatured-secondary-article2-text'>
            <div className="article__topic">{article3.topic}</div>
            <h2>{article3.title}</h2>
            </div>
            <div className='container__articlesFeatured-secondary-article2-image'><img src={article3.article_img_url}></img></div>
          </article>
          <article className='container__articlesFeatured-tertiary-article'>
            <div className='container__articlesFeatured-tertiary-article3-text'>
            <div className="article__topic2">{article4.topic}</div>
            <h2>{article4.title}</h2>
            </div>
          </article>
          <article className='container__articlesFeatured-tertiary-article'>
            <div className='container__articlesFeatured-tertiary-article3-text'>
            <div className="article__topic2">{article5.topic}</div>
            <h2>{article5.title}</h2>
            </div>
          </article>
          <article className='container__articlesFeatured-tertiary-article'>
            <div className='container__articlesFeatured-tertiary-article3-text'>
            <div className="article__topic2">{article6.topic}</div>
            <h2>{article6.title}</h2>
            </div>
          </article>
        </div>
      </section>
      <section className="container__shortListByTopic">
        <ArticlesByTopicShort data={articleTopic1}/>
      </section>
      <section className="container__shortListByTopic">
      <ArticlesByTopicShort data={articleTopic2}/>
      </section>
      <section className="container__shortListByTopic">
      <ArticlesByTopicShort data={articleTopic3}/>
      </section>

    </>
  );
}

export default Home;
