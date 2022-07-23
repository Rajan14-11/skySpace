import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutSteps from '../Checkout/CheckoutSteps'
import "./ordercomplete.css"
function OrderComplete() {
  return (
    <>
      <CheckoutSteps activeStep={2} />
        <div className="orderSuccess">
        <i class="fa fa-solid fa-circle-check success_icon"></i>

          <p className='success_show'>Your Order has been Placed successfully </p>
          <Link to="/orders">View Orders</Link>

      </div>
    </>
  );
}

export default OrderComplete