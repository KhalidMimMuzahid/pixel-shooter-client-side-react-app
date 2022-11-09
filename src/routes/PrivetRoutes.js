import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
const PrivetRoutes = ({ children }) => {
  const { currentUser, isLoading } = useContext(AuthContext);
  const location = useLocation();
  if (isLoading) {
    return <h1>loading now...</h1>;
  }
  if (!currentUser) {
    return (
      <Navigate to="/signin" state={{ from: location }} replace></Navigate>
    );
  } else {
    return children;
  }
};

export default PrivetRoutes;
