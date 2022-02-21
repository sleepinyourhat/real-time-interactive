import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "./authContext";

function RequireAuth({ children }) {
  const { user } = useUser();
  const location = useLocation();
  if (!user) {
    return <Navigate to="/signIn" state={{ from: location}} replace/>;
  }
  return children;
}

export default RequireAuth;