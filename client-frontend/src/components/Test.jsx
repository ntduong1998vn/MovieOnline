import React from "react";
import { Col } from "react-bootstrap";

const MovieCard = ({ imgUrl, movieName, release, isNew, ...rest }) => {
  return (
    <Col {...rest} className="w3l-movie-gride-agile">
      <a href="single.html" className="hvr-shutter-out-horizontal">
        <img
          src={imgUrl}
          title={movieName}
          className="img-responsive"
          alt=" "
        />
        <div className="w3l-action-icon">
          <i className="fa fa-play-circle" aria-hidden="true"></i>
        </div>
      </a>
      <div className="mid-1 agileits_w3layouts_mid_1_home">
        <div className="w3l-movie-text">
          <h6>
            <a href="single.html">{movieName}</a>
          </h6>
        </div>
        <div className="mid-2 agile_mid_2_home">
          <p>{release}</p>
          <div className="block-stars">
            <ul className="w3l-ratings">
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-star" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-star-o" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-star-half-o" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      {isNew ? (
        <div className="ribben">
          <p>NEW</p>
        </div>
      ) : null}
    </Col>
  );
};

export default MovieCard;
