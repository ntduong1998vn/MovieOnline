import React, { useState, useEffect } from "react";
import "../assets/list-css/basictable.css";
import "../assets/list-css/list.css";
import "../assets/list-css/table-style.css";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../constants/the-movie-db-api";
import { findByLetterBegin } from "../utils/MovieAPI";
import $ from "jquery";
// import basictable from "../../node_modules/basictable/jquery.basictable";

const MovieList = () => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  const [currentLetter, setLetter] = useState("[0-9]");
  const [list, setList] = useState([]);

  useEffect(() => {
    findByLetterBegin(currentLetter)
      .then(result => setList(result))
      .catch(err => console.log(err));

    // $(document).ready(function() {
    //   $('#table').basictable();
    // basictable()
    //   $("#table-breakpoint").basictable({
    //     breakpoint: 768
    //   });
    // });

    return () => {
      setList([]);
    };
  }, [currentLetter]);

  function onClick(letter) {
    setLetter(letter);
  }

  function getYear(release) {
    const year = new Date(release);
    return year.getFullYear();
  }

  return (
    <React.Fragment>
      <div className="faq">
        <h4 className="latest-text w3_faq_latest_text w3_latest_text">
          Danh sách phim
        </h4>
        <div className="container">
          <div className="agileits-news-top">
            <ol className="breadcrumb">
              <li>
                <a href="index.html">Trang chủ</a>
              </li>
              <li className="active">List</li>
            </ol>
          </div>
          <div
            className="bs-example bs-example-tabs"
            role="tabpanel"
            data-example-id="togglable-tabs"
          >
            <ul id="myTab" className="nav nav-tabs" role="tablist">
              <li role="presentation" className="active">
                <a
                  onClick={() => onClick("[0-9]")}
                  href="#home"
                  id="home-tab"
                  role="tab"
                  data-toggle="tab"
                  aria-controls="home"
                  aria-expanded="true"
                >
                  0 - 9
                </a>
              </li>
              {letters.map((letter, index) => {
                return (
                  <li key={index} role="presentation">
                    <a
                      onClick={() => onClick(letter)}
                      href="#a"
                      role="tab"
                      id={letter + "-tab"}
                      data-toggle="tab"
                      aria-controls={letter}
                    >
                      {letter.toUpperCase()}
                    </a>
                  </li>
                );
              })}
            </ul>
            <div id="myTabContent" className="tab-content">
              <div
                role="tabpanel"
                className="tab-pane fade in active"
                id="home"
                aria-labelledby="home-tab"
              >
                <div className="agile-news-table">
                  <div className="w3ls-news-result">
                    <h4>
                      Search Results : <span>{list.length}</span>
                    </h4>
                  </div>
                  <table id="table-breakpoint">
                    <thead>
                      <tr>
                        <th>No.</th>
                        <th>Movie Name</th>
                        <th>Year</th>
                        <th>Status</th>
                        <th>Country</th>
                        <th>Genre</th>
                        <th>Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {list.map((movie, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td className="w3-list-img">
                              <a href="single.html">
                                <img
                                  src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                                  alt=""
                                />{" "}
                                <span>{movie.title}</span>
                              </a>
                            </td>
                            <td>{getYear(movie.release_date)}</td>
                            <td>HD</td>
                            <td className="w3-list-info">
                              <a href="genres.html">United Kingdom</a>
                            </td>
                            <td className="w3-list-info">
                              <a href="comedy.html">Comedy, Drama</a>
                            </td>
                            <td>7.0</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MovieList;
