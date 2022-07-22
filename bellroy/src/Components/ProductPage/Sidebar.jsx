import React from "react";
import "./Sidebar.css";
import {
  Box,
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack,
  Checkbox,
} from "@chakra-ui/react";

const checkboxes = [
  { color: "rgb(216,181,85)" },
  { color: "rgb(222,213,193)" },
  { color: "rgb(52,118,93)" },
  { color: "rgb(59,97,144)" },
  { color: "rgb(157,97,65)" },
  { color: "rgb(163,29,11)" },
  { color: "rgb(155,155,155)" },
  { color: "rgb(51,51,51)" },
];

export const Sidebar = () => {
  return (
    <Box>
      <Flex></Flex>
      <Box marginLeft={"1rem"} width={"300px"}>
        <Accordion allowToggle>
          <AccordionItem borderTop={"0px"}>
            <h2>
              <AccordionButton borderBottom={"1px solid rgb(219,219,219)"}>
                <Box flex='1' textAlign='left'>
                  Color
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              <Stack paddingTop={"1rem"} spacing={3} direction={"row"}>
                {checkboxes.map((c,i) => (
                  <Box key={i}>
                    <Checkbox
                      className='colCheckbox'
                      size='lg'
                      colorScheme={c.color}
                      backgroundColor={c.color}
                    />
                  </Box>
                ))}
              </Stack>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Box>
    </Box>
  );
};
