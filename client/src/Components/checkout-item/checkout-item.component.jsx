import React from "react";
import {
  CheckoutItemDiv,
  ImageContainer,
  NameSpan,
  AmountSpan,
  ContentSpan,
  ClearSpan,
} from "./checkout-item.styles";

import { useDispatch } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;

  const dispatch = useDispatch();
  const clearItemFromCartHandler = (item) => dispatch(clearItemFromCart(item));
  const addItemHandler = (item) => dispatch(addItem(item));
  const removeItemHandler = (item) => dispatch(removeItem(item));

  return (
    <CheckoutItemDiv>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>

      <NameSpan>{name}</NameSpan>
      <ContentSpan>
        <div onClick={() => removeItemHandler(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItemHandler(cartItem)}>&#10095;</div>
      </ContentSpan>
      <AmountSpan>{quantity * price}</AmountSpan>
      <ClearSpan onClick={() => clearItemFromCartHandler(cartItem)}>
        &#10006;
      </ClearSpan>
    </CheckoutItemDiv>
  );
};

export default CheckoutItem;
