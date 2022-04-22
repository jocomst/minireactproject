import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import MainDisplay from "./Components/Product page/MainDisplay";
import { useState } from "react";

const ProductPage = ({ cart, addToCart, prodArrIndex, changeProductArr }) => {
  const [selectedProduct, setProduct] = useState(0);

  return (
    <>
      <NavBar cartedItems={cart} />
      <MainDisplay
        selectedProduct={selectedProduct}
        setProduct={setProduct}
        cart={cart}
        addToCart={addToCart}
        prodArrIndex={prodArrIndex}
        changeProductArr={changeProductArr}
      />
      <Footer />
    </>
  );
};

export default ProductPage;
