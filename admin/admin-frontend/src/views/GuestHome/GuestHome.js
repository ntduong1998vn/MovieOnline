import React, { Component } from "react";
import "./GuestHome.css";

class GuestHome extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="container">
          <div className="graf-bg-container">
            <div className="graf-layout">
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
            </div>
          </div>
          <h1 className="home-title">
            Welcome to Admin page
          </h1>
        </div>
      </div>
    );
  }
}

export default GuestHome;
