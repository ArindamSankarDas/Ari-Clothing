import React, { useState } from "react";
import { SignInDiv, CustomButtons } from "./sign-in.styles";

import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    emailSignInStart(email, password);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInDiv>
      <h2>Already have an Account</h2>
      <span>SignIn with your email and password</span>

      <form id="form" onSubmit={handleSubmit}>
        <FormInput
          type="email"
          name="email"
          handleChange={handleChange}
          value={email}
          label="email"
          autoComplete="off"
          required
        />
        <FormInput
          type="password"
          name="password"
          handleChange={handleChange}
          value={password}
          label="password"
          autoComplete="off"
          required
        />

        <CustomButtons>
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn={true}
          >
            Sign In With Google
          </Button>
        </CustomButtons>
      </form>
    </SignInDiv>
  );
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
