import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/header/header.component";
import { auth } from "./firebase/firebase.utils";
import SignIn_SignUp_Page from "./Pages/authentication/sign-in-and-sign-up.component";
import HomePage from "./Pages/home/HomePage.component";
import ShopPage from "./Pages/shop/shop.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signIn" component={SignIn_SignUp_Page} />
        </Switch>
      </div>
    );
  }
}

export default App;
