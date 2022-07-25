import React from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProductGallery = (data) => {
  const [index, setIndex] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramColour = searchParams.get("color");
  const product = useSelector((store) => store.productData.product);
  return (
    <>
      {product._id && (
        <Box>
          {/* Display Image */}
          <Box>
            <Image
              width={"100%"}
              srcSet={product?.detailedImages[paramColour][index]}
            />
          </Box>
          <Grid
            gridTemplateColumns={"repeat(8,1fr)"}
            gridGap='10px'
            margin={"8px 0 20px"}
          >
            {/* Images Gallery */}
            {/* Change display image by clicking on any of the below images */}
            {product?.detailedImages[paramColour]?.map((el, i) => (
              <Flex borderStyle={"none"} key={i} height={"62px"}>
                <Image
                  height={"62px"}
                  _hover={{ borderBottom: "3px solid rgb(225,97,86)" }}
                  src={el}
                  onClick={() => setIndex(i)}
                />
              </Flex>
            ))}
          </Grid>
        </Box>
      )}
    </>
  );
};
