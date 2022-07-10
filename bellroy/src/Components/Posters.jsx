import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import React from "react";
import { Poster1, Poster2, Poster3, Poster4, Poster5, Poster6 } from "./Images";
import "./Posters.css"

export const Posters = () => {
  return (
    <Box>
      <Grid gridTemplateColumns={"1fr 1fr"}>
        <GridItem className='gridItem'>
          <Poster1 />
          <Text className='Title1'>Tomorrow shaped.</Text>
          <Text className='Title2'>Shop new EDC {">"}</Text>
        </GridItem>
        <GridItem className='gridItem'>
          <Poster2 />
          <Text className='Title1'>Choose color. Find focus.</Text>
          <Text className='Title2'>Shop the tech collection {">"}</Text>
        </GridItem>
        <GridItem className='gridItem'>
          <Poster3 />
          <Text className='Title1'>3X lighter</Text>
          <Text className='Title2'>Shop the light collection {">"}</Text>
        </GridItem>
        <GridItem className='gridItem'>
          <Poster4 />
          <Text className='Title1'>Looks like leather. Made from plants.</Text>
          <Text className='Title2'>Shop MIRUM&#174; {">"}</Text>
        </GridItem>
        <GridItem className='gridItem'>
          <Poster5 />
          <Text className='Title1Black'>Slim designs, gold-rated leather</Text>
          <Text className='Title2Black'>Shop wallets {">"}</Text>
        </GridItem>
        <GridItem className='gridItem'>
          <Poster6 />
          <Text className='Title1'>They're popular for a reason</Text>
          <Text className='Title2'>Shop bestsellers {">"}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
};
