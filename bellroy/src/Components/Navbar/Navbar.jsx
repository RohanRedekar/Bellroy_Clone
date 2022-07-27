import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import {
  Box,
  Flex,
  Image,
  Text,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { ViewportContext } from "../../Contexts/ViewportContext";
import { fetchCart } from "../../Redux/Products/action";
import { ShowCartItems } from "./CartItems";
import { ShowOptions } from "./OptionsSidebar";
import { PopupModel } from "./PopupModel";

const StyledPtag = styled.p`
  &:hover {
    color: #cc7133;
  }
`;

export const Navbar = () => {
  // states for different screen sizes
  const { width } = useContext(ViewportContext);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cart = useSelector((store) => store.productData.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsDesktop(width >= 1200);
    setIsTab(width > 600 && width < 1200);
    setIsMobile(width < 600);
  }, [width]);

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    console.log("cart Items:" ,cartItems)
    dispatch(fetchCart(cartItems));
  }, [dispatch]);

  const navLinks = [
    "Wallets",
    "Bags",
    "Accessories",
    "Tech",
    "Travel",
    "Collection",
  ];

  return (
    <>
      {isDesktop && <DesktopView navLinks={navLinks} cart={cart} />}
      {isTab && (
        <TabMobileView navLinks={navLinks} isTab={isTab} isMobile={isMobile} />
      )}
      {isMobile && (
        <TabMobileView
          navLinks={navLinks}
          isTab={isTab}
          isMobile={isMobile}
          cart={cart}
        />
      )}
    </>
  );
};

const DesktopView = ({ navLinks, cart }) => {
  return (
    <Box fontFamily={"Lato,sans-serif"}>
      <Flex justifyContent={"right"} alignItems='center' height={"1.7rem"}>
        <Text
          fontSize='0.7rem'
          letterSpacing='1px'
          color={"#8c8b8b"}
          marginRight='1rem'
        >
          Worldwide shipping 🇮🇳
        </Text>
      </Flex>
      <Box>
        <Flex height={"4.5rem"} gap={"3rem"} paddingBottom='0.8rem'>
          <Box marginLeft={"2rem"}>
            <Image
              marginTop={"-2rem"}
              width={"6rem"}
              src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1427935400/kickbh3rxpxwt9ibapnw.png'
            />
          </Box>
          <Flex justifyContent={"space-between"} flex={"1"}>
            <Flex
              fontSize='0.8rem'
              letterSpacing='1px'
              color='#393838'
              gap={"3rem"}
              alignItems={"center"}
              fontWeight='bold'
            >
              {navLinks.map((el, i) => (
                <Link key={i} to={`/products/${el}`}>
                  <StyledPtag>{el}</StyledPtag>
                </Link>
              ))}
            </Flex>
            <Flex color={"#8c8b8b"} marginRight={"1rem"} alignItems={"center"}>
              <Link to={"/help"}>
                <Text
                  _hover={{ color: "#cc7133" }}
                  fontSize='0.8rem'
                  letterSpacing='1px'
                  width={"3rem"}
                >
                  Help
                </Text>
              </Link>
              <Text
                _hover={{ color: "#cc7133" }}
                fontSize='0.8rem'
                letterSpacing='1px'
                width={"7rem"}
              >
                Find In-Store
              </Text>
              <Box>
                <PopupModel />
              </Box>
              <Button _hover={false} backgroundColor={"white"}>
                <BiSearch fontSize={"1.9rem"} />
              </Button>
              <Box style={{ transform: "translateY(-3px)" }}>
                <ShowCartItems cart={cart} />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

const TabMobileView = ({ navLinks, isTab, isMobile, cart }) => {
  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems='center'>
        <Flex color={"#8c8b8b"} marginLeft={"0.5rem"}>
          <ShowOptions/>
          {isMobile && <PopupModel />}
        </Flex>
        <Box>
          <Image
            width={"4rem"}
            src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1427935400/kickbh3rxpxwt9ibapnw.png'
          />
        </Box>
        <Flex color={"#8c8b8b"} marginRight={"0.5rem"} alignItems={"center"}>
          <Box>{isTab && <PopupModel />}</Box>
          <Button backgroundColor={"white"}>
            <BiSearch fontSize={"1.9rem"} />
          </Button>
          <Box style={{ transform: "translateY(-3px)" }}>
            <ShowCartItems cart={cart} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
