import React, { useEffect } from "react";
import { GenreMovieArray1 } from "../variable";
import StarRatings from "react-star-ratings";

const Item = ({ imgUrl, movieName, release, isNew }) => {
  useEffect(() => {
    window.$(document).ready(function() {
      window.$("#owl-demo").owlCarousel({
        autoPlay: 3000, //Set AutoPlay to 3 seconds

        items: 5,
        itemsDesktop: [640, 4],
        itemsDesktopSmall: [414, 3]
      });
    });
  });

  return (
    <div className="w3l-movie-gride-agile">
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

const CustomCarousel = () => {
  return (
    <div id="owl-demo" className="owl-carousel owl-theme">
      {GenreMovieArray1.map((movie, index) => {
        return (
          <Item
            imgUrl={movie.imgUrl}
            movieName={movie.movieName}
            release={movie.release}
            isNew={movie.isNew}
            key={index}
          />
        );
      })}
    </div>
  );
};

export default CustomCarousel;
