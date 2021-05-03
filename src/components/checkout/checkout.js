import React from "react";
import "./checkout.scss";
import { connect } from "react-redux";
import CheckoutItem from "../checkoutItem/checkoutItem";

const CheckOut = ({ cartItems }) => (
  <div className="checkout">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CheckOut);
