import React, { useState, useEffect } from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";

export const Banner = () => {
  const [ls, setLS] = useState();
  const [rs, setRS] = useState();

  useEffect(() => {
    const leftImages = ["1A", "2A", "3A", "4A"];
    let i = 0;
    let leftimgBanner = setInterval(function () {
      if (i === leftImages.length) {
        i = 0;
      }
      setLS(leftImages[i]);
      i++;
    }, 2000);

    setTimeout(function () {
      let RightimgBanner = setInterval(function () {
        if (i === leftImages.length) {
          i = 0;
        }
        setRS(leftImages[i]);
        i++;
      }, 2000);

      return () => {
        clearInterval(RightimgBanner);
      };
    }, 1000);

    return () => {
      clearInterval(leftimgBanner);
    };
  }, []);

  return (
    <Box position={"relative"}>
      <Flex>
        <Box>
          <figure className='mobile-none'>
            <img
              loading='eager'
              src={`https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${ls}.jpg?auto=format&amp;fit=max`}
              sizes='50vw'
              srcSet={`https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${ls}.jpg?auto=format&amp;fit=max&amp;w=200&amp;q=65 200w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${ls}.jpg?auto=format&amp;fit=max&amp;w=300&amp;q=65 300w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${ls}.jpg?auto=format&amp;fit=max&amp;w=400&amp;q=65 400w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${ls}.jpg?auto=format&amp;fit=max&amp;w=500&amp;q=65 500w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${ls}.jpg?auto=format&amp;fit=max&amp;w=600&amp;q=65 600w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${ls}.jpg?auto=format&amp;fit=max&amp;w=700&amp;q=65 700w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${ls}.jpg?auto=format&amp;fit=max&amp;w=800&amp;q=65 800w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${ls}.jpg?auto=format&amp;fit=max&amp;w=900&amp;q=65 900w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${ls}.jpg?auto=format&amp;fit=max&amp;w=1000&amp;q=65 1000w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${ls}.jpg?auto=format&amp;fit=max&amp;w=1100&amp;q=65 1100w`}
              alt='img'
            />
          </figure>
        </Box>
        <Box
          position={"absolute"}
          left='0'
          right='0'
          marginLeft={"auto"}
          marginRight='auto'
          width={["20rem", "25rem", "30rem", "35rem", "40rem", "45rem"]}
          textAlign='center'
          top={"40%"}
        >
          <Heading
            fontFamily={
              'Frank Ruhl Libre,"PT Serif","Noto Serif","Noto Serif JP","Noto Serif KR","Noto Serif SC","Noto Serif TC",serif'
            }
            color='white'
            fontSize={["2rem", "2rem", "3rem", "4rem", "5rem", "5rem"]}
          >
            Ready. And go.
          </Heading>
          <Button
            letterSpacing={"1px"}
            marginTop={"1rem"}
            textTransform={"uppercase"}
            colorScheme={"orange"}
            h='2.2rem'
          >
            shop new releases
          </Button>
        </Box>
        <Box>
          <figure className='mobile-none'>
            <img
              loading='lazy'
              src={`https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${rs}.jpg?auto=format&amp;fit=max`}
              sizes='50vw'
              srcSet={`https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${rs}.jpg?auto=format&amp;fit=max&amp;w=200&amp;q=65 200w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${rs}.jpg?auto=format&amp;fit=max&amp;w=300&amp;q=65 300w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${rs}.jpg?auto=format&amp;fit=max&amp;w=400&amp;q=65 400w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${rs}.jpg?auto=format&amp;fit=max&amp;w=500&amp;q=65 500w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${rs}.jpg?auto=format&amp;fit=max&amp;w=600&amp;q=65 600w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${rs}.jpg?auto=format&amp;fit=max&amp;w=700&amp;q=65 700w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${rs}.jpg?auto=format&amp;fit=max&amp;w=800&amp;q=65 800w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${rs}.jpg?auto=format&amp;fit=max&amp;w=900&amp;q=65 900w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${rs}.jpg?auto=format&amp;fit=max&amp;w=1000&amp;q=65 1000w,
        https://bellroy-cms-images.imgix.net/new-releases-homepage-image-${rs}.jpg?auto=format&amp;fit=max&amp;w=1100&amp;q=65 1100w`}
              alt='img'
            />
          </figure>
        </Box>
      </Flex>
    </Box>
  );
};
