import React from "react";
import "./checkoutItem.scss";

const CheckoutItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="checkout-page">
    <img src={imageUrl} alt="item" />
    <div className="checkout-details">
      <h1>{name}</h1>
      <span>{price}</span>
    </div>
  </div>
);
export default CheckoutItem;
