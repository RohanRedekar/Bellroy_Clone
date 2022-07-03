import React, { useState, useEffect } from "react";
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
  GridItem,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BiSearch, BiMenu } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";

export const Navbar = () => {
  // states for different screen sizes
  const [isDesktop, setIsDesktop] = useState(false);
  const [isTab, setIsTab] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const screenType = () => {
    setIsDesktop(window.innerWidth >= 1200);
    setIsTab(window.innerWidth > 600 && window.innerWidth < 1200);
    setIsMobile(window.innerWidth < 600);
  };

  useEffect(() => {
    screenType();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", screenType);
    return () => {
      // cleanup function
      window.removeEventListener("resize", screenType);
    };
  });

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
        <Flex gap={"3rem"}>
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
                <Link key={i} to={"/products"}>
                  {el}
                </Link>
              ))}
            </Flex>
            <Flex color={"#8c8b8b"} marginRight={"1rem"} alignItems={"center"}>
              <Link to={"/help"}>
                <Text fontSize='0.8rem' letterSpacing='1px' width={"3rem"}>
                  Help
                </Text>
              </Link>
              <Text fontSize='0.8rem' letterSpacing='1px' width={"7rem"}>
                Find In-Store
              </Text>
              <Box>
                <PopupModel />
              </Box>
              <Button backgroundColor={"white"}>
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
      <Button fontSize={"1.9rem"} backgroundColor={"white"} onClick={onOpen}>
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
            <Heading marginTop={'0.5rem'} fontSize={"1.5rem"}>Collections</Heading>
          </Box>
          <Box>
            {optionItems.map((el) => (
              <Box>
                <Flex
                  borderBottom={"1px solid white"}
                  justifyContent={"space-between"}
                  bg={"rgb(239,239,239)"}
                >
                  <Text padding={"0.8rem 1.5rem"}>{el.title}</Text>
                  <ChevronDownIcon fontSize={"2xl"} margin={"0.8rem 1rem"} />
                </Flex>
                <Grid
                  marginLeft={"0.8rem"}
                  gap='10px'
                  templateColumns='repeat(2, 1fr)'
                  padding={"0.8rem"}
                  display='none'
                >
                  {el.subTitles.map((sub) => (
                    <GridItem fontSize={"0.8rem"}>
                      <Text letterSpacing='1px' fontFamily={"Lato,sans-serif"}>
                        {sub}
                      </Text>
                    </GridItem>
                  ))}
                </Grid>
              </Box>
            ))}
          </Box>
        </DrawerContent>
      </Drawer>
    </>
  );
}
