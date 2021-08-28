import React from "react";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCardHidden }) => {
  return (
    <div className="cart_icon" onClick={toggleCardHidden}>
      <ShoppingIcon className="shopping_icon" />
      <span className="item_count">0</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
