import React from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";
import Button from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import { SignInDiv, CustomButtons } from "./sign-in.styles";
class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_email: "",
      user_password: "",
    };
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    const { user_email, user_password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(user_email, user_password);
      this.setState({ user_email: "", user_password: "" });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInDiv>
        <h2>Already have an Account</h2>
        <span>SignIn with your email and password</span>

        <form id="form" onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="user_email"
            handleChange={this.handleChange}
            value={this.state.user_email}
            label="email"
            autoComplete="off"
            required
          />
          <FormInput
            type="password"
            name="user_password"
            handleChange={this.handleChange}
            value={this.state.user_password}
            label="password"
            autoComplete="off"
            required
          />

          <CustomButtons>
            <Button type="submit">Sign In</Button>
            <Button onClick={signInWithGoogle} isGoogleSignIn={true}>
              {""}Sign In With Google{""}
            </Button>
          </CustomButtons>
        </form>
      </SignInDiv>
    );
  }
}

export default SignIn;
