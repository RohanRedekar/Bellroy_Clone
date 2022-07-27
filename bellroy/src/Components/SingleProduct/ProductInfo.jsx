import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCart } from "../../Redux/Products/action";
import { StaticAccordionComp } from "./StaticAccordionComp";

export const ProductInfo = () => {
  const product = useSelector((store) => store.productData.product);
  const [cartData, setCartData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart(cartData));
  }, [cartData, dispatch]);

  // Storing Cart item ids in local storage then fetching from database
  const handleCart = (id) => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    if (cartItems.length === 0) {
      let val = { id: id, count: 1 };
      cartItems.push(val);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setCartData(cartItems);
    } else {
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === id) {
          cartItems[i].count += 1;
          localStorage.setItem("cartItems", JSON.stringify(cartItems));
          setCartData(cartItems);
          return;
        }
      }
      let val = { id: id, count: 1 };
      cartItems.push(val);
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      setCartData(cartItems);
    }
  };

  return (
    <Box color='#333'>
      <Text
        fontFamily={"'Frank Ruhl Libre', 'PT Serif', 'serif'"}
        fontSize={"25px"}
      >
        {product.title}
      </Text>
      <Flex marginBottom={"8px"} fontFamily={"Lato"}>
        <Text fontSize={"1.3rem"}>${product.price}</Text>
        <Text
          margin={"5px 0 0 4px"}
          fontWeight='600'
          letterSpacing={"1px"}
          fontSize={"0.8rem"}
        >
          USD
        </Text>
      </Flex>
      {/* <hr style={{ borderTop: "1px solid #D8D8D8" }} /> */}
      <Button
        onClick={() => handleCart(product._id)}
        letterSpacing={"2px"}
        w='100%'
        colorScheme={"orange"}
        textTransform={"uppercase"}
      >
        add to cart
      </Button>
      <Text
        marginTop={"8px"}
        fontWeight={"600"}
        letterSpacing={"1px"}
        fontSize={"0.8rem"}
      >
        DESIGN INSIGHTS
      </Text>
      <UnorderedList>
        {product?.pointers?.map((p, i) => (
          <ListItem key={i} fontSize={"0.9rem"} color='#696969'>
            {p}
          </ListItem>
        ))}
      </UnorderedList>
      <Accordion marginTop={"8px"} allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box
                fontWeight='600'
                letterSpacing={"1px"}
                fontSize={"13px"}
                flex='1'
                textAlign='left'
                marginLeft={"-1rem"}
              >
                SPECIFICATIONS
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <UnorderedList color='#696969' marginTop={"3px"}>
              {product?.specifications?.map((p, i) => (
                <ListItem key={i} marginLeft={"-1rem"} fontSize={"0.8rem"}>
                  {p}
                </ListItem>
              ))}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
        <StaticAccordionComp />
      </Accordion>
    </Box>
  );
};
