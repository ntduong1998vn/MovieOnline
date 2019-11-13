import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";
import AdminLayout from "layouts/Admin";
import GuestLayout from "layouts/Guest/Guest";
import PrivateRoute from "./components/Common/PrivateRoute";
import PublicRoute from "./components/Common/PublicRoute";
import { getCurrentUser } from "utils/AuthAPI";
import { ACCESS_TOKEN } from "constants/auth";
import NotFound from "views/NotFound/NotFound";
import LoadingIndicator from "components/Common/LoadingIndicator";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticate: false,
      currentUser: null,
      loading: false
    };

    this.loadCurrentlyLoggedInUser = this.loadCurrentlyLoggedInUser.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  loadCurrentlyLoggedInUser() {
    this.setState({
      loading: true
    });

    getCurrentUser()
      .then(response => {
        this.setState({
          currentUser: response,
          authenticated: true,
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          loading: false
        });
      });
  }

  handleLogout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      currentUser: null
    });
    //   Alert.success("You're safely logged out!");
  }

  componentDidMount() {
    this.loadCurrentlyLoggedInUser();
  }

  render() {
    const { authenticated, loading } = this.state;
    if (loading) {
      return <LoadingIndicator />;
    }
    return (
      <Switch>
        <PrivateRoute
          path="/admin"
          authenticated={authenticated}
          component={AdminLayout}
          onLogout={this.handleLogout}
        />
        <PublicRoute
          path="/"
          restricted={true}
          authenticated={authenticated}
          component={GuestLayout}
        />
        {/* <Redirect from="/" to="/welcome" /> */}
      </Switch>
    );
  }
}

export default App;
