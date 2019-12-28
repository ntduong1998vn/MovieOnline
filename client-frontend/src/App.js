import React, { Component } from "react";
import Header from "./views/Header";
import Footer from "./views/Footer";
import MyNavBar from "./views/MyNavBar";
import Genres from "./views/Genres";
import Home from "./views/Home";
import Movie from "./views/Movie"
import User from "./views/UserProfile"
import Search from "./views/Search"
import NotFound from "./components/NotFound"
import { Switch, Route } from "react-router-dom";
import withContext from './ContextAuth/Context_HOC'
import { getGenresAll } from "./utils/GenreAPI";
import { ACCESS_TOKEN } from './constants/auth'
import "react-s-alert/dist/s-alert-css-effects/slide.css";
import "react-s-alert/dist/s-alert-default.css";
import Alert from 'react-s-alert'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      genreList: []
    }
    this.setUpHeader = this.setUpHeader.bind(this);
  }

  componentDidMount() {
    this.setUpHeader();
    if (localStorage.getItem(ACCESS_TOKEN) != null) {
      this.props.context.loadCurrentUser().catch(error => {
        console.log("Error Load User: ", error);
      });
    }
  }

  // Get data for Header
  setUpHeader() {
    getGenresAll()
      .then(result => {
        this.setState({ genreList: result });
      })
      .catch(err => console.log("Get Genre List Error : ", err));
  }

  render() {
    const { genreList } = this.state;

    return (
      <React.Fragment>
        <Header />
        <MyNavBar genres={genreList} />

        <Switch >
          <Route path="/" component={Home} exact />
          <Route path="/genre" component={Genres} />
          <Route path="/movie/:movieId" render={props => <Movie {...props} />} />
          <Route path="/user" component={User} />
          <Route path="/search" component={Search} />
          <Route component={NotFound} />
        </Switch>

        <Footer />

        <Alert
          stack={{ limit: 3 }}
          timeout={3000}
          position="top-right"
          effect="slide"
          offset={65}
          html={true}
        />
      </React.Fragment>
    );
  }

}

export default withContext(App);
