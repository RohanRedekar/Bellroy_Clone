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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";

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
