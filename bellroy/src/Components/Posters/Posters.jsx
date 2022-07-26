import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { Poster1, Poster2, Poster3, Poster4, Poster5, Poster6 } from "../Images";
import "./Posters.css";

export const Posters = () => {
  const PosterInfo = [
    {
      Title1: "Tomorrow shaped.",
      Title2: "Shop new EDC >",
      Poster: Poster1,
      class1: "Title1",
      class2: "Title2",
    },
    {
      Title1: "Choose color. Find focus.",
      Title2: "Shop the tech collection >",
      Poster: Poster2,
      class1: "Title1",
      class2: "Title2",
    },
    {
      Title1: "3X lighter",
      Title2: "Shop the light collection >",
      Poster: Poster3,
      class1: "Title1",
      class2: "Title2",
    },
    {
      Title1: "Looks like leather. Made from plants.",
      Title2: "Shop MIRUM® >",
      Poster: Poster4,
      class1: "Title1",
      class2: "Title2",
    },
    {
      Title1: "Slim designs, gold-rated leather",
      Title2: "Shop wallets >",
      Poster: Poster5,
      class1: "Title1Black",
      class2: "Title2Black",
    },
    {
      Title1: "They're popular for a reason",
      Title2: "Shop bestsellers >",
      Poster: Poster6,
      class1: "Title1",
      class2: "Title2",
    },
  ];
  return (
    <Box>
      <Grid gridTemplateColumns={{ sm: "1fr", md: "1fr 1fr" }}>
        {PosterInfo.map((el,i) => (
          <GridItem key={i} className='gridItem'>
            <el.Poster />
            <Box className="titleContainer" position={{lg:"absolute"}}>
              <Text className={el.class1}>{el.Title1}</Text>
              <Text className={el.class2}>{el.Title2}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};
