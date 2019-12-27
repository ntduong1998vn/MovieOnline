import React, { useEffect, useState } from "react";
import { comments } from "../variable";
import { Media } from "react-bootstrap";
import { getCommentList } from "../utils/CommentAPI";

const Comment = ({ name, avatar, content }) => {
  return (
    <Media>
      <Media.Left>
        <img src={avatar} alt="thumbnail" height="50" width="50" />
      </Media.Left>
      <Media.Body>
        <Media.Heading>{name}</Media.Heading>
        <p>{content}</p>
        <span>Ngày đăng</span>
      </Media.Body>
    </Media>
  );
};

const CommentPane = ({ movieId, loading }) => {
  const [commentList, setList] = useState([]);
  const [currentPage, setPage] = useState(0);

  useEffect(() => {
    if (loading === false) return;
    getCommentList(movieId, currentPage).then(response => {
      setList(response.content);
      setPage(response.number);
    });
  }, [currentPage, movieId, loading]);

  return (
    <div className="media-grids">
      {commentList.map(comment => {
        return (
          <Comment
            name={comment.name}
            key={comment.id}
            avatar={comment.imageUrl}
            content={comment.content}
          />
        );
      })}
    </div>
  );
};

export default CommentPane;
