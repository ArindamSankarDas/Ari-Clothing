import React from "react";

import { CustomButtonContainer } from "./custom-button.styles";

const Button = ({ children, ...props }) => {
  return <CustomButtonContainer {...props}>{children}</CustomButtonContainer>;
};

export default Button;
