import React from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { ProductGallery } from "./ProductGallery";
import { useSelector } from "react-redux";
import { ProductInfo } from "./ProductInfo";

export const GalleryAndDescr = () => {
  const product = useSelector((store) => store.productData.product);
  return (
    <Box width={"100%"}>
      <Grid
        maxWidth={"1150px"}
        gridGap='20px'
        gridTemplateColumns={["1fr", "1fr", "1fr", "1fr 376px"]}
        margin={"0 auto"}
      >
        <Box>
          <ProductGallery />
        </Box>
        <Box>
          <ProductInfo />
        </Box>
      </Grid>
      <Flex justifyContent={"center"}>
        <Image src={product.fullImage} />
      </Flex>
    </Box>
  );
};
