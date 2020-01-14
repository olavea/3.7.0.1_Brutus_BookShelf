import React from "react";
import Button from "@material-ui/core/Button";
import { useAuth } from "react-use-auth";

const NotFoundPage = () => {
  const { isAuthenticated, login, logout } = useAuth();
  if (isAuthenticated()) {
    return <Button onClick={logout}>Logout</Button>;
  } else {
    return <Button onClick={login}>Login</Button>;
  }
};
export default NotFoundPage;
