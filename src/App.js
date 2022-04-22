import "./App.css";
import { Route, Routes } from "react-router-dom";
import SplashPage from "./SplashPage";
import ProductPage from "./ProductPage";
import CartPage from "./CartPage";
import { useState } from "react";

function App() {
  const [cartedItems, addToCart] = useState([]);
  const [prodArrIndex, setProdArrIndex] = useState(0);

  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <SplashPage prodArrIndex={prodArrIndex} cartedItems={cartedItems} />
          }
        />
        <Route
          exact
          path="/products"
          element={
            <ProductPage
              cart={cartedItems}
              addToCart={addToCart}
              prodArrIndex={prodArrIndex}
              changeProductArr={setProdArrIndex}
            />
          }
        />
        <Route
          exact
          path="/cart"
          element={<CartPage cart={cartedItems} addToCart={addToCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
