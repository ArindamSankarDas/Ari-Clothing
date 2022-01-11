import React from "react";
import { SignUpDiv } from "./sign-up.styles";

import Button from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";

import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleClick = async (event) => {
    event.preventDefault();
    const { signUpStart } = this.props;

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("the passwords don't match");
      return;
    } else {
      signUpStart({ displayName, email, password });
    }
  };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <SignUpDiv>
        <h2>Don't have an Account</h2>
        <span>Sign up with your email and password</span>

        <form id="sign_Up_Form" onSubmit={this.handleClick}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required
          />

          <Button type="submit">Sign Up</Button>
        </form>
      </SignUpDiv>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredetials) => dispatch(signUpStart(userCredetials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
