import React, { useState } from "react";
import withContext from "../ContextAuth/Context_HOC";
import Alert from "react-s-alert";
import { withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import { GOOGLE_AUTH_URL, FACEBOOK_AUTH_URL } from "../constants/auth";

const LoginForm = props => {
  const [formData, setForm] = useState({ email: "", password: "" });

  function onSubmit(e) {
    e.preventDefault();
    props.context
      .logIn(formData)
      .then(() => {
        props.reload();
        Alert.success("You're successfully logged in!");
        props.context.loadCurrentUser().then(() => {
          // props.history.push("/user/");
        });
      })
      .catch(error => {
        Alert.error(error.message);
      });
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
        <input type="submit" value="Đăng nhập" />
      </form>

      <div className="social-group">
        <div className="social-title">Đăng nhập bằng</div>
        <Button className="social-login" href={GOOGLE_AUTH_URL} target="_blank">
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48cGF0aCBmaWxsPSIjRkZDMTA3IiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMS42NDksNC42NTctNi4wOCw4LTExLjMwMyw4Yy02LjYyNywwLTEyLTUuMzczLTEyLTEyYzAtNi42MjcsNS4zNzMtMTIsMTItMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxMi45NTUsNCw0LDEyLjk1NSw0LDI0YzAsMTEuMDQ1LDguOTU1LDIwLDIwLDIwYzExLjA0NSwwLDIwLTguOTU1LDIwLTIwQzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48cGF0aCBmaWxsPSIjRkYzRDAwIiBkPSJNNi4zMDYsMTQuNjkxbDYuNTcxLDQuODE5QzE0LjY1NSwxNS4xMDgsMTguOTYxLDEyLDI0LDEyYzMuMDU5LDAsNS44NDIsMS4xNTQsNy45NjEsMy4wMzlsNS42NTctNS42NTdDMzQuMDQ2LDYuMDUzLDI5LjI2OCw0LDI0LDRDMTYuMzE4LDQsOS42NTYsOC4zMzcsNi4zMDYsMTQuNjkxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiM0Q0FGNTAiIGQ9Ik0yNCw0NGM1LjE2NiwwLDkuODYtMS45NzcsMTMuNDA5LTUuMTkybC02LjE5LTUuMjM4QzI5LjIxMSwzNS4wOTEsMjYuNzE1LDM2LDI0LDM2Yy01LjIwMiwwLTkuNjE5LTMuMzE3LTExLjI4My03Ljk0NmwtNi41MjIsNS4wMjVDOS41MDUsMzkuNTU2LDE2LjIyNyw0NCwyNCw0NHoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMTk3NkQyIiBkPSJNNDMuNjExLDIwLjA4M0g0MlYyMEgyNHY4aDExLjMwM2MtMC43OTIsMi4yMzctMi4yMzEsNC4xNjYtNC4wODcsNS41NzFjMC4wMDEtMC4wMDEsMC4wMDItMC4wMDEsMC4wMDMtMC4wMDJsNi4xOSw1LjIzOEMzNi45NzEsMzkuMjA1LDQ0LDM0LDQ0LDI0QzQ0LDIyLjY1OSw0My44NjIsMjEuMzUsNDMuNjExLDIwLjA4M3oiPjwvcGF0aD48L3N2Zz4="
          ></img>
        </Button>
        <Button
          className="social-login"
          href={FACEBOOK_AUTH_URL}
          target="_blank"
        >
          <img
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMzAiIGhlaWdodD0iMzAiCnZpZXdCb3g9IjAgMCAxMDAgMTAwIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxwYXRoIGZpbGw9IiM3OGEyZDIiIGQ9Ik01MCAxNUEzNSAzNSAwIDEgMCA1MCA4NUEzNSAzNSAwIDEgMCA1MCAxNVoiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNzcuMjM3IDY0LjAzOWMtLjA3NCAwLS4xNDgtLjAxNy0uMjE5LS4wNTEtLjI0OC0uMTIxLS4zNTItLjQyLS4yMy0uNjY4LjE5OC0uNDA4LjM4OC0uODE5LjU2Ni0xLjIzMy42OTQtMS42MTIgMS4yNDctMy4yOTkgMS42NDMtNS4wMTQuMDYzLS4yNy4zMjgtLjQzOC42LS4zNzUuMjcuMDYzLjQzNy4zMzEuMzc1LjYtLjQwOSAxLjc3My0uOTgxIDMuNTE4LTEuNjk5IDUuMTg1LS4xODUuNDI5LS4zOC44NTQtLjU4NiAxLjI3NUM3Ny42MDEgNjMuOTM2IDc3LjQyMiA2NC4wMzkgNzcuMjM3IDY0LjAzOXpNODAuMzgzIDUzLjM5NGMtLjAxNiAwLS4wMy0uMDAxLS4wNDUtLjAwMi0uMjc1LS4wMjQtLjQ3OS0uMjY4LS40NTQtLjU0Mi4wNTgtLjY0Ny4wOTUtMS4yOTYuMTExLTEuOTQ0LjEwMi00LjAyNS0uNTg5LTcuOTYyLTIuMDUxLTExLjcwMy0uMTAxLS4yNTcuMDI2LS41NDcuMjg0LS42NDguMjU3LS4xMDEuNTQ3LjAyNy42NDcuMjg0IDEuNTExIDMuODY2IDIuMjI0IDcuOTM0IDIuMTE5IDEyLjA5My0uMDE3LjY3LS4wNTYgMS4zNC0uMTE1IDIuMDA3QzgwLjg1NiA1My4xOTggODAuNjM5IDUzLjM5NCA4MC4zODMgNTMuMzk0ek0yNy43MzUgMjkuNzI4Yy0uMTIzIDAtLjI0NS0uMDQ0LS4zNDEtLjEzNS0uMjAyLS4xODgtLjIxMi0uNTA0LS4wMjQtLjcwNyA1LjA0OS01LjQwOCAxMS44ODItOC44MjQgMTkuMjM4LTkuNjE4LjI3Ny0uMDIzLjUyMS4xNjkuNTUxLjQ0My4wMy4yNzQtLjE2OS41MjEtLjQ0My41NTEtNy4xMTguNzY4LTEzLjcyOSA0LjA3My0xOC42MTQgOS4zMDZDMjguMDAyIDI5LjY3NSAyNy44NjkgMjkuNzI4IDI3LjczNSAyOS43Mjh6TTI5LjI3OCA3Mi43ODRjLS4xMjMgMC0uMjQ1LS4wNDUtLjM0MS0uMTM1LTEwLjU1My05Ljg1My0xMi45NTctMjUuNDYtNS44NDUtMzcuOTU1LjEzNi0uMjQuNDQxLS4zMjUuNjgyLS4xODcuMjQuMTM3LjMyNC40NDIuMTg3LjY4Mi02Ljg4MSAxMi4wOS00LjU1NCAyNy4xOTQgNS42NTkgMzYuNzI5LjIwMi4xODguMjEyLjUwNS4wMjQuNzA2QzI5LjU0NSA3Mi43MyAyOS40MTIgNzIuNzg0IDI5LjI3OCA3Mi43ODR6TTYzLjM0OCA3OC4wMDFjLS4xODYgMC0uMzY0LS4xMDQtLjQ1LS4yODMtLjEyLS4yNDgtLjAxNi0uNTQ3LjIzMy0uNjY3IDMuMzI0LTEuNjAzIDYuMy0zLjc5NiA4Ljg0My02LjUxOSAxLjAyNS0xLjEgMS45NzQtMi4yOCAyLjgxNy0zLjUxLjE1Ni0uMjI3LjQ2OC0uMjg1LjY5NS0uMTI5cy4yODUuNDY3LjEyOS42OTVjLS44NzEgMS4yNzEtMS44NTEgMi40OS0yLjkxMSAzLjYyNS0yLjYyOCAyLjgxNC01LjcwMiA1LjA4MS05LjE0IDYuNzM3QzYzLjQ5NSA3Ny45ODUgNjMuNDIxIDc4LjAwMSA2My4zNDggNzguMDAxeiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZWZkZWYiIGQ9Ik00NC41LDg0VjU5LjVoLTl2LTloOWwwLTguOTcxYy0wLjE5NS04LjA0OSw1Ljg5Ny0xNS44OCwyMC0xMS41MzhMNjQuNDcxLDM4LjVsLTQuOTAxLTAuMDMyIGMtMy43NywwLTUuMDY5LDEuMjQ2LTUuMDY5LDMuOTYydjguMDdoMTAuNzc2bC0xLjg5NCw5SDU0LjVWODQiPjwvcGF0aD48cGF0aCBmaWxsPSIjMWYyMTJiIiBkPSJNNTUsODRoLTFWNTloOC45NzdsMS42ODMtOEg1NHYtOC41N2MwLTMuMTI4LDEuNjY2LTQuNDYyLDUuNTY5LTQuNDYybDQuNDAzLDAuMDI5bDAuMDI2LTcuNjM0IGMtNi4xMzctMS44MTctMTEuMTkzLTEuMzk5LTE0LjY0MSwxLjIxMWMtMi44NywyLjE3NC00LjQ1OCw1Ljc5OC00LjM1OCw5Ljk0M1Y1MWgtOXY4aDl2MjVoLTFWNjBoLTlWNTBoOXYtOC40NzEgYy0wLjEwOC00LjQ1OSwxLjYyNS04LjM4Miw0Ljc1NC0xMC43NTJjMi42MzYtMS45OTYsNy41MzQtMy44MzYsMTUuODkzLTEuMjY0bDAuMzU0LDAuMTA5bC0wLjAzMiw5LjM4MWwtNS40MDItMC4wMzYgYy0zLjgwMiwwLTQuNTY2LDEuMzI1LTQuNTY2LDMuNDYyVjUwaDEwLjg5MmwtMi4xMDQsMTBINTVWODR6Ij48L3BhdGg+PGc+PHBhdGggZmlsbD0iIzFmMjEyYiIgZD0iTTUwLDg2Yy0xOS44NTEsMC0zNi0xNi4xNDktMzYtMzZzMTYuMTQ5LTM2LDM2LTM2czM2LDE2LjE0OSwzNiwzNlM2OS44NTEsODYsNTAsODZ6IE01MCwxNiBjLTE4Ljc0OCwwLTM0LDE1LjI1Mi0zNCwzNGMwLDE4Ljc0OCwxNS4yNTIsMzQsMzQsMzRjMTguNzQ4LDAsMzQtMTUuMjUyLDM0LTM0Qzg0LDMxLjI1Miw2OC43NDgsMTYsNTAsMTZ6Ij48L3BhdGg+PC9nPjwvc3ZnPg=="
          ></img>
        </Button>
      </div>
    </div>
  );
};

export default withRouter(withContext(LoginForm));
