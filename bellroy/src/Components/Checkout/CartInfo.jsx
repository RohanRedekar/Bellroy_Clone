import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { CartItems } from '../Navbar/CartItems';

const CartInfo = () => {
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
    <Box backgroundColor={"white"} width='400px' height={'fit-content'}>
      <Box width={["90%","96%"]} height='96%' margin='auto'>
        <CartItems />
        <Flex
          fontWeight={"600"}
          margin='15px 0 10px 0'
          paddingTop={'10px'}
          borderTop={"1px solid #f0eded"}
          justifyContent='space-between'
        >
          <Text textTransform={"uppercase"}>subtotal</Text>
          <Text>${subTotal + " "} USD</Text>
        </Flex>
      </Box>
    </Box>
  );
}

export default CartInfo