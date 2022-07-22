import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"
import "./Checkout.css";

import CurrencyFormat from "react-currency-format";
import CheckoutSteps from "./CheckoutSteps";

const Checkout = () => {

  let quantity = 0;
  useEffect(() => {
    const getproducts = async () => {
      try {
        let result = await fetch(
          "https://theskyaural.herokuapp.com/mobileDetailsPost"
        );
        let data = await result.json();

        setAllproducts(data);
        console.log(allproducts);

       { allproducts &&
         allproducts.map(
           (quantity, item) =>{ return (quantity += parseInt(item.quantity))}
         )}
      } catch (error) {
        console.log(error);
      }
    };
    return () => {
      getproducts();
    };
  }, []);

  const getTotal = () => {
    return allproducts?.reduce(
      (amount, item) => parseFloat(item.mobilePrice1 * item.quantity) + amount,
      0
    );
  };


  const [allproducts, setAllproducts] = useState([]);

  return (
    <>
      <CheckoutSteps activeStep={1} />
      <div className="checkout_container">
        <div className="checkout_shipping_details">
          <div className="shipping_row">
            <div className="shipping_col-75">
              <div className="shipping_container">
                <form action="/action_page.php">
                  <div className="shipping_row">
                    <div className="shipping_col-50">
                      <h3 className="billingadd">Billing Address</h3>
                      <label htmlFor="fname">
                        <i className="fa fa-user"></i> Full Name
                      </label>
                      <input
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="John M. Doe"
                      />
                      <label htmlFor="email">
                        <i className="fa fa-envelope"></i> Email
                      </label>
                      <input
                        type="text"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                      />
                      <label htmlFor="email">
                        <i className="fa fa-phone"></i> Mobile No.
                      </label>
                      <input
                        type="text"
                        id="mobileno."
                        name="mobileno."
                        placeholder="xxxxxxxxxx"
                      />
                      <label htmlFor="adr">
                        <i className="fa fa-address-card"></i> Address
                      </label>
                      <input
                        type="text"
                        id="adr"
                        name="address"
                        placeholder="542 W. 15th Street"
                      />
                      <label htmlFor="city">
                        <i className="fa fa-institution"></i> Town/City
                      </label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                      />

                      <label htmlFor="state">State</label>
                      <input
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />

                      <label htmlFor="zip">Zip</label>
                      <input
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                  <label>
                    <input
                      type="checkbox"
                      defaultChecked={true}
                      name="sameadr"
                    />{" "}
                    Shipping address same as billing
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout_summary">
          <div className="summary_content">
            <div className="checkout_heading">
              <h3 className="checkout_yourorder">your order</h3>
              <h4 className="checkout_">product</h4>
            </div>
            <hr />
            {allproducts &&
              allproducts.map((product) => {
                return (
                  <>
                    <div
                      className="checkout_product_container"
                      key={product._id}
                    >
                      <div className="checkout_product">
                        <span className="checkout_product_details">
                          {product.mobileName}{" "}
                          <span>quantity = {product.quantity}</span>
                        </span>
                        <span>${product.mobilePrice1 * product.quantity}</span>
                      </div>
                      <hr></hr>
                    </div>
                  </>
                );
              })}
            <div className="checkout_subtotal">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>
                      Subtotal ({quantity} items)
                      <span>{value}</span>
                    </h3>
                  </>
                )}
                decimalScale={2}
                value={getTotal(allproducts)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>

            <hr />

            <div className="checkout_total">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <h3>
                      Total
                      <span>{value}</span>
                    </h3>
                  </>
                )}
                decimalScale={2}
                value={getTotal(allproducts)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </div>

            <hr />

            <div className="checkout_payment_methods">
              <h3>Payment Methods</h3>
              <div className="checkout_payment_method">
                <input type="checkbox" />
                <span>Upi</span>
              </div>
              <div className="checkout_payment_method">
                <input type="checkbox" />
                <span>wallet</span>
              </div>
              <div className="checkout_payment_method">
                <input type="checkbox" />
                <span>netbanking</span>
              </div>
              <div className="checkout_payment_method">
                <input type="checkbox" />
                <span>cards</span>
              </div>
            </div>

            <hr />
            <Link to={"/ordercomplete"}>
              <div className="placeorder_button">
                <button>Place order</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
