import React from "react";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/cart.actions";
import { CartIconDiv, ShoppingIcon } from "./cart-icon.styles";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCardHidden, itemsCount }) => {
  return (
    <CartIconDiv onClick={toggleCardHidden}>
      <ShoppingIcon />
      <span>{itemsCount}</span>
    </CartIconDiv>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
