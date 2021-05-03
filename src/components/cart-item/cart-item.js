import React from "react";
import "./cart-item.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CustomButton from "../../components/custom-button/custom-button";
import CartItem from "../cart.items.component/cart.items.component";

const Cart = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <Link to="Checkout">
      {" "}
      <CustomButton>Go To Check Out</CustomButton>
    </Link>
  </div>
);
const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default connect(mapStateToProps)(Cart);
