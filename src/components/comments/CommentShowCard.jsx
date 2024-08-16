import React from "react";
import "./comments.css";

export default function CommentShowCard({ data }) {
  const commentFormatted = data.map((comment) => {
    const { comment_id, author, created_at, votes, body } = comment;
    return (
      <div key={comment_id} className="container__comment">
        <div className="comment__header">
          <b>{author}</b> | {created_at.substring(0, 10)} | votes: {votes}
        </div>
        <div className="comment_body">{body}</div>
      </div>
    );
  });

  return <div>{commentFormatted}</div>;
}
