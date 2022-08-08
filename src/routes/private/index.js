import React from "react";
import { Navigate } from "react-router-dom";

function Private({ children }) {
  const isAuth = localStorage.getItem("key") ? true : false;

  if (!isAuth) {
    return <Navigate to="/" />;
  }

  return children;
}

export default Private;
