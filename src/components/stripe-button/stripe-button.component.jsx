import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const puiblishableKey =
    'pk_test_51KaOVDAfCbEJJEFmsLa357JOtlaGFnNDGKc7zm8VikoOOXDxkzHsNpeu1Jyv90ujdefjlU5064L4JWbhgD4aEUbx00zpCOMrsk';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing LTD. '
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your total is ${price}$`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={puiblishableKey}
    />
  );
};

export default StripeCheckoutButton;
