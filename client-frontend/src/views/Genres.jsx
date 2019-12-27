/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import "../assets/news-css/news.css";
import "../assets/list-css/list.css";
import MovieCard from "../components/MovieCard";
import CustomCarousel from "../components/CustomCarousel";
import queryString from "query-string";
import { getMovieListByGenreId } from "../utils/MovieAPI";
import { Link } from "react-router-dom";
import { Pagination } from "react-bootstrap";

const Genres = props => {
  const [movieList, setMovieList] = useState([]);
  const [totalPages, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const parsed = queryString.parse(props.location.search);
    let { id, page } = parsed;
    if (id === undefined) id = 1;
    if (page === undefined) page = 0;

    getMovieListByGenreId(id, page)
      .then(result => {
        setMovieList(result.content);
        setTotalPage(result.totalPages);
        setCurrentPage(result.number);
      })
      .catch(err => console.log(err));
  }, [props.location.search]);

  // Event when click PageNavigation
  function handlePageClick(number) {
    const parsed = queryString.parse(props.location.search);

    props.history.push({
      pathname: props.location.pathname,
      search: `?id=${parsed.id}&page=${number}`,
      state: { ...props.location.state }
    });
  }

  // List chứa nút phân trang
  let pageItems = [];

  for (let i = 0; i < totalPages; i++) {
    pageItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => handlePageClick(i)}
      >
        {i + 1}
      </Pagination.Item>
    );
  }

  return (
    <div className="general-agileits-w3l">
      <div className="w3l-medile-movies-grids">
        <div className="movie-browse-agile">
          <div className="browse-agile-w3ls general-w3ls">
            <div className="tittle-head">
              <h4 className="latest-text">
                {props.location.state.element.name}
              </h4>
              <div className="container">
                <div className="agileits-single-top">
                  <ol className="breadcrumb">
                    <li>
                      <Link to="/">Trang chủ</Link>
                    </li>
                    <li className="active">
                      {props.location.state.element.name}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="browse-inner">
                {movieList.map((movie, index) => {
                  if (index % 9 === 5)
                    return (
                      <React.Fragment>
                        <MovieCard
                          key={movie.id}
                          movieId={movie.id}
                          imgUrl={movie.poster_path}
                          movieName={movie.title}
                          isNew={false}
                          release={2016}
                        />
                        <div className="clearfix"> </div>
                      </React.Fragment>
                    );
                  else
                    return (
                      <MovieCard
                        key={movie.id}
                        movieId={movie.id}
                        imgUrl={movie.poster_path}
                        movieName={movie.title}
                        isNew={false}
                        release={2016}
                      />
                    );
                })}
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
          <div className="blog-pagenat-wthree">
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              {pageItems}
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </div>
        </div>
        <div className="review-slider">
          <h4 className="latest-text">Movie Reviews</h4>
          <div className="container">
            <div className="w3_agile_banner_bottom_grid">
              <CustomCarousel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;
