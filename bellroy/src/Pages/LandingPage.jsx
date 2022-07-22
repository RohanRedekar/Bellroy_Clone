import { Box } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../Components/Banner/Banner";
import { Carousel } from "../Components/Carousel/Carousel";
import { Footer } from "../Components/Footer/Footer";
import { Navbar } from "../Components/Navbar";
import { Posters } from "../Components/Posters/Posters";
import { YoutubeEmbed } from "../Components/YoutubeEmbed/YoutubeEmbed";

export const LandingPage = () => {
  return (
    <Box>
      <Navbar />
      <Banner />
      <Carousel />
      <Posters />
      <YoutubeEmbed />
      <Footer />
    </Box>
  );
};
