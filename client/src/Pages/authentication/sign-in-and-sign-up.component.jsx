import React from "react";

import { AuthenticationContainer } from "./sign-in-and-sign-up.styles";

import SignIn from "../../Components/sign-in/sign-in.component";
import SignUp from "../../Components/sign-up/sign-up.component";

const SignInAndSignUpPage = () => {
  return (
    <AuthenticationContainer>
      <SignIn />
      <SignUp />
    </AuthenticationContainer>
  );
};

export default SignInAndSignUpPage;
