import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import "./Carousel.css";
export const Carousel = () => {
  const data = [
    {
      image:
        "https://bellroy.imgix.net/cms_images/5681/menu-icons-mens-wallets.jpg?auto=format&fit=max&w=95",
      name: "Men's Wallets",
    },
    {
      image:
        "https://bellroy.imgix.net/cms_images/5682/menu-icons-womens.jpg?auto=format&fit=max&w=95",
      name: "Women's Wallets",
    },
    {
      image:
        "	https://bellroy.imgix.net/cms_images/5683/menu-icons-bags.jpg?auto=format&fit=max&w=95",
      name: "Backpacks",
    },
    {
      image:
        "https://bellroy.imgix.net/cms_images/5684/menu-icons-crossbody.jpg?auto=format&fit=max&w=95",
      name: "Crossbody Bags",
    },
    {
      image:
        "https://bellroy.imgix.net/cms_images/5688/menu-icons-phone-cases.jpg?auto=format&fit=max&w=95",
      name: "Phone & Laptop Cases",
    },
    {
      image:
        "https://bellroy.imgix.net/cms_images/5689/menu-icons-accessories.jpg?auto=format&fit=max&w=95",
      name: "Work Accessories",
    },
    {
      image:
        "https://bellroy.imgix.net/cms_images/5687/menu-icons-keys.jpg?auto=format&fit=max&w=95",
      name: "Key Holders",
    },
    {
      image:
        "https://bellroy.imgix.net/cms_images/6229/shop-all-icon.jpeg?auto=format&fit=max&w=95",
      name: "Shop All",
    },
    {
      image:
        "https://bellroy.imgix.net/cms_images/6686/nav-icon-new-releases.jpeg?auto=format&fit=max&w=95",
      name: "New Releases",
    },
  ];
  return (
    <Box className="carousalContainer">
      <Heading fontSize={'1.2rem'}>SHOP BY CATEGORY</Heading>
      <Flex className='carouselFlex'>
        {data.map((el) => (
          <Box className='carouselItemBox'>
            <img
              srcSet={el.image}
              className={el.name.split(" ").join("")}
              alt={el.name}
            />
            <Text className="carouselItemName">{el.name}</Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
