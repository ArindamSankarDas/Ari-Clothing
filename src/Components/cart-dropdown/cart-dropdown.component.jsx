import React from "react";
import "./cart-dropdown.styles.scss";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCardHidden } from "../../redux/cart/cart.actions";

import { withRouter } from "react-router-dom";

import Button from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <div className="cart_dropdown">
      <div className="cart_items" />

      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty_message">Your cart is empty</span>
      )}
      <Button
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCardHidden());
        }}
      >
        GO TO CHECKOUT
      </Button>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
