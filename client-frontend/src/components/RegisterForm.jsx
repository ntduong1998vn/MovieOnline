import React, { useState } from "react";
import Alert from "react-s-alert";
import { signup } from "../utils/AuthAPI";

const RegisterForm = () => {
  const [formData, setForm] = useState({
    email: "",
    password: "",
    name: ""
  });
  // const [errors, setErrors] = useState({});

  function onSubmit(e) {
    e.preventDefault();
    signup(formData)
      .then(res => Alert.success("Đăng ký thành công!"))
      .catch(err => Alert.error(err));
  }

  function handleChange(e) {
    setForm({ ...formData, [e.target.name]: e.target.value });
  }

  return (
    <div className="form">
      <h3>Tạo tài khoản</h3>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Nhập địa chỉ email"
          required=""
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Nhập mật khẩu"
          required=""
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Nhập tên người dùng"
          required=""
          onChange={handleChange}
        />
        <input type="submit" value="Đăng ký" />
      </form>
    </div>
  );
};

export default RegisterForm;
