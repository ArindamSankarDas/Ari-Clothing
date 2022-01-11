import React from "react";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  HeaderTwo,
} from "./header.styles";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";

import { connect } from "react-redux";
import { signOutStart } from "../../redux/user/user.actions";

import { createStructuredSelector } from "reselect";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = ({ currentUser, hidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">
          <HeaderTwo>SHOP</HeaderTwo>
        </OptionLink>
        <OptionLink to="/contact">
          <HeaderTwo>CONTACT</HeaderTwo>
        </OptionLink>
        {currentUser !== null ? (
          <OptionLink as="div" onClick={signOutStart}>
            <HeaderTwo>SIGN OUT</HeaderTwo>
          </OptionLink>
        ) : (
          <OptionLink to="/signIn">
            <HeaderTwo>SIGN IN</HeaderTwo>
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
