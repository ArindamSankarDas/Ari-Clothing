import React from "react";
import {
  CheckoutItemDiv,
  ImageContainer,
  NameSpan,
  AmountSpan,
  ContentSpan,
  ClearSpan,
} from "./checkout-item.styles";

import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem,
} from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CheckoutItemDiv>
      <ImageContainer>
        <img src={imageUrl} alt="item" />
      </ImageContainer>

      <NameSpan>{name}</NameSpan>
      <ContentSpan>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </ContentSpan>
      <AmountSpan>{quantity * price}</AmountSpan>
      <ClearSpan onClick={() => clearItem(cartItem)}>&#10006;</ClearSpan>
    </CheckoutItemDiv>
  );
};

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
