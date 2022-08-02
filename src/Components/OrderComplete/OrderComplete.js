import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutSteps from '../Checkout/CheckoutSteps'
import "./ordercomplete.css"
function OrderComplete() {
  return (
    <div style={{backgroundColor:'white' , padding:'20px', height:'100vh'}}>
      <CheckoutSteps activeStep={2} />
        <div className="orderSuccess">
        <i class="fa fa-solid fa-circle-check success_icon"></i>

          <p className='success_show'>Your Order has been Placed successfully </p>
          <Link to="/orders" style={{width:200, padding:20,fontSize:20}}>View Orders</Link>

      </div>
    </div>
  );
}

export default OrderComplete