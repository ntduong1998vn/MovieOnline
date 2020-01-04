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
    // <form>
    //   <div class="input-group">
    //     <input type="text" class="form-control" aria-label="..." />
    //     <div class="input-group-btn">
    //       <button
    //         type="button"
    //         class="btn btn-default dropdown-toggle"
    //         data-toggle="dropdown"
    //         aria-haspopup="true"
    //         aria-expanded="false"
    //       >
    //         Action <span class="caret"></span>
    //       </button>
    //       <ul class="dropdown-menu dropdown-menu-right">
    //         <li>
    //           <a href="#">Action</a>
    //         </li>
    //         <li>
    //           <a href="#">Another action</a>
    //         </li>
    //         <li>
    //           <a href="#">Something else here</a>
    //         </li>
    //         <li role="separator" class="divider"></li>
    //         <li>
    //           <a href="#">Separated link</a>
    //         </li>
    //       </ul>
    //       <input type="submit" value="Tìm kiếm" />
    //     </div>
    //   </div>
    // </form>
  );
};

export default withRouter(SearchBox);
