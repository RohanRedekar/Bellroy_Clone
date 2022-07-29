import { Routes, Route } from "react-router-dom";

import React from "react";
import { LandingPage } from "../Pages/LandingPage";
import { ProductPage } from "../Pages/ProductPage";
import { SingleProductPage } from "../Pages/SingleProductPage";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/products/:category' element={<ProductPage />} />
      <Route path='/product/:category/:title' element={<SingleProductPage />} />
    </Routes>
  );
};
