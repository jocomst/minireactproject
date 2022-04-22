import React from "react";
import CartItem from "./CartItem";
import CartPayment from "./CartPayment";
import { useState } from "react";

const Cart = ({ cart, addToCart }) => {
  if (cart.length > 0) {
    return (
      <>
        <div className="title">
          <h2>Cart</h2>
        </div>
        <div className="cart-container">
          <h3 className="product-box">Cart items</h3>
          {cart.map((el, i) => {
            return (
              <>
                <CartItem key={i} desc={el.description} price={el.price} />
              </>
            );
          })}
          <hr></hr>
          <h3 className="product-box">Price Info</h3>
          <div className="sub-cost">
            <h4>
              <strong>Sub-total</strong>
            </h4>
            <h4>
              <strong>
                $
                {cart
                  .map((el) => el.cartPrice)
                  .reduce((accum, cur) => accum + cur)}
              </strong>
            </h4>
          </div>
          <div className="sub-cost">
            <h4>
              <strong>Total</strong>
            </h4>
            <h4>
              <strong>
                $
                {(
                  cart
                    .map((el) => el.cartPrice)
                    .reduce((accum, cur) => accum + cur) *
                    0.075 +
                  cart
                    .map((el) => el.cartPrice)
                    .reduce((accum, cur) => accum + cur)
                ).toFixed(2)}
              </strong>
            </h4>
          </div>
          <CartPayment />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="title">
          <h2>Cart</h2>
        </div>
        <h2 className="home-title">Cart is empty!</h2>
      </>
    );
  }
};

export default Cart;
