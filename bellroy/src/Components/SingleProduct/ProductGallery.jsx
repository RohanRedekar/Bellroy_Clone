import React, { useContext,useState } from "react";
import { Box, Flex, Grid, Image } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { ViewportContext } from "../../Contexts/ViewportContext";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css";

export const ProductGallery = (data) => {
  const [index, setIndex] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const paramColour = searchParams.get("color");
  const product = useSelector((store) => store.productData.product);
  const { width } = useContext(ViewportContext);
  return (
    <>
      {width >= 992 && product._id && (
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
                  srcSet={el}
                  onClick={() => setIndex(i)}
                />
              </Flex>
            ))}
          </Grid>
        </Box>
      )}
      {width < 992 && product._id && (
        <Swiper width={'100%'} modules={[Navigation]}>
          {product?.detailedImages[paramColour]?.map((el, i) => (
            <SwiperSlide key={i}>
              <img srcSet={el} alt={`swiperimg${i}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {""}
    </>
  );
};
