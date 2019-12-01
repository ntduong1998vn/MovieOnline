import React, { useState } from "react";
import withContext from "../ContextAuth/Context_HOC";
import Alert from "react-s-alert";
import { withRouter } from "react-router-dom";

const LoginForm = props => {
  const [formData, setForm] = useState({ email: "", password: "" });
  // const [errors, setErrors] = useState({});

  function onSubmit(e) {
    e.preventDefault();
    props.context.logIn(formData).then(() => {
      Alert.success("You're successfully logged in!");
      props.context.loadCurrentUser();
      props.history.push("/user/");
    });
    // .catch(error => {
    //   Alert.error(
    //     (error && error.message) ||
    //       "Oops! Something went wrong. Please try again!"
    //   );
    // });
  }

  function onChange(e) {
    setForm({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="form">
      <h3>Login to your account</h3>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="email"
          name="email"
          value={formData.email}
          placeholder="Nhập Email"
          required=""
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={onChange}
          placeholder="Nhập Password"
          required=""
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default withRouter(withContext(LoginForm));
