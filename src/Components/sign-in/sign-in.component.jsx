import React from "react";
import Button from "../custom-button/custom-button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user_email: "",
      user_password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ user_email: "", user_password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="signIn">
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
          <Button type="submit">Sign In</Button>
        </form>
      </div>
    );
  }
}

export default SignIn;
