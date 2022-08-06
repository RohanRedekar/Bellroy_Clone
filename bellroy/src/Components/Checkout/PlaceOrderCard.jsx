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
// import axios from "axios";
// import { Link as RouterLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { useEffect } from "react";
import { useState } from "react";
// import { useSelector } from "react-redux";

const PlaceOrderCard = () => {
  const navigate = useNavigate();
  // const cart = useSelector((store) => store.productData.cart);
  // const [subTotal, setSubtotal] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    adress: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const checkoutHandler = () => {
    navigate("/success");
  };

  // useEffect(() => {
  //   let sum = 0;
  //   if (cart !== undefined) {
  //     for (let i = 0; i < cart.length; i++) {
  //       sum += cart[i].price * cart[i].count;
  //     }
  //   }
  //   setSubtotal(sum);
  // }, [cart]);

  // const checkoutHandler = async (amount, formData) => {
  //   let { firstName, lastName, email, phone, adress } = formData;
  //   const {
  //     data: { key },
  //   } = await axios.get("http://localhost:3001/payment/getkey");

  //   const {
  //     data: { order },
  //   } = await axios.post("http://localhost:3001/payment/checkout", {
  //     amount,
  //   });

  //   const options = {
  //     key,
  //     amount: order.amount,
  //     currency: "INR",
  //     name: "Bellroy",
  //     description: "Checkout payment",
  //     image:
  //       "https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/v1427935400/kickbh3rxpxwt9ibapnw.png",
  //     order_id: order.id,
  //     callback_url: "http://localhost:3001/payment/paymentverification",
  //     prefill: {
  //       name: `${firstName}${" "}${lastName}`,
  //       email: email,
  //       contact: phone,
  //       adress: adress,
  //     },
  //     notes: {
  //       address: "Razorpay Corporate Office",
  //     },
  //     theme: {
  //       color: "#3399cc",
  //     },
  //   };
  //   const razor = new window.Razorpay(options);
  //   razor.open();
  // };

  return (
    <Flex w={"420px"}>
      <Stack w={"100%"} spacing={8} mx={"auto"} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <form onSubmit={checkoutHandler}>
              <FormControl id='email' isRequired>
                <FormLabel>Email adress</FormLabel>
                <Input onChange={handleChange} name='email' type='text' />
              </FormControl>

              <FormControl id='firstName' isRequired>
                <FormLabel>First Name</FormLabel>
                <Input onChange={handleChange} name='firstName' type='text' />
              </FormControl>

              <FormControl id='lastName' isRequired>
                <FormLabel>Last Name</FormLabel>
                <Input onChange={handleChange} name='lastName' type='text' />
              </FormControl>

              <FormControl id='phone' isRequired>
                <FormLabel>Telephone</FormLabel>
                <Input onChange={handleChange} name='phone' type='Number' />
              </FormControl>

              <FormControl id='adress' isRequired>
                <FormLabel>Delivery adress</FormLabel>
                <Input onChange={handleChange} name='adress' type='text' />
              </FormControl>

              <Stack textAlign={"center"} spacing={10} pt={2}>
                <Button
                  type='submit'
                  size='lg'
                  bg={"blue.400"}
                  color={"white"}
                  letterSpacing='2px'
                  _hover={{
                    bg: "blue.500",
                  }}
                  // onClick={() => checkoutHandler(subTotal, formData)}
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default PlaceOrderCard;
