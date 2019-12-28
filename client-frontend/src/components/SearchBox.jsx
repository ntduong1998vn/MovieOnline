import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const SearchBox = props => {
  const [searchTerm, setTerm] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    props.history.push({ pathname: "/search", state: { keyword: searchTerm } });
  }

  function onChange(e) {
    setTerm(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="Search"
        placeholder="Tìm kiếm tại đây"
        required=""
        onChange={onChange}
      />
      <input type="submit" value="Tìm kiếm" />
    </form>
  );
};

export default withRouter(SearchBox);
