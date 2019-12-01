/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../assets/news-css/news.css";
import "../assets/list-css/list.css";
import { GenreMovieArray1, GenreMovieArray2 } from "../variable";
import MovieCard from "../components/MovieCard";
import CustomCarousel from "../components/CustomCarousel";

const Genres = () => {
  return (
    <div class="general-agileits-w3l">
      <div class="w3l-medile-movies-grids">
        <div class="movie-browse-agile">
          <div class="browse-agile-w3ls general-w3ls">
            <div class="tittle-head">
              <h4 class="latest-text">Family Movies </h4>
              <div class="container">
                <div class="agileits-single-top">
                  <ol class="breadcrumb">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li class="active">Genres</li>
                  </ol>
                </div>
              </div>
            </div>
            <div class="container">
              <div class="browse-inner">
                {GenreMovieArray1.map((movie, index) => {
                  return (
                    <MovieCard
                      imgUrl={movie.imgUrl}
                      movieName={movie.movieName}
                      release={movie.release}
                      isNew={movie.isNew}
                      key={index}
                    />
                  );
                })}
                <div class="clearfix"> </div>
              </div>
              <div class="browse-inner-come-agile-w3">
                {GenreMovieArray2.map((movie, index) => {
                  return (
                    <MovieCard
                      imgUrl={movie.imgUrl}
                      movieName={movie.movieName}
                      release={movie.release}
                      isNew={movie.isNew}
                      key={index}
                    />
                  );
                })}
                <div class="clearfix"> </div>
              </div>
            </div>
          </div>
          <div class="blog-pagenat-wthree">
            <ul>
              <li>
                <a class="frist" href="#">
                  Prev
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
              <li>
                <a class="last" href="#">
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="review-slider">
          <h4 class="latest-text">Movie Reviews</h4>
          <div class="container">
            <div class="w3_agile_banner_bottom_grid">
              <CustomCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
