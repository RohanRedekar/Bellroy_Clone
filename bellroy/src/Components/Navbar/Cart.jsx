import React, { useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Badge,
  Box,
  Button,
  Center,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";
import { CartItems } from "./CartItems";
import { useSelector } from "react-redux";

const ShowCartItems = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const cart = useSelector((store) => store.productData.cart);
  const [subTotal, setSubtotal] = useState(0);
  
  useEffect(() => {
    let sum = 0;
    if (cart !== undefined) {
      for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].count;
      }
    }
    setSubtotal(sum);
  }, [cart]);

  return (
    <>
      <Button
        ref={btnRef}
        fontSize={"1.5rem"}
        backgroundColor='white'
        onClick={onOpen}
        _hover={false}
        position='relative'
      >
        <BsCart2 />
        <Badge
          right={"10px"}
          top='8px'
          position={"absolute"}
          borderRadius={"50%"}
          bg={"#e15a1d"}
          color='white'
        >
          {cart !== undefined && cart.length}
        </Badge>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box
            color={"#8c8b8b"}
            marginTop={"1rem"}
            textAlign={"center"}
            width={"100%"}
          >
            <Center>
              <Box position={"relative"}>
                <BsCart2 fontSize={"25px"} />
                <Badge
                  right={"-4px"}
                  top='-5px'
                  position={"absolute"}
                  borderRadius={"50%"}
                  bg={"#e15a1d"}
                  color='white'
                >
                  {cart !== undefined && cart.length}
                </Badge>
              </Box>
            </Center>
            <Text marginTop={"4px"} fontSize={"0.8rem"}>
              Your Shopping Cart
            </Text>
          </Box>
          <DrawerBody>
            {/* Cart Items component */}
            <CartItems />
          </DrawerBody>
          <DrawerFooter justifyContent={"center"}>
            <Flex flexDirection={"column"} width='100%'>
              <Flex
                fontWeight={"700"}
                marginBottom='10px'
                justifyContent='space-between'
              >
                <Text textTransform={"uppercase"}>subtotal</Text>
                <Text>${subTotal + " "} USD</Text>
              </Flex>
              <RouterLink to='/checkout'>
                <Button width={"100%"} colorScheme='orange'>
                  GO TO CHECKOUT
                </Button>
              </RouterLink>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default ShowCartItems;
