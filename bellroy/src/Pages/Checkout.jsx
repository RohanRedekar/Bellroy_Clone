import { Box, Flex, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import CheckoutNav from "../Components/Checkout/CheckoutNav";
import { useDispatch } from "react-redux";
import { fetchCart } from "../Redux/Products/action";
import CartInfo from "../Components/Checkout/CartInfo";
import { Footer } from "../Components/Footer/Footer";
import PlaceOrderCard from "../Components/Checkout/PlaceOrderCard";

const Checkout = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    dispatch(fetchCart(cartItems));
  }, [dispatch]);

  return (
    <Box backgroundColor={"rgb(238,238,238)"}>
      <CheckoutNav />
      <Stack
        marginTop={"2rem"}
        marginBottom='2rem'
        justifyContent={"center"}
        direction={["column", "column", "column", "row"]}
        spacing={6}
      >
        <Flex justifyContent={"center"}>
          <CartInfo />
        </Flex>

        <Flex justifyContent={"center"}>
          <PlaceOrderCard />
        </Flex>
      </Stack>
      <Footer />
    </Box>
  );
};

export default Checkout;
