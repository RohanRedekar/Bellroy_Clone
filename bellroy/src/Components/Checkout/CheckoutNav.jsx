import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { GlobalDelivery, SecurePayment, Warrenty } from "../Svgs";

const CheckoutNav = () => {
  return (
    <Box width={"100%"} backgroundColor={"white"}>
      <Flex
        margin={"auto"}
        justifyContent={"center"}
        width={["100%", "100%", "100%", "100%", "1200px"]}
      >
        <Flex
          flex='1 1 auto'
          height={["70px", "70px", "107px"]}
          fontWeight='700'
          letterSpacing='1px'
        >
          <Flex color='rgb(163,163,163)' flex='1 1 0' alignItems={"center"}>
            <ChevronLeftIcon fontSize={["18px", "20px", "30px"]} />
            <Text fontSize={["10px", "10px", "14px", "16px"]}>
              Continue shopping
            </Text>
          </Flex>
          <Flex flex='1 1 0' alignItems={"center"} justifyContent='center'>
            <Image
              marginRight={"1rem"}
              width={["3rem", "4rem", "5rem", "6rem"]}
              src='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1427935400/kickbh3rxpxwt9ibapnw.png'
            />
            <Text
              fontFamily={
                'Frank Ruhl Libre,"PT Serif","Noto Serif","Noto Serif JP","Noto Serif KR","Noto Serif SC","Noto Serif TC",serif'
              }
              fontSize='1.3rem'
              paddingTop={"1rem"}
              fontWeight={"300"}
              display={["none", "none", "none", "block"]}
            >
              Secure Checkout
            </Text>
          </Flex>
          <Flex
            fontSize={["10px", "10px", "12px"]}
            color='rgb(163,163,163)'
            flex='1 1 0'
            alignItems={"center"}
            justifyContent='end'
          >
            <Box
              display={["flex", "flex", "block"]}
              width='90px'
              textAlign={"center"}
            >
              <Warrenty />
              <Text>
                3 year <br /> warranty
              </Text>
            </Box>
            <Box
              display={["none", "none", "block"]}
              width='90px'
              textAlign={"center"}
            >
              <GlobalDelivery />
              <Text>
                Global <br /> delivery
              </Text>
            </Box>
            <Box
              display={["none", "none", "block"]}
              width='90px'
              textAlign={"center"}
            >
              <SecurePayment />
              <Text>
                Secure <br /> payment
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default CheckoutNav;
