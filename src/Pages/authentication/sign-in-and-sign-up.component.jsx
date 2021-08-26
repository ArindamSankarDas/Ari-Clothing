import React from "react";
import SignIn from "../../Components/sign-in/sign-in.component";
import SignUp from "../../Components/sign-up/sign-up.component";
import "./sign-in-and-sign-up.styles.scss";

const SignIn_SignUp_Page = () => {
  return (
    <div className="authentication">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignIn_SignUp_Page;
