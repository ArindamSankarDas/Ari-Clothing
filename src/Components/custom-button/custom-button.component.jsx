import React from "react";
import "./custom-button.styles.scss";
const Button = ({ children, ...otherProps }) => {
  return (
    <button className="custom_button" {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
