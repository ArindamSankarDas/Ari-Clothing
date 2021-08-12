import React from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/header/header.component";
import SignIn_SignUp_Page from "./Pages/authentication/sign-in-and-sign-up.component";
import HomePage from "./Pages/home/HomePage.component";
import ShopPage from "./Pages/shop/shop.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signIn" component={SignIn_SignUp_Page} />
      </Switch>
    </div>
  );
}

export default App;
