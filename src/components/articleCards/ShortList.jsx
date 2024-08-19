import React from "react";


function ShortList() {

  const data = [{
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
    article_id: 37,
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
    article_id: 38,
    topic: "cooking",
    created_at: "2020-11-22T11:13:00.000Z",
    votes: 0,
    article_img_url:
      "https://images.pexels.com/photos/2403392/pexels-photo-2403392.jpeg?w=700&h=700",
    comment_count: "11",
  }]


  return (
    <div className="container__ShortList">
      <hr className="ShortList__hr" />
      <div className="ShortList__header">
        <div className="ShortList__topic">
          <h3>{data[0].topic}</h3>
        </div>
        <div className="ShortList__topic-link">
          <a href="#">MORE</a>
        </div>
      </div>
      <div className="container__articles">
        <article className="container__article">
          <div className="article__image">
            <img src={data[0].article_img_url}></img>
          </div>
          <div className="container__article-text">
            <h2>{data[0].title}</h2>
            <div className="article__author">By {data[0].author}</div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default ShortList;
