import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../actions/index";
const Admin = () => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default Admin;
