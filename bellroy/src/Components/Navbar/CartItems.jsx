import {
  Box,
  CloseButton,
  Flex,
  Image,
  Text,
  NumberInput,
  NumberIncrementStepper,
  NumberDecrementStepper,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../Redux/Products/action";
import { v4 as uuidv4 } from "uuid";

export const CartItems = () => {
  const [index, setIndex] = useState(-1);
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.productData.cart);

  useEffect(() => {
    // delete cart item functionality
    if (index >= 0) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      dispatch(fetchCart(cartItems));
    }
  }, [index, dispatch]);

  const handleQuantity = (id, value, color) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.forEach((item) => {
      if (item.id === id && item.color === color) {
        item.count = +value;
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    dispatch(fetchCart(cartItems));
  };

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
                <CloseButton color='#888585' onClick={() => setIndex(idx)} />
              </Flex>

              <Flex width={"100%"} justifyContent='space-between'>
                <NumberInput
                  size='xs'
                  maxW={16}
                  defaultValue={el.count}
                  onChange={(value) =>
                    handleQuantity(el._id, value, el.colors[el.imgIndex])
                  }
                  min='1'
                  max='3'
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Text fontWeight={"600"}>${el.price * el.count + " "} USD</Text>
              </Flex>
            </Flex>
          </Flex>
        ))}
    </Box>
  );
};
