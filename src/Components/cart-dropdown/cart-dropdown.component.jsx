import React from "react";

import {
  CartDropdownContainer,
  ButtonContainer,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCardHidden } from "../../redux/cart/cart.actions";

import { withRouter } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = ({ cartItems, history, dispatch }) => {
  return (
    <CartDropdownContainer>
      <CartItemsContainer />

      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      )}
      <ButtonContainer
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCardHidden());
        }}
      >
        GO TO CHECKOUT
      </ButtonContainer>
    </CartDropdownContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
