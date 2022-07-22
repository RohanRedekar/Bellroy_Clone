import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { ProductTitle } from "../Components/ProductPage/ProductTitle";
import { Sidebar } from "../Components/ProductPage/Sidebar";
import { ProductsDisplay } from "../Components/ProductPage/ProductsDisplay";

export const ProductPage = () => {
  return (
    <Box>
      <Navbar />
      <ProductTitle />
      <Flex>
        <Sidebar />
        <ProductsDisplay />
      </Flex>
      <Footer />
    </Box>
  );
};
