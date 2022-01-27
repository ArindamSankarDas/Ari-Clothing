import React, { useState } from "react";
import { SignUpDiv } from "./sign-up.styles";

import Button from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleClick = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("the passwords don't match");
      return;
    } else {
      signUpStart({ displayName, email, password });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignUpDiv>
      <h2>Don't have an Account</h2>
      <span>Sign up with your email and password</span>

      <form id="sign_Up_Form" onSubmit={handleClick}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleChange}
          label="Confirm Password"
          required
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </SignUpDiv>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredetials) => dispatch(signUpStart(userCredetials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
