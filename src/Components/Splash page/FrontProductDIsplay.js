import React from "react";
import Product from "../Product";
import { products } from "../products/productBoxes";
import "C:\\Users\\user\\Downloads\\eshopreact\\src\\App.css";

const FrontProductDisplay = ({ prodArrIndex }) => {
  return (
    <>
      <div className="front-display">
        {products[prodArrIndex].map((el, i) => {
          return (
            <Product
              key={i}
              img={el.img}
              desc={el.description}
              price={el.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default FrontProductDisplay;
