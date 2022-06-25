import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../actions/index";
import "./styles/Login.css";

const Login = () => {
  const dispatch = useDispatch();
  const [currentForm, setForm] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (data) => {
    setForm({ ...currentForm, ...data });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const email = currentForm.email;
    const password = currentForm.password;

    if (email.trim().length < 6 || !email.trim().includes("@")) {
      return alert("verify your email");
    }
    if (password.trim().length < 6) {
      return alert("verify your password");
    }
    dispatch(login(currentForm));
  };
  return (
    <div className="Login">
      <h1 className="Login_title">Login</h1>
      <form onSubmit={submitHandler} className="Login_form">
        <input
          autoFocus
          type="text"
          placeholder="email"
          required
          onChange={(e) => changeHandler({ email: e.target.value })}
        />
        <input
          type="password"
          placeholder="password"
          required
          onChange={(e) => changeHandler({ password: e.target.value })}
        />
        <Link to="/signup" className="Login_form_link">
          Don't have an account? Sign up
        </Link>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
