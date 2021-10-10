import React from "react";

import {
  InputGroupContainer,
  FormInputContainer,
  FormInputLabel,
} from "./form-input.styles";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <InputGroupContainer>
      <FormInputContainer
        className="form_input"
        onChange={handleChange}
        {...otherProps}
        autoComplete="off"
      />
      {label ? (
        <FormInputLabel className={otherProps.value.length ? "shrink" : ""}>
          {label.toUpperCase()}
        </FormInputLabel>
      ) : null}
    </InputGroupContainer>
  );
};

export default FormInput;
