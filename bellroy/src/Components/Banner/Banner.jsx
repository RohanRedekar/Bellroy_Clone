import React, { useState, useEffect, useContext } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { BannerBtn } from "./BannerBtn";
import { ViewportContext } from "../../Contexts/ViewportContext";
import {
  LeftImage1,
  LeftImage2,
  LeftImage3,
  LeftImage4,
  RightImage1,
  RightImage2,
  RightImage3,
  RightImage4,
  DualImage1,
  DualImage2,
  DualImage3,
  DualImage4,
} from "../Images";
export const Banner = () => {
  const [ls, setLS] = useState(LeftImage1);
  const [rs, setRS] = useState(RightImage1);
  const [dual, setDual] = useState(DualImage1);
  const {width} = useContext(ViewportContext);
  useEffect(() => {
    const mobileViewImages = [DualImage1, DualImage2, DualImage3, DualImage4];
    let i = 0;
    let dualImg = setInterval(function () {
      if (i === mobileViewImages.length) {
        i = 0;
      }
      setDual(mobileViewImages[i]);
      i++;
    }, 2000);
    return () => {
      clearInterval(dualImg);
    };
  },[]);

  useEffect(() => {
    const leftImages = [LeftImage1, LeftImage2, LeftImage3, LeftImage4];
    let i = 0;
    let leftimgBanner = setInterval(function () {
      if (i === leftImages.length) {
        i = 0;
      }
      setLS(leftImages[i]);
      i++;
    }, 2000);

    return () => {
      clearInterval(leftimgBanner);
    };
  },[]);

  useEffect(() => {
    const rightImages = [RightImage1, RightImage2, RightImage3, RightImage4];
    let i = 0;
    setTimeout(function () {
      let RightimgBanner = setInterval(function () {
        if (i === rightImages.length) {
          i = 0;
        }
        setRS(rightImages[i]);
        i++;
      }, 2000);

      return () => {
        clearInterval(RightimgBanner);
      };
    }, 1000);
    
  },[]);

  return (
    <Box position={"relative"}>
      {width > 720 && (
        <Flex>
          <Box>{ls}</Box>
          <BannerBtn />
          <Box>{rs}</Box>
        </Flex>
      )}
      {width <= 720 && (
        <Box>
          <Box>{dual}</Box>
          <BannerBtn />
        </Box>
      )}
    </Box>
  );
};
