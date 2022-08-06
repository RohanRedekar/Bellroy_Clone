import { Button, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";
import successImg from "../Sources/payment-success.png";
import { Link as RouterLink } from "react-router-dom";

export const Success = () => {
  return (
    <>
      <Flex justifyContent={"center"}>
        <Stack
          marginTop={["2rem", "3rem", "4rem", "5rem", "6rem"]}
          textAlign={"center"}
        >
          <Image margin={"auto"} w={350} srcSet={successImg} />
          <Heading color={"orange"} textTransform={"uppercase"}>
            awesome, payment was successful!
          </Heading>
          <RouterLink to={"/"}>
            <Button colorScheme={"green"} marginTop={"1rem"}>
              Back to homepage
            </Button>
          </RouterLink>
        </Stack>
      </Flex>
    </>
  );
};
