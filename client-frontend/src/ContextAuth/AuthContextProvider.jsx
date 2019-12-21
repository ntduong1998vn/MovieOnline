import React, { Component } from "react";
import { login } from "../utils/AuthAPI";
import { ACCESS_TOKEN, USER_INFOR } from "../constants/auth";
import { getCurrentUser } from "../utils/AuthAPI";

export const AuthContext = React.createContext();

export default class AuthProvider extends Component {
  constructor() {
    super();
    this.state = {
      isAuthenticate: false,
      currentUser: {}
    };

    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
  }

  logIn(userInfo) {
    const loginRequest = Object.assign({}, userInfo);
    return login(loginRequest).then(response => {
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      this.setState({ isAuthenticate: true });
      // forward the response, just in case
      // it's needed down the promise chain
      return response;
    });
  }

  logOut() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({ isAuthenticate: false, currentUser: null });
  }

  loadCurrentUser() {
    return getCurrentUser().then(response => {
      console.log(response);
      localStorage.setItem(USER_INFOR, JSON.stringify(response));
      this.setState({
        isAuthenticate: true,
        currentUser: response
      });
      return response;
    });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          logIn: this.logIn,
          logOut: this.logOut,
          loadCurrentUser: this.loadCurrentUser
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
