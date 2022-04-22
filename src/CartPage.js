import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Cart from "./Components/Cart Page/Cart";
import CartPayment from "./Components/Cart Page/CartPayment";
import React from "react";

const CartPage = ({ cart, addToCart }) => {
  return (
    <>
      <NavBar cartedItems={cart} />
      <Cart cart={cart} addToCart={addToCart} />
      <Footer />
    </>
  );
};

export default CartPage;
