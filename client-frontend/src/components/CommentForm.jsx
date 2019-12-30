import React, { useState } from "react";
import withContext from "../ContextAuth/Context_HOC";
import { sendComment } from "../utils/CommentAPI";
import Alert from "react-s-alert";

const CommentForm = props => {
  const [commentForm, setForm] = useState({
    userId: "",
    movieId: "",
    content: ""
  });

  function onSubmit(e) {
    e.preventDefault();
    if (!props.context.isAuthenticate)
      Alert.error("Bạn chưa đăng nhập !<br/>Đăng nhập để có thể bình luận");
    else {
      sendComment(commentForm)
        .then(() => {
          Alert.success("Thành công!");
        })
        .catch(err => console.log(err));
      Alert.success("Thêm thành công");
      window.location.reload();
      props.loading();
    }
  }

  function onChange(e) {
    setForm({
      ...commentForm,
      movieId: props.movieId,
      userId: props.context.currentUser.id,
      content: e.target.value
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <textarea
        placeholder="Thêm bình luận"
        required=""
        onChange={onChange}
      ></textarea>
      <input type="submit" value="Đăng" />
    </form>
  );
};

export default withContext(CommentForm);
