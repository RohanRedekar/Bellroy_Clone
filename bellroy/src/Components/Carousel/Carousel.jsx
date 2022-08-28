import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useEffect, useState, useContext } from "react";
import { Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import "./Carousel.css";
import { carouselImgData as data } from "../Images";
import { ViewportContext } from "../../Contexts/ViewportContext";
import { v4 as uuidv4 } from "uuid";

export const Carousel = () => {
  const { width } = useContext(ViewportContext);
  // states for different screen sizes
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isMob, setIsMob] = useState(false);

  useEffect(() => {
    const screenType = () => {
      setIsDesktop(width > 1080);
      setIsTab(width <= 1080);
      setIsMob(width < 780);
    };
    screenType();
  }, [width]);

  return (
    <Box className='carousalContainer'>
      <Heading fontSize={"1.2rem"}>SHOP BY CATEGORY</Heading>
      {/* DeskTop View */}
      {isDesktop && (
        <Flex className='carouselFlex'>
          {data.map((el) => (
            <Box key={uuidv4()} className='carouselItemBox'>
              <img
                srcSet={el.image}
                className={el.name.split(" ").join("")}
                alt={el.name}
              />
              <Text className='carouselItemName'>{el.name}</Text>
            </Box>
          ))}
        </Flex>
      )}
      {/* Tab and Mobile View */}
      {isTab && (
        <Swiper
          modules={[Pagination, Scrollbar]}
          spaceBetween={1}
          slidesPerView={3}
          pagination={{ clickable: true }}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((el) => (
            <SwiperSlide className='carouselItemBox' key={uuidv4()}>
              <img
                srcSet={el.image}
                className={el.name.split(" ").join("")}
                alt={el.name}
              />
              <Text className='carouselItemName'>{el.name}</Text>
              <br />
              {!isMob && <br />}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </Box>
  );
};
