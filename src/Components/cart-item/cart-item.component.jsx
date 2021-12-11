import React from "react";
import { CartItemDiv, ItemDetailsDiv } from "./cart-item.styles";

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <CartItemDiv>
      <img src={imageUrl} alt="item" />
      <ItemDetailsDiv>
        <span>{name}</span>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetailsDiv>
    </CartItemDiv>
  );
};

export default CartItem;
