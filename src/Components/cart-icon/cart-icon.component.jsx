import React from "react";
import { connect } from "react-redux";
import { toggleCardHidden } from "../../redux/cart/cart.actions";
import { ReactComponent as ShoppingIcon } from "../../assets/images/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCardHidden, itemsCount }) => {
  return (
    <div className="cart_icon" onClick={toggleCardHidden}>
      <ShoppingIcon className="shopping_icon" />
      <span className="item_count">{itemsCount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCardHidden: () => dispatch(toggleCardHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
