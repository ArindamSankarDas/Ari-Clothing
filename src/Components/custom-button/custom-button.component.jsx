import React from "react";
import "./custom-button.styles.scss";
const Button = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`custom_button ${isGoogleSignIn ? "google_sign_in" : ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
