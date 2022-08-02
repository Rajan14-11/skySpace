import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Checkout.css";

import CurrencyFormat from "react-currency-format";
import CheckoutSteps from "./CheckoutSteps";
import { Country, State } from "country-state-city";

const Checkout = () => {
  let quantity = 0;
const validEmailRegex =
  RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

  let history = useNavigate()

  const [allproducts, setAllproducts] = useState([]);
const[name,setName] = useState("")
const[email,setEmail] = useState("")
const[mobileno,setMobileNo] = useState("")
const[country,setCountry] = useState("")
const[state,setState] = useState("")
const[address,setAddress] = useState("")
const[city,setCity] = useState("")
const[zipcode,setZipCode] = useState("")
  const [alert ,setAlert] = useState({alert:false,error:''})

  useEffect(() => {
    const getproducts = async () => {
      try {
        let result = await fetch(
          "https://theskyaural.herokuapp.com/mobileDetailsPost"
        );
        let data = await result.json();

        setAllproducts(data);

        {
          allproducts &&
            allproducts.map((quantity, item) => {
              return (quantity += parseInt(item.quantity));
            });
        }
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

 const handlePlaceOrder =(e)=>{
   if (email.includes("@") == false)
     setAlert({ alert: true, error: "Enter Correct Email-id" });
   else if (mobileno.length != 10)
     setAlert({ alert: true, error: "Phone Number should be 10 digit" });
   else history("/ordercomplete", { replace: true });

 }

  return (
    <div style={{backgroundColor:'white',padding:'20px 0'}}>
      <CheckoutSteps activeStep={1} />
      <div className="checkout_container">
        <div className="checkout_shipping_details">
{alert.alert &&

    <div class =  'alert alert-warning alert-dismissible fade show' role="alert">
      <strong>Error!</strong> {
        alert.error
      }
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
}


          <div className="shipping_row">
            <div className="shipping_col-75">
              <div className="shipping_container">
                <form onSubmit={(e)=>handlePlaceOrder(e)}>
                  <div className="shipping_row">
                    <div className="shipping_col-50">
                      <h3 className="billingadd">Billing Address</h3>
                      <label className="shipping_label" htmlFor="fname">
                        <i className="fa fa-user"></i> Full Name
                      </label>
                      <input className="shipping_input"
                        value={name}
                        type="text"
                        id="fname"
                        name="firstname"
                        placeholder="John M. Doe"
                        onChange={(e) =>
                          setName(e.target.value)
                        }
                      />
                      <label className="shipping_label" htmlFor="email">
                        <i className="fa fa-envelope"></i> Email
                      </label>
                      <input className="shipping_input"
                        type="text"
                        id="email"
                        name="email"
                        placeholder="john@example.com"
                        value={email}
                        onChange={(e) =>
                          setEmail( e.target.value)
                        }
                      />
                      <label className="shipping_label" htmlFor="mobileno.">
                        <i className="fa fa-phone"></i> Mobile No.
                      </label>
                      <input className="shipping_input"
                        type="text"
                        id="mobileno."
                        name="mobileno."
                        placeholder="xxxxxxxxxx"
                        value={mobileno}
                        onChange={(e) =>
                          setMobileNo(e.target.value)
                        }
                      />
                      <label className="shipping_label" htmlFor="country">
                        <i className="fa fa-globe"></i> Country
                      </label>
                      <select
                      className="shipping_select"
                        required
                        value={country}
                        onChange={(e) =>
                          setCountry( e.target.value )
                        }
                      >
                        <option value="">Country</option>
                        {Country &&
                          Country.getAllCountries().map((item) => (
                            <option key={item.isoCode} value={item.isoCode}>
                              {item.name}
                            </option>
                          ))}
                      </select>

                      {country && (
                        <>
                          <label className="shipping_label" htmlFor="state">
                            <i className="fa fa-satellite"></i> State
                          </label>
                          <select
                          className="shipping_select"
                            required
                            value={state}
                            onChange={(e) =>
                              setState( e.target.value )
                            }
                          >
                            <option value="">State</option>
                            {State &&
                              State.getStatesOfCountry(
                                country
                              ).map((item) => (
                                <option key={item.isoCode} value={item.isoCode}>
                                  {item.name}
                                </option>
                              ))}
                          </select>
                        </>
                      )}

                      <label className="shipping_label" htmlFor="adr">
                        <i className="fa fa-address-card"></i> Address
                      </label>
                      <input className="shipping_input"
                        type="text"
                        id="adr"
                        name="address"
                        placeholder="542 W. 15th Street"
                        value={address}
                        onChange={(e) =>
                          setAddress( e.target.value )
                        }
                      />
                      <label className="shipping_label" htmlFor="city">
                        <i className="fa fa-institution"></i> Town/City
                      </label>
                      <input className="shipping_input"
                        type="text"
                        id="city"
                        name="city"
                        placeholder="New York"
                        value={city}
                        onChange={(e) =>
                          setCity( e.target.value )
                        }
                      />

                      <label className="shipping_label" htmlFor="zip">
                        <i className="fa fa-map-pin"></i> Zip
                      </label>
                      <input className="shipping_input"
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                        value={zipcode}
                        onChange={(e) =>
                          setZipCode( e.target.value )
                        }
                      />
                    </div>
                  </div>
                  <label className="shipping_label">
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
                <input className="shipping_input" type="checkbox" />
                <span>Upi</span>
              </div>
              <div className="checkout_payment_method">
                <input className="shipping_input" type="checkbox" />
                <span>wallet</span>
              </div>
              <div className="checkout_payment_method">
                <input className="shipping_input" type="checkbox" />
                <span>netbanking</span>
              </div>
              <div className="checkout_payment_method">
                <input className="shipping_input" type="checkbox" />
                <span>cards</span>
              </div>
            </div>

            <hr />
            {/* <Link to={"/ordercomplete"}> */}
              <div className="placeorder_button">
                <button onClick={(e)=>handlePlaceOrder()}>Place order</button>
              </div>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
