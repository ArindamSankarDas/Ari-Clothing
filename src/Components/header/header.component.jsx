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

import { useSelector, useDispatch } from "react-redux";
import { signOutStart } from "../../redux/user/user.actions";

import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";

const Header = () => {
  const hidden = useSelector(selectCartHidden);
  const currentUser = useSelector(selectCurrentUser);

  const dispatch = useDispatch();
  const signOutStartHandler = () => dispatch(signOutStart());

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
          <OptionLink as="div" onClick={signOutStartHandler}>
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

export default Header;
