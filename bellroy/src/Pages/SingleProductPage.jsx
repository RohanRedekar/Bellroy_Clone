import React from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { GalleryAndDescr } from "../Components/SingleProduct/GalleryAndInfo";


export const SingleProductPage = () => {

  return (
    <Box>
      <Navbar />
      <GalleryAndDescr/>
      <Footer />
    </Box>
  );
};
