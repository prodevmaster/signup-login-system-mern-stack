import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signup } from "../actions/index";
import "./styles/Signup.css";

const Signup = () => {
  const dispatch = useDispatch();
  const [currentForm, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (data) => {
    setForm({ ...currentForm, ...data });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const username = currentForm.username;
    const email = currentForm.email;
    const password = currentForm.password;

    if (username.trim().length < 6) {
      return alert("verify your username");
    }
    if (email.trim().length < 6 || !email.trim().includes("@")) {
      return alert("verify your email");
    }
    if (password.trim().length < 6) {
      return alert("verify your password");
    }
    dispatch(signup(currentForm));
  };
  return (
    <div className="Signup">
      <h1 className="Signup_title">Sign up</h1>
      <form onSubmit={submitHandler} className="Signup_form">
        <input
          autoFocus
          type="text"
          placeholder="username"
          required
          onChange={(e) => changeHandler({ username: e.target.value })}
        />
        <input
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
        <Link to="/login" className="Signup_form_link">
          Have an account? Login
        </Link>
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
