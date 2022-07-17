import { Box, Button, Heading } from '@chakra-ui/react';
import React from 'react'

export const BannerBtn = () => {
  return (
    <Box
      position={"absolute"}
      left='0'
      right='0'
      marginLeft={"auto"}
      marginRight='auto'
      width={["20rem", "25rem", "30rem", "35rem", "40rem", "45rem"]}
      textAlign='center'
      top={"40%"}
    >
      <Heading
        fontFamily={
          'Frank Ruhl Libre,"PT Serif","Noto Serif","Noto Serif JP","Noto Serif KR","Noto Serif SC","Noto Serif TC",serif'
        }
        color='white'
        fontWeight={'400'}
        fontSize={["2.5rem", "2.5rem", "3rem", "4rem", "4.5rem", "4.5rem"]}
      >
        Ready. And go.
      </Heading>
      <Button
        letterSpacing={"1px"}
        marginTop={"1rem"}
        textTransform={"uppercase"}
        colorScheme={"orange"}
        h='2.2rem'
      >
        shop new releases
      </Button>
    </Box>
  );
}
