import React, { useState, useEffect, useContext } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { ViewportContext } from "../../Contexts/ViewportContext";
import { fetchCart } from "../../Redux/Products/action";
import ShowCartItems from "./Cart";
import { ShowOptions } from "./OptionsSidebar";
import { PopupModel } from "./PopupModel";
import { v4 as uuidv4 } from "uuid";

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
  const dispatch = useDispatch();

  useEffect(() => {
    setIsDesktop(width >= 1200);
    setIsTab(width > 600 && width < 1200);
    setIsMobile(width < 600);
  }, [width]);

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
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
      {isDesktop && <DesktopView navLinks={navLinks} />}
      {isTab && (
        <TabMobileView navLinks={navLinks} isTab={isTab} isMobile={isMobile} />
      )}
      {isMobile && (
        <TabMobileView navLinks={navLinks} isTab={isTab} isMobile={isMobile} />
      )}
    </>
  );
};

const DesktopView = ({ navLinks }) => {
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
          <Link to={"/"}>
            <Box marginLeft={"2rem"}>
              <Image
                marginTop={"-2rem"}
                width={"6rem"}
                src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1427935400/kickbh3rxpxwt9ibapnw.png'
              />
            </Box>
          </Link>
          <Flex justifyContent={"space-between"} flex={"1"}>
            <Flex
              fontSize='0.8rem'
              letterSpacing='1px'
              color='#393838'
              gap={"3rem"}
              alignItems={"center"}
              fontWeight='bold'
            >
              {navLinks.map((el) => (
                <Link key={uuidv4()} to={`/products/${el}`}>
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
                <ShowCartItems />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

const TabMobileView = ({ isTab, isMobile }) => {
  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems='center'>
        <Flex color={"#8c8b8b"} marginLeft={"0.5rem"}>
          <ShowOptions />
          {isMobile && <PopupModel />}
        </Flex>
        <Box>
          <Link to={"/"}>
            <Image
              width={"4rem"}
              src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1427935400/kickbh3rxpxwt9ibapnw.png'
            />
          </Link>
        </Box>
        <Flex color={"#8c8b8b"} marginRight={"0.5rem"} alignItems={"center"}>
          <Box>{isTab && <PopupModel />}</Box>
          <Button backgroundColor={"white"}>
            <BiSearch fontSize={"1.9rem"} />
          </Button>
          <Box style={{ transform: "translateY(-3px)" }}>
            <ShowCartItems />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
