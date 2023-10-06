import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";
import PropTypes from "prop-types";

const PrivateRoute = ({ redirect }) => {
  const { loggedIn, checkingStatus } = useAuthStatus();

  if (checkingStatus) {
    return null;
  }

  if (redirect) return loggedIn ? <Outlet /> : <Navigate to="/masuk" />;
  return <Outlet />;
};

PrivateRoute.propTypes = {
  redirect: PropTypes.bool,
};

export default PrivateRoute;
