import React, { useState } from "react";

const CartPayment = () => {
  const [hasPaid, setPaid] = useState(false);
  if (!hasPaid) {
    return (
      <>
        <hr></hr>
        <h3 className="product-box">Payment Information</h3>
        <div className="payment-box">
          <div className="info-box">
            <input className="boxes" type="text" placeholder="Name" />
            <input className="boxes" type="text" placeholder="Card Info" />
          </div>
          <div className="info-box">
            <input className="boxes" type="text" placeholder="Address" />
            <button>Submit</button>
          </div>
        </div>
      </>
    );
  }
};

export default CartPayment;
