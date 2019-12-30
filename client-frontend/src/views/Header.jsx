import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import UserButton from "../components/UserButton/UserButton";
import withContext from "../ContextAuth/Context_HOC";
import LoginForm from "../components/LoginForm";
import SearchBox from "../components/SearchBox";
import Alert from "react-s-alert";
import { forgetPassword } from "../utils/AuthAPI";
const Header = props => {
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
              <UserButton />
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
              <LoginForm />
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

const RegisterForm = () => {
  const [formData, setForm] = useState({ email: "", password: "" });
  // const [errors, setErrors] = useState({});

  function onSubmit(e) {
    e.preventDefault();
    Alert.success("Đăng ký thành công!");
  }

  function onChange(e) {
    setForm({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="form">
      <h3>Tạo tài khoản</h3>
      <form onSubmit={onSubmit}>
        <input type="text" name="Username" placeholder="Username" required="" />
        <input
          type="password"
          name="Password"
          placeholder="Password"
          required=""
        />
        <input
          type="email"
          name="Email"
          placeholder="Email Address"
          required=""
        />
        <input
          type="text"
          name="Phone"
          placeholder="Phone Number"
          required=""
        />
        <input type="submit" value="Đăng ký" />
      </form>
    </div>
  );
};

export default withRouter(withContext(Header));
