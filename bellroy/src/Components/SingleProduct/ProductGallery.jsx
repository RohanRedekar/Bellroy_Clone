import React, { useContext, useState } from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ViewportContext } from "../../Contexts/ViewportContext";
import SimpleImageSlider from "react-simple-image-slider";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const ProductGallery = () => {
  const [index, setIndex] = useState(0);
  const [url, setUrl] = useState("");
  const [searchParams] = useSearchParams();
  const paramColour = searchParams.get("color");
  const product = useSelector((store) => store.productData.product);
  const { width } = useContext(ViewportContext);

  useEffect(() => {
    try {
      if (product) setUrl(product.detailedImages[paramColour][index]);
    } catch (err) {}
  }, [product, paramColour, index]);

  return (
    <>
      {width >= 992 && product._id && url.length > 0 && (
        <Box>
          {/* Display Image */}
          <Box>
            <Image width={"100%"} srcSet={url} />
          </Box>
          <Grid
            gridTemplateColumns={"repeat(8,1fr)"}
            gridGap='10px'
            margin={"8px 0 20px"}
          >
            {/* Images Gallery */}
            {/* Change display image by clicking on any of the below images */}
            {product?.detailedImages[paramColour]?.map((el, i) => (
              <Flex borderStyle={"none"} key={uuidv4()} height={"62px"}>
                <Image
                  height={"62px"}
                  _hover={{ borderBottom: "3px solid rgb(225,97,86)" }}
                  srcSet={el}
                  onClick={() => setIndex(i)}
                />
              </Flex>
            ))}
          </Grid>
        </Box>
      )}
      {width < 992 && product._id && (
        <Box>
          {/* Image Slider for small width */}
          <SimpleImageSlider
            width={"100%"}
            height={330}
            images={product?.detailedImages[paramColour]}
            showNavs={true}
          />
        </Box>
      )}
      {""}
    </>
  );
};
