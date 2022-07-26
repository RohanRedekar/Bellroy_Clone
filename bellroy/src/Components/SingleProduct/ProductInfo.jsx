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
import React from "react";
import { useSelector } from "react-redux";

export const ProductInfo = (data) => {
  const product = useSelector((store) => store.productData.product);
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
      <Button letterSpacing={'2px'} w='100%' colorScheme={'orange'} textTransform={'uppercase'}>add to cart</Button>
      <Text
        marginTop={"8px"}
        fontWeight={"600"}
        letterSpacing={"1px"}
        fontSize={"0.8rem"}
      >
        DESIGN INSIGHTS
      </Text>
      <UnorderedList>
        {product?.pointers?.map((p,i) => (
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
              {product?.specifications?.map((p,i) => (
                <ListItem key={i} marginLeft={"-1rem"} fontSize={"0.8rem"}>
                  {p}
                </ListItem>
              ))}
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
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
                SHIPPING AND RETURNS
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            margin={"3px 0 0 -1rem"}
            fontSize={"0.9rem"}
            color='#696969'
            pb={4}
          >
            We offer regular or express shipping to most addresses worldwide.
            Shipping cost and delivery times are calculated at checkout. Note:
            P.O. box deliveries will automatically be sent by regular shipping.
          </AccordionPanel>
        </AccordionItem>
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
                3 YEAR WARRANTY
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel
            margin={"3px 0 0 -1rem"}
            fontSize={"0.9rem"}
            color='#696969'
            pb={4}
          >
            Bellroy products are warranted to be free from defects in materials
            and workmanship for three years from original date of purchase when
            used under normal conditions and for the purpose intended.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Box>
  );
};
