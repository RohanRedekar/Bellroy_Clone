import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react';
import React from 'react'

export const StaticAccordionComp = () => {
  return (
    <>
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
    </>
  );
}
