import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JdxaXSHPga4mStCs9enM6jUyT0bgBeIF5ITwm7K7zTceFaoNy7LLGttuZVnKCHeM4yQKGk3fFOdl5Le9TPol1pQ006ComYCCc";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="ARI Clothing Ltd."
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
      currency="USD"
      billingAddress
      shippingAddress
    />
  );
};

export default StripeCheckoutButton;
