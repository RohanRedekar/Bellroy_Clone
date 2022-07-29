import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
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
import { getProducts } from "../../Redux/Products/action";

const checkboxes = [
  { color: "363636" },
  { color: "3d4665" },
  { color: "454653" },
  { color: "894405" },
  { color: "bc7049" },
  { color: "b2591b" },
  { color: "b1aeac" },
  { color: "f5c02e" },
];

export const Sidebar = ({ currRoute }) => {
  const [checkedState, setCheckedState] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(currRoute, checkedState));
  }, [dispatch, checkedState, currRoute]);

  const handleChange = (color) => {
    let flag = true;
    for (let i = 0; i < checkedState.length; i++) {
      if (checkedState[i] === color) {
        flag = false;
        let temp = [...checkedState];
        temp.splice(i, 1);
        setCheckedState(temp);
      }
    }
    if (flag) setCheckedState([...checkedState, color]);
  };

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
                {checkboxes.map((c, i) => (
                  <Box key={i}>
                    <Checkbox
                      className='colCheckbox'
                      size='lg'
                      colorScheme={`#${c.color}`}
                      backgroundColor={`#${c.color}`}
                      onChange={() => handleChange(c.color)}
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
