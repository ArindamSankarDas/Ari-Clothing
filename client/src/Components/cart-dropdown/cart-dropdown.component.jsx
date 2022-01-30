import React from "react";

import {
  CartDropdownContainer,
  ButtonContainer,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./cart-dropdown.styles";

import { useHistory } from "react-router-dom";

import { selectCartItems } from "../../redux/cart/cart.selectors";

import { useSelector, useDispatch } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/cart.actions";

import CartItem from "../cart-item/cart-item.component";

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const dispatch = useDispatch();
  const history = useHistory();

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

export default CartDropdown;
