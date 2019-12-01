import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navigation = ({ movie }) => (
  <div class="agileits-single-top">
    <ol class="breadcrumb">
      <li>
        <Link to="/">
          <p>Home</p>
        </Link>
      </li>
      <li class="active">{movie}</li>
    </ol>
  </div>
);

Navigation.propTypes = {
  movie: PropTypes.string
};

export default Navigation;
