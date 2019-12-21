import React from "react";
import { comments } from "../variable";
import { Media } from "react-bootstrap";

const Comment = ({ name, avatar, content }) => {
  return (
    <Media>
      <Media.Left>
        <img src={avatar} alt="thumbnail" />
      </Media.Left>
      <Media.Body>
        <Media.Heading>{name}</Media.Heading>
        <p>{content}</p>
        <span>Ngày đăng</span>
      </Media.Body>
    </Media>
  );
};

const CommentPane = () => {
  return (
    <div className="media-grids">
      {comments.map((comment, index) => {
        return (
          <Comment
            name={comment.name}
            key={index}
            avatar={comment.avatar}
            content={comment.content}
          />
        );
      })}
    </div>
  );
};

export default CommentPane;
