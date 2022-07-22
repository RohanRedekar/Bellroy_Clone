import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import "./YoutubeEmbed.css";

export const YoutubeEmbed = () => (
  <Flex
    justifyContent={"center"}
    alignItems='center'
    backgroundImage='https://bellroy.imgix.net/cms_images/1259/background-texture-repeat.jpg?auto=format&fit=max'
    height={["350px", "400px", "450px", "500px", "600px", "650px"]}
  >
    <Box
      width={["95%", "88%", "80%", "72%", "65%", "55%"]}
    >
      <Box className='videoResponsive'>
        <iframe
          width='853'
          height='480'
          loading='lazy'
          src={`https://www.youtube-nocookie.com/embed/w1uA0R9_mnU?autoplay=1&loop=1&playlist=w1uA0R9_mnU&origin=bellroy.com&modestbranding=1&showinfo=0&rel=0&version=3&mute=1`}
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
          title='Embedded youtube'
        />
      </Box>
    </Box>
  </Flex>
);
