import React from "react";
import { Switch, Route } from "react-router-dom";
import MovieDetail from "views/MovieDetail";
import MovieList from "views/MovieList";

const Movie = props => (
  <Switch>
    <Route exact path="/admin/movies" render={() => <MovieList {...props} />} />
    <Route
      path="/admin/movies/:id"
      render={value => <MovieDetail {...props} {...value} />}
    />
  </Switch>
);

export default Movie;
