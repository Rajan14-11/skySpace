import React from 'react'
import CheckoutSteps from '../Checkout/CheckoutSteps'

function OrderComplete() {
  return (
    <>
      <CheckoutSteps activeStep={2} />
      <div>OrderComplete</div>
    </>
  );
}

export default OrderComplete