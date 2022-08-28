import { Box, CloseButton, Flex, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../Redux/Products/action";
import { v4 as uuidv4 } from "uuid";

export const CartItems = () => {
  const [index, setIndex] = useState(-1);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.productData.cart);

  useEffect(() => {
    if (index >= 0) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      dispatch(fetchCart(cartItems));
    }
  }, [index, dispatch]);

  return (
    <Box>
      {cart !== undefined &&
        cart?.map((el, idx) => (
          <Flex key={uuidv4()} marginBottom={"10px"} fontSize='0.8rem'>
            <Flex width={"110px"}>
              <Image
                width={"90px"}
                height='60px'
                src={el.colouredWalletImages[el.imgIndex]}
              />
            </Flex>
            <Flex
              flexDirection={"column"}
              gap='10px'
              flexGrow='1'
              alignItems='center'
            >
              <Flex
                alignItems={"center"}
                width='100%'
                justifyContent={"space-between"}
              >
                <Text textAlign={"left"} fontWeight={"600"}>
                  {el.title}
                </Text>
                <CloseButton color="#888585" onClick={() => setIndex(idx)} />
              </Flex>

              <Flex width={"100%"} justifyContent='space-between'>
                <Text>Quantity: {el.count}</Text>
                <Text fontWeight={"600"}>${el.price * el.count + " "} USD</Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
    </Box>
  );
};
