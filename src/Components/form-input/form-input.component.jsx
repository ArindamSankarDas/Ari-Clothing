import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="input_group">
      <input
        className="form_input"
        onChange={handleChange}
        {...otherProps}
        autoComplete="off"
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length === 0 ? "" : "shrink"
          } form_input_label`}
        >
          {label.toUpperCase()}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
