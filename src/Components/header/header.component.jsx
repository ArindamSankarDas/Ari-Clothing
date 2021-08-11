import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import "./header.styles.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo_container" to="/">
        <Logo className="logo" />
      </Link>

      <div className="options">
        <Link className="option" to="/shop">
          <h2>SHOP</h2>
        </Link>
        <Link className="option" to="/shop">
          <h2>CONTACT</h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;
