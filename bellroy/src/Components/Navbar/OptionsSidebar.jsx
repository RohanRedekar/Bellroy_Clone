import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Grid,
  Heading,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BiMenu } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";

export const ShowOptions = () => {
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
              <AccordionItem key={uuidv4()}>
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
                    {el.subTitles.map((sub, i) => (
                      <Text
                        key={uuidv4()}
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
};
