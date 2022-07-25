import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Box, Flex, Grid, Image, Stack, Text } from "@chakra-ui/react";
import { changeColour } from "../../Redux/Products/action";

export const ProductsDisplay = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");
  const currRoute = path[path.length - 1];
  const data = useSelector((store) => store.productData.products);

  const handleColour = (color, index1, index2) => {
    let change = {
      color: color,
      index1: index1,
      index2: index2,
    };
    dispatch(changeColour(change));
  };

  const handleRouting = (title, color) => {
    title = title.split(" ").join("-");
    navigate({
      pathname: `/products/${currRoute}/${title}`,
      search: `?color=${color}`,
    });
  };

  return (
    <Box width={"100%"}>
      <Grid
        gridTemplateColumns={["1fr", "1fr 1fr", "1fr 1fr", "1fr 1fr 1fr"]}
        gridAutoRows='1fr'
        gridGap={"10px"}
      >
        {/* Mapping all wallets */}
        {data?.map((el, idx) => {
          return (
            <Box backgroundColor={"#f7f7f7"} width={"100%"} key={el._id}>
              <Flex width={"100%"} justifyContent='center'>
                <Image
                  onClick={() => handleRouting(el.title, el.selectedColour)}
                  src={el?.colouredWalletImages[el.imgIndex]}
                />
              </Flex>
              <Flex flexDirection={"column"} justifyContent='space-between'>
                <Flex
                  width={"100%"}
                  justifyContent={"center"}
                  marginBottom='30px'
                >
                  <Stack
                    userSelect={"none"}
                    paddingTop={"1rem"}
                    spacing={3}
                    direction={"row"}
                  >
                    {/*Mapping Coloured Checkboxes */}
                    {el?.colors.map((c, i) => (
                      <Box key={i}>
                        <Flex
                          width='20px'
                          height='20px'
                          borderRadius={"50%"}
                          {...(el.selectedColour === c
                            ? { border: `1px solid #${c}` }
                            : { border: "none" })}
                          justifyContent='center'
                          alignItems={"center"}
                        >
                          <Box
                            onClick={() => handleColour(c, idx, i)}
                            {...(el.selectedColour === c
                              ? { width: "13px" }
                              : { width: "17px" })}
                            {...(el.selectedColour === c
                              ? { height: "13px" }
                              : { height: "17px" })}
                            borderRadius={"50%"}
                            backgroundColor={`#${c}`}
                          ></Box>
                        </Flex>
                      </Box>
                    ))}
                  </Stack>
                </Flex>
                {/* Product Title and subtitle */}
                <Flex
                  fontFamily={"Lato, sans-serif"}
                  letterSpacing='1px'
                  color={"#333"}
                >
                  <Box padding={"0 20px 20px 20px"}>
                    <Text fontSize={"1rem"} fontWeight='600'>
                      {el.title}
                      {el.subtitle && (
                        <span
                          style={{
                            marginLeft: "15px",
                            fontSize: "0.7rem",
                            color: "#979797",
                          }}
                        >
                          {el.subtitle}
                        </span>
                      )}
                    </Text>
                    <Text fontSize={"0.8rem"} fontWeight='600'>
                      ${el.price}
                    </Text>
                    <Text
                      lineHeight={"18px"}
                      letterSpacing='0.5px'
                      fontWeight={"500"}
                      fontSize={"13px"}
                    >
                      {el.description}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          );
        })}
      </Grid>
    </Box>
  );
};
