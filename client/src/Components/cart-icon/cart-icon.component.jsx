import React from "react";
import { CartIconDiv, ShoppingIcon } from "./cart-icon.styles";

import { useSelector, useDispatch } from "react-redux";

import { toggleCardHidden } from "../../redux/cart/cart.actions";

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";


const CartIcon = () => {
  const dispatch = useDispatch();
  const itemsCount = useSelector(selectCartItemsCount);
  const toggleCardHiddenClickHandler = () => dispatch(toggleCardHidden());

  return (
    <CartIconDiv onClick={toggleCardHiddenClickHandler}>
      <ShoppingIcon />
      <span>{itemsCount}</span>
    </CartIconDiv>
  );
};

export default CartIcon;
