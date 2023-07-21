import React from "react";

import { Navigate } from "react-router-dom";
import { useToast } from "@chakra-ui/react";

import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  const toast = useToast();
  let store = useSelector((store) => store);

  if (!store.data.isAuthenticated) {
    toast({
      status: "warning",
      isClosable: true,
      duration: 5000,
      title: "Login First!",
    });
    return <Navigate to="/login" />;
  } else {
    return <>{children}</>;
  }
};

export default PrivateRoute;
