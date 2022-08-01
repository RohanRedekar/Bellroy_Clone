import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export const ProductTitle = () => {
  return (
    <Box margin={{ sm: "0 7px", md: "0 auto" }} backgroundColor={"#f7f7f7"}>
      <Text
        color={"#9B9B9B"}
        fontSize={"0.7rem"}
        letterSpacing='1px'
        padding={"0.5rem 0"}
        textAlign={{ sm: "left", md: "center" }}
      >
        Shop /
      </Text>
      <Box color={"#333333"} textAlign={{ sm: "left", md: "center" }}>
        <Heading
          fontFamily={
            'Frank Ruhl Libre,"PT Serif","Noto Serif","Noto Serif JP","Noto Serif KR","Noto Serif SC","Noto Serif TC",serif'
          }
          lineHeight='3rem'
          fontWeight='300'
          fontSize={{ sm: "1.5rem", md: "2rem" }}
          padding={{ sm: "0", md: "1rem 0" }}
        >
          Wallet
        </Heading>
        <Text
          margin={"auto"}
          paddingBottom={{ sm: "1rem", md: "3rem" }}
          fontSize={{ sm: "0.8rem", md: "1rem" }}
          maxWidth={"850px"}
          letterSpacing={{ sm: "1px", md: "1.2px" }}
        >
          Crafted from premium, durable materials, our wallets feel great in
          your hand, and age beautifully as the years go by.
        </Text>
      </Box>
    </Box>
  );
};
