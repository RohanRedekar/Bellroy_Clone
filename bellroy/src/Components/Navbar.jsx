import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import {
  Box,
  Flex,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Center,
  Heading,
  Grid,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BiSearch, BiMenu } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { ViewportContext } from "../Contexts/ViewportContext";

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

  const screenType = () => {
    setIsDesktop(width >= 1200);
    setIsTab(width > 600 && width < 1200);
    setIsMobile(width < 600);
  };

  useEffect(() => {
    screenType();
  }, [width]);

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
                <ShowCartItems />
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

const TabMobileView = ({ navLinks, isTab, isMobile }) => {
  return (
    <Box>
      <Flex justifyContent={"space-between"} alignItems='center'>
        <Flex color={"#8c8b8b"} marginLeft={"0.5rem"}>
          <ShowOptions navLinks={navLinks} />
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
            <ShowCartItems />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

// For connect with Mail popup
function PopupModel() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button _hover={false} fontSize={"1.9rem"} backgroundColor={"white"} onClick={onOpen}>
        <HiOutlineMail />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody></ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

// Right side cart details drawer
function ShowCartItems() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button
        ref={btnRef}
        fontSize={"1.5rem"}
        backgroundColor='white'
        onClick={onOpen}
        _hover={false}
      >
        <BsCart2 />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
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
            <Center fontSize={"1.5rem"}>
              <BsCart2 />
            </Center>
            <Text marginTop={"4px"} fontSize={"0.8rem"}>
              Your Shopping Cart
            </Text>
          </Box>
          <DrawerBody></DrawerBody>
          <DrawerFooter>
            <Button width={"100%"} colorScheme='orange'>
              GO TO CHECKOUT
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

// Left side cart details drawer
function ShowOptions({ navLinks }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const optionItems = [
    {
      title: "Wallets",
      subTitles: [
        "Mens Wallets",
        "Zip Wallets",
        "Women's Wallets",
        "Passport Holders",
        "Billfolds",
        "RFID Protected",
        "Card Holders",
        "All Wallets",
      ],
    },
    {
      title: "Bags",
      subTitles: [
        "Men's Bags",
        "Tote & Shoulder Bags",
        "Wome's Bags",
        "Camera bags",
        "Backpacks",
        "WorkBags",
        "Slings & Crossbody Bags",
        "Duffel bags",
        "All Bags",
      ],
    },
    {
      title: "Accessories",
      subTitles: [
        "Key Holders",
        "Stationery",
        "Pouches",
        "Bussiness Card Cases",
        "Folios",
        "All Accessories",
      ],
    },
    {
      title: "Tech",
      subTitles: [
        "IPhone Cases",
        "AirTag Cases",
        "Pixel Cases",
        "Apple Watch Bands",
        "Samsung Cases",
        "Laptop & Tablet Sleeves",
        "Airpod Cases",
        "Tech Organizers",
        "All Tech",
      ],
    },
    {
      title: "Travel",
      subTitles: [
        "Travel Bags",
        "RFID Protected",
        "Passport Holders",
        "Toiletry Bags",
        "All Travel",
      ],
    },
  ];

  return (
    <>
      <Button
        ref={btnRef}
        color={"#8c8b8b"}
        fontSize={"1.7rem"}
        backgroundColor={"white"}
        onClick={onOpen}
      >
        <BiMenu />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        size='sm'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <Box height={"3rem"} textAlign={"center"}>
            <Heading marginTop={"0.5rem"} fontSize={"1.5rem"}>
              Collections
            </Heading>
          </Box>
          <Accordion allowToggle>
            {optionItems.map((el) => (
              //
              <AccordionItem>
                <h2>
                  <AccordionButton
                    _hover={false}
                    height={"3.5rem"}
                    bg={"rgb(239,239,239)"}
                  >
                    <Box flex='1' textAlign='left'>
                      <Text
                        fontWeight={"600"}
                        fontSize='1.2rem'
                        marginLeft={"10px"}
                      >
                        {el.title}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={3} pt={5}>
                  <Grid marginLeft={"10px"} gridTemplateColumns={"1fr 1fr"}>
                    {el.subTitles.map((sub) => (
                      <Text
                        letterSpacing='1.5px'
                        fontSize='0.8rem'
                        fontFamily={"'Lato',sans-serif"}
                        lineHeight='2rem'
                      >
                        {sub}
                      </Text>
                    ))}
                  </Grid>
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </DrawerContent>
      </Drawer>
    </>
  );
}
