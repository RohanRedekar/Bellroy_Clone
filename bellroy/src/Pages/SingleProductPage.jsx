import React, { useEffect } from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Footer } from "../Components/Footer/Footer";
import { GalleryAndDescr } from "../Components/SingleProduct/GalleryAndInfo";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSelectedProduct } from "../Redux/Products/action";

export const SingleProductPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const path = location.pathname.split("/");
  const title = path[path.length - 1];
  useEffect(() => {
    dispatch(getSelectedProduct(title));
  }, [title, dispatch]);
  return (
    <Box>
      <Navbar />
      <GalleryAndDescr />
      <Footer />
    </Box>
  );
};
