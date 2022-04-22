import React from "react";
import { Link } from "react-router-dom";

const Product = ({ img, desc, price, handler }) => {
  return (
    <div className="product-box">
      <Link to="/products">
        <img src={img} onClick={(e) => handler()} />
      </Link>
      <p>{desc}</p>
      <p>{price}</p>
    </div>
  );
};

export default Product;
