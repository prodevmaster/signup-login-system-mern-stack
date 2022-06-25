import React, { Suspense, useEffect, lazy, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../actions/index";

const Admin = lazy(() => import("./Admin"));
const Signup = lazy(() => import("./Signup"));
const Login = lazy(() => import("./Login"));

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.isLoggedIn);

  useEffect(() => {
    setIsLoading(true);
    dispatch(login());
    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/"
            element={auth ? <Admin /> : <Navigate to="/login" />}
          />
          <Route
            path="/signup"
            element={!auth ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={!auth ? <Login /> : <Navigate to="/" />}
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default Home;
