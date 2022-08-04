import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";

const PlaceOrderCard = () => {
  return (
    <Flex  w={"420px"}>
      <Stack w={"100%"} spacing={8} mx={"auto"} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id='email' isRequired>
              <FormLabel>Email adress</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl id='firstName' isRequired>
              <FormLabel>First Name</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl id='lastName' isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl id='phone' isRequired>
              <FormLabel>Telephone</FormLabel>
              <Input type='Number' />
            </FormControl>
            <FormControl id='adress' isRequired>
              <FormLabel>Delivery adress</FormLabel>
              <Input type='text' />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText='Submitting'
                size='lg'
                bg={"blue.400"}
                color={"white"}
                letterSpacing='2px'
                _hover={{
                  bg: "blue.500",
                }}
              >
                Razorpay
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default PlaceOrderCard;
