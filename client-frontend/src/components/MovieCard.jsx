import React from "react";
import StarRatings from "react-star-ratings";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../constants/the-movie-db-api";
import { Link } from "react-router-dom";

const MovieCard = ({ movieId, imgUrl, movieName, release, isNew }) => {
  const year = (new Date(release)).getFullYear;
  return (
    <div className="col-md-2 w3l-movie-gride-agile">
      <Link to={`/movie/${movieId}`} className="hvr-shutter-out-horizontal">
        <img
          src={`${IMAGE_BASE_URL}${POSTER_SIZE}${imgUrl}`}
          title={movieName}
          className="img-responsive"
          alt=" "
        />
        <div className="w3l-action-icon">
          <i className="fa fa-play-circle" aria-hidden="true"></i>
        </div>
      </Link>
      <div className="mid-1 agileits_w3layouts_mid_1_home">
        <div className="w3l-movie-text">
          <h6>
            <Link to={`/movie/${movieId}`}>{movieName}</Link>
          </h6>
        </div>
        <div className="mid-2 agile_mid_2_home">
          <p>{year}</p>
          <div className="block-stars">
            <StarRatings
              rating={2.3}
              starRatedColor="orange"
              starHoverColor="orange"
              starSpacing="3px"
              starDimension="15px"
              // changeRating={changeRating}
              numberOfStars={5}
              name="rating"
            />
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
      {isNew ? (
        <div className="ribben">
          <p>NEW</p>
        </div>
      ) : null}
    </div>
  );
};

export default MovieCard;
