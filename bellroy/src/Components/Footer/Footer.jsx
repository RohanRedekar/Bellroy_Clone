import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Grid,
  GridItem,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  Carriology,
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  ShareChat,
  Twitter,
  Youtube,
} from "../Svgs";
import "./Footer.css";
import { CertifiedImage1, CertifiedImage2 } from "../Images";
const Content = {
  HELP: [
    "Customer Care",
    "Shipping and Returns",
    "3-Year Warranty",
    "Contact Us",
    "Terms & Conditions",
    "Privacy Policy",
    "Cookie Policy",
  ],
  "SHOP PRODUCTS": [
    "Wallets",
    "Passport Holders",
    "RFID Protected",
    "Bags",
    "Phone & Laptop Cases",
    "Work Accessories",
    "Travel",
    "Pouches",
    "Key Holders",
  ],
  "SHOP COLLECTIONS": [
    "New Releases",
    "Bestsellers",
    "Coming soon",
    "Premium",
    "Small Bags",
    "Recycled",
    "Slim Your Wallet",
    "Apex",
    "Materials Hub",
    "Value Sets",
    "The Outlet",
    "Rediscover Travel",
    "Lite Collection",
  ],
  ABOUT: [
    "Our Story",
    "Our Materials",
    "Responsible Business",
    "Journal",
    "Collaborations",
    "Find In-Store",
    "Affiliate Program",
    "Corporate Gifting",
    "Press",
    "Careers",
  ],
};

export const Footer = () => {
  return (
    <Box position={'relative'} width="100%" bottom="0">
      <Box
        className='blackContainer'
        display={["none", "none", "block", "block", "block", "block"]}
      >
        <Grid className='footerGrid'>
          {Object.keys(Content).map((el) => {
            return (
              <GridItem key={el} className={el.split(" ").join("")}>
                <Text>{el}</Text>
                {Content[el].map((e) => (
                  <Text className='footerLinks' key={e}>
                    {e}
                  </Text>
                ))}
              </GridItem>
            );
          })}
          <GridItem className='lgContainer'>
            <LogoGrid />
          </GridItem>
        </Grid>
      </Box>
      <Box
        className='blackContainer mobFooter'
        display={["block", "block", "none", "none", "none", "none"]}
      >
        <LogoGrid />
        <Accordion allowToggle>
          {Object.keys(Content).map((el) => {
            return (
              <AccordionItem key={el}>
                <h2 className='footerTitles'>
                  <AccordionButton>
                    <Box flex='1' textAlign='left'>
                      {el}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {Content[el].map((e) => (
                    <Text padding={"5px 0 5px 0"} key={e}>
                      {e}
                    </Text>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </Box>

      <Box className='blackContainer blackContainer2'>
        <Flex className='bottomFooter'>
          <Flex className='bottomFootersecondary'>
            <CertifiedImage1 />
            <CertifiedImage2 />
          </Flex>
          <Flex className='bottomFootersecondary textSpacing'>
            <Text fontSize={"12px"}>
              Got a question? Contact{" "}
              <span style={{ color: "rgb(216, 76, 31)" }}>
                support@bellroy.com
              </span>
            </Text>
            <Text>All rights reserved &copy; 2022 Bellroy Pty Ltd</Text>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

const LogoGrid = () => {
  return (
    <Grid className='logoGrid'>
      <Box>
        <Instagram />
      </Box>
      <Box>
        <Facebook />
      </Box>
      <Box>
        <Youtube />
      </Box>
      <Box>
        <LinkedIn />
      </Box>
      <Box>
        <Pinterest />
      </Box>
      <Box>
        <Twitter />
      </Box>
      <Box>
        <ShareChat />
      </Box>
      <Box>
        <Carriology />
      </Box>
    </Grid>
  );
};
