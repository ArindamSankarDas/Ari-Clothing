import React from "react";
import Button from "../custom-button/custom-button.component";
import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  return (
    <div className="cart_dropdown">
      <div className="cart_items" />
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
