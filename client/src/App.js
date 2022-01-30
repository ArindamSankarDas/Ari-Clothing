import React, { useEffect } from "react";

import { selectCurrentUser } from "./redux/user/user.selectors";

import { useSelector, useDispatch } from "react-redux";
import { checkUserSession } from "./redux/user/user.actions";

import { Switch, Route, Redirect } from "react-router-dom";

import ShopPage from "./Pages/shop/shop.component";
import HomePage from "./Pages/home/HomePage.component";
import Header from "./Components/header/header.component";
import CheckoutPage from "./Pages/checkout/checkout.component";
import SignInAndSignUpPage from "./Pages/authentication/sign-in-and-sign-up.component";

const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkOut" component={CheckoutPage} />
        <Route
          exact
          path="/signIn"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
          }
        />
      </Switch>
    </div>
  );
};

export default App;
