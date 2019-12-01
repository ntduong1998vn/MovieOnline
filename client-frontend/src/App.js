import React, { Component } from "react";
import Header from "./views/Header";
import Footer from "./views/Footer";
import MyNavBar from "./views/MyNavBar";
import Genres from "./views/Genres";
import Home from "./views/Home";
import Movie from "./views/Movie"
import NotFound from "./components/NotFound"
import Alert from 'react-s-alert'
import "react-s-alert/dist/s-alert-default.css";
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import { Switch, Route } from "react-router-dom";
import withContext from './ContextAuth/Context_HOC'
import User from "./views/UserProfile"


class App extends Component {


  componentDidMount() {
    this.props.context.loadCurrentUser().catch(error => {
      console.log("Error Load User: ", error);
    });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <MyNavBar />

        <Switch >
          <Route path="/" component={Home} exact />
          <Route path="/genres" component={Genres} />
          <Route path="/movie/:movieId" component={Movie} />
          <Route path="/user" component={User} />
          <Route component={NotFound} />
        </Switch>

        <Footer />
        <Alert
          stack={{ limit: 3 }}
          timeout={3000}
          position="top-right"
          effect="slide"
          offset={65}
        />
      </React.Fragment>
    );
  }

}

export default withContext(App);
