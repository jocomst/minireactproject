import React from "react";

const CartItem = ({ desc, price }) => {
  return (
    <>
      <div className="single-item">
        <h4>{desc}</h4>
        <h4>{price}</h4>
      </div>
    </>
  );
};

export default CartItem;
