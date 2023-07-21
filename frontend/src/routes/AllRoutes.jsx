import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@chakra-ui/react";

import Signup from "../pages/signup";
import Login from "../pages/login";
import PrivateRoute from "./PrivateRoutes";
import Dashbourd from "../pages/dashbourd";
import AllProduct from "../pages/AllProduct";
import Product from "../pages/product";
import NotFoundPage from "../pages/NotFoundPage";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/info"
          element={
            <PrivateRoute>
              <Dashbourd />
            </PrivateRoute>
          }
        />
        <Route path="/" element={<AllProduct />} />
        <Route
          path="/product"
          element={
            <PrivateRoute>
              <Product />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
