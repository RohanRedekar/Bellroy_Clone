import React, { useEffect, useState, memo } from "react";
import { useDispatch } from "react-redux";
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
  Image,
  Text,
  useDisclosure,
  CloseButton,
} from "@chakra-ui/react";
import { BsCart2 } from "react-icons/bs";
import { fetchCart } from "../../Redux/Products/action";

const ShowCartItems = ({ cart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [subTotal, setSubtotal] = useState(0);
  const [index, setIndex] = useState(-1);
  const dispatch = useDispatch();

  useEffect(() => {
    let sum = 0;
    if (cart !== undefined) {
      for (let i = 0; i < cart.length; i++) {
        sum += cart[i].price * cart[i].count;
      }
    }
    setSubtotal(sum);
  }, [cart]);

  useEffect(() => {
    if (index >= 0) {
      let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      cartItems.splice(index, 1);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      dispatch(fetchCart(cartItems));
    }
  }, [index, dispatch]);

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
            {cart !== undefined &&
              cart?.map((el, idx) => (
                <Flex key={idx} marginBottom={"10px"} fontSize='0.8rem'>
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
                      <CloseButton onClick={() => setIndex(idx)} />
                    </Flex>

                    <Flex width={"100%"} justifyContent='space-between'>
                      <Text>Quantity: {el.count}</Text>
                      <Text fontWeight={"600"}>
                        ${el.price * el.count + " "} USD
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              ))}
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
              <Button width={"100%"} colorScheme='orange'>
                GO TO CHECKOUT
              </Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default memo(ShowCartItems);
