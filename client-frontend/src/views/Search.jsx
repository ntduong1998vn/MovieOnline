import React, { useState, useEffect } from "react";
import { findByTitle } from "../utils/MovieAPI";
import MovieCard from "../components/MovieCard";

const Search = props => {
  const [searchList, setSearchList] = useState([]);

  useEffect(() => {
    const { state } = props.location;
    findByTitle(state.keyword)
      .then(result => setSearchList(result))
      .catch(err => console.error(err));
    return () => {
      searchList.length = 0;
    };
  }, [props.location.state]);

  return (
    <div className="general-agileits-w3l">
      <div className="w3l-medile-movies-grids">
        <div className="movie-browse-agile">
          <div className="browse-agile-w3ls general-w3ls">
            <div className="tittle-head">
              <h4 className="latest-text">Kết quả tìm kiếm</h4>
            </div>
            <div className="container">
              <div className="browse-inner">
                {searchList.map((movie, index) => {
                  if (index % 6 === 5)
                    return (
                      <React.Fragment>
                        <MovieCard
                          key={movie.id}
                          movieId={movie.id}
                          imgUrl={movie.poster_path}
                          movieName={movie.title}
                          isNew={false}
                          release={movie.release_date}
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
                        release={movie.release_date}
                      />
                    );
                })}
                <div className="clearfix"> </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
