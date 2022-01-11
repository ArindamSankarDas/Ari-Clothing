import React from "react";
import { SignInDiv, CustomButtons } from "./sign-in.styles";

import FormInput from "../form-input/form-input.component";
import Button from "../custom-button/custom-button.component";

import { connect } from "react-redux";
import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { emailSignInStart } = this.props;
    const { email, password } = this.state;

    emailSignInStart(email, password);
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;

    return (
      <SignInDiv>
        <h2>Already have an Account</h2>
        <span>SignIn with your email and password</span>

        <form id="form" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            autoComplete="off"
            required
          />
          <FormInput
            type="password"
            name="password"
            handleChange={this.handleChange}
            value={this.state.password}
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
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
