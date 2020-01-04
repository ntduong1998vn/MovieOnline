import React from "react";
import MovieCard from "../components/MovieCard";

const Feature = ({ feature, recently, topview }) => {
  return (
    <div className="general">
      <h4 className="latest-text w3_latest_text">Phim đề cử</h4>
      <div className="container">
        <div
          className="bs-example bs-example-tabs"
          role="tabpanel"
          data-example-id="togglable-tabs"
        >
          <ul id="myTab" className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active">
              <a
                href="#home"
                id="home-tab"
                role="tab"
                data-toggle="tab"
                aria-controls="home"
                aria-expanded="true"
              >
                Ngẫu nhiên
              </a>
            </li>
            <li role="presentation">
              <a
                href="#profile"
                role="tab"
                id="profile-tab"
                data-toggle="tab"
                aria-controls="profile"
                aria-expanded="false"
              >
                Phim hot
              </a>
            </li>
            <li role="presentation">
              <a
                href="#imdb"
                role="tab"
                id="imdb-tab"
                data-toggle="tab"
                aria-controls="imdb"
                aria-expanded="false"
              >
                Phim mới
              </a>
            </li>
          </ul>
          <div id="myTabContent" className="tab-content">
            <div
              role="tabpanel"
              className="tab-pane fade active in"
              id="home"
              aria-labelledby="home-tab"
            >
              <div className="w3_agile_featured_movies">
                {feature.map((movie, index) => {
                  if (index % 6 === 5)
                    return (
                      <React.Fragment>
                        <MovieCard
                          key={movie.id}
                          movieId={movie.id}
                          imgUrl={movie.poster_path}
                          movieName={movie.title}
                          isNew={true}
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
                        isNew={true}
                        release={movie.release_date}
                      />
                    );
                })}
                <div className="clearfix"> </div>
              </div>
            </div>
            <div
              role="tabpanel"
              className="tab-pane fade"
              id="profile"
              aria-labelledby="profile-tab"
            >
              {recently.map((movie, index) => {
                if (index % 9 === 5)
                  return (
                    <React.Fragment>
                      <MovieCard
                        key={movie.id}
                        movieId={movie.id}
                        imgUrl={movie.poster_path}
                        movieName={movie.title}
                        isNew={true}
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
                      isNew={true}
                      release={2016}
                    />
                  );
              })}
              <div className="clearfix"> </div>
            </div>
            <div
              role="tabpanel"
              className="tab-pane fade"
              id="imdb"
              aria-labelledby="imdb-tab"
            >
              {recently.map((movie, index) => {
                if (index % 9 === 5)
                  return (
                    <React.Fragment>
                      <MovieCard
                        key={movie.id}
                        movieId={movie.id}
                        imgUrl={movie.poster_path}
                        movieName={movie.title}
                        isNew={true}
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
                      isNew={true}
                      release={2016}
                    />
                  );
              })}
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
