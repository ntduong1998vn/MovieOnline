import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import UserButton from "../components/UserButton/UserButton";
import withContext from "../ContextAuth/Context_HOC";
import LoginForm from "../components/LoginForm";
import SearchBox from "../components/SearchBox";
import RegisterForm from "../components/RegisterForm";
import Alert from "react-s-alert";

import { forgetPassword } from "../utils/AuthAPI";

const Header = props => {
  const [user, setUser] = useState(props.context.currentUser);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    window.$(".toggle").click(function() {
      // Switches the Icon
      window
        .$(this)
        .children("i")
        .toggleClass("fa-pencil");
      // Switches the forms
      window.$(".form").animate(
        {
          height: "toggle",
          "padding-top": "toggle",
          "padding-bottom": "toggle",
          opacity: "toggle"
        },
        "slow"
      );
    });
  });

  function forgetPassword() {
    forgetPassword().then(result => console.log(result));
    Alert.success("Đã mail xác nhận đển người dùng");
  }

  function reload() {
    props.context
      .loadCurrentUser()
      .then(() => setUser(props.context.currentUser));
  }

  return (
    <div className="header">
      <div className="container">
        <div className="w3layouts_logo">
          <a href="index.html">
            <h1>
              One<span>Movies</span>
            </h1>
          </a>
        </div>
        <div className="w3_search">
          <SearchBox />
        </div>

        <div className="w3l_sign_in_register">
          <ul>
            {props.context.isAuthenticate ? (
              <UserButton user={user} logOut={props.context.logOut} />
            ) : (
              <li>
                <a onClick={() => handleShow()}>Login</a>
              </li>
            )}
          </ul>
        </div>
        <div className="clearfix"> </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sign In & Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="w3_login_module">
            <div className="module form-module">
              <div className="toggle">
                <i className="fa fa-times fa-pencil"></i>
                <div className="tooltip">Click Me</div>
              </div>
              <LoginForm reload={reload} />
              <RegisterForm />
              <div className="cta">
                <a href="#">Forgot your password?</a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default withRouter(withContext(Header));
