import { Routes, Route } from "react-router-dom";
import React from "react";
import { LandingPage } from "../Pages/LandingPage";
import { ProductPage } from "../Pages/ProductPage";
import { SingleProductPage } from "../Pages/SingleProductPage";
import Checkout from "../Pages/Checkout";

export const NavRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/products/:category' element={<ProductPage />} />
      <Route path='/product/:category/:title' element={<SingleProductPage />} />
      <Route path='/checkout' element={<Checkout />} />
    </Routes>
  );
};
