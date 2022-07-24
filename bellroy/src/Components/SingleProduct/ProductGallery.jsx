import React from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { useState } from "react";

export const ProductGallery = (data) => {
  const [index, setIndex] = useState(0);
  const product = data.product;
  return (
    <>
      <Box>
        <Image
          width={"100%"}
          srcSet={product.detailedImages[product.imgIndex][index]}
        />
      </Box>
      <Grid
        gridTemplateColumns={"repeat(8,1fr)"}
        gridGap='10px'
        margin={"8px 0 20px"}
      >
        {product.detailedImages.map((el, i) => {
          if (product.imgIndex === i) {
            return el.map((e, idx) => (
              <Flex borderStyle={"none"} key={i + 1 * idx} height={"62px"}>
                <Image
                  height={"62px"}
                  _hover={{ borderBottom: "3px solid rgb(225,97,86)" }}
                  src={e}
                  onClick={() => setIndex(idx)}
                />
              </Flex>
            ));
          } else {
            return "";
          }
        })}
      </Grid>
    </>
  );
};
