import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/images/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import "./header.styles.scss";

const Header = ({ currentUser }) => {
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
        {currentUser !== null ? (
          <div className="option" onClick={() => auth.signOut()}>
            <h2>SIGN OUT</h2>
          </div>
        ) : (
          <Link className="option" to="/signIn">
            <h2>SIGN IN</h2>
          </Link>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);
