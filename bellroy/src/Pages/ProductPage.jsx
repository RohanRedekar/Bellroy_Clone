import React, { useEffect } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { ProductTitle } from "../Components/ProductPage/ProductTitle";
import { Sidebar } from "../Components/ProductPage/Sidebar";
import { ProductsDisplay } from "../Components/ProductPage/ProductsDisplay";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { getProducts } from "../Redux/Products/action";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split("/");
  const currRoute = path[path.length - 1];
  useEffect(() => {
    dispatch(getProducts(currRoute, null));
  }, [currRoute, dispatch]);
  return (
    <Box>
      <Navbar />
      <ProductTitle />
      <Flex flexDirection={["column", "row"]}>
        <Sidebar currRoute={currRoute} />
        <ProductsDisplay />
      </Flex>
      <Footer />
    </Box>
  );
};
