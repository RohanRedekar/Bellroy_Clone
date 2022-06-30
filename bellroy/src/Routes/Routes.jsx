import { Routes, Route } from "react-router-dom";

import React from "react";
import { LandingPage } from "../Pages/LandingPage";
import { ProductPage } from "../Pages/ProductPage";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/products' element={<ProductPage />} />
    </Routes>
  );
};
