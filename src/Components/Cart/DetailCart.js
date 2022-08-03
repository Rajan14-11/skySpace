import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CheckoutSteps from "../Checkout/CheckoutSteps";
import "./DetailCart.css";

function DetailCart() {
  const [allproducts, setAllproducts] = useState([]);

  let quantity = 0;

  {
    allproducts &&
      allproducts.map((item) => {
        return (quantity += parseInt(item.quantity));
      });
  }

  useEffect(() => {
    const getproducts = async () => {
      try {
        let result = await fetch(
          "https://theskyaural.herokuapp.com/mobileDetailsPost"
        );
        let data = await result.json();
        setAllproducts(data);
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

  const removeItem = (id) => {
    let newcart = [...allproducts];
    const index = allproducts.findIndex((item) => item._id === id);
    if (index >= 0) {
      newcart.splice(index, 1);
    } else {
      console.log("err");
    }
    setAllproducts(newcart);
  };

  const increaseProductCount = (id) => {
    let updatedCart = allproducts.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: parseInt(item.quantity) + parseInt(1) };
      }
      return item;
    });

    setAllproducts(updatedCart);
  };
  const decreaseProductCount = (id) => {
    let updatedCart = allproducts.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: parseInt(item.quantity) - parseInt(1) };
      }
      return item;
    });
    setAllproducts(updatedCart);
  };

  return (
    <div
      className="main_detail_cart_container"
    >
      <CheckoutSteps activeStep={0} />
      <section className="d-flex mt-5">
        <div className="container">
          <div className="row detailcart_main">
            <div className="col-8">
              <div className="table-responsive">
                <table className="table">
                  <thead className="thead-dark">
                    <tr className="detail_cart_table_row">
                      <th
                        style={{ width: "35%", textAlign: "center" }}
                        scope="col"
                      >
                        Product
                      </th>
                      <th
                        style={{ width: "15%", textAlign: "center" }}
                        scope="col"
                      >
                        Price
                      </th>
                      <th
                        style={{ width: "35%", textAlign: "center" }}
                        scope="col"
                      >
                        Quantity
                      </th>
                      <th
                        style={{ width: "15%", textAlign: "center" }}
                        scope="col"
                      >
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allproducts &&
                      allproducts.map((product) => {
                        return (
                          <tr
                            key={product._id}
                            className="detail_cart_table_row"
                          >
                            <td style={{ width: "35%" }}>
                              <div className="main">
                                <div className="d-flex align-items-center" style={{position:'relative'}}>
                                  <img
                                    src={product.mobileImg1Link}
                                    alt="Product-1"
                                    width="75"
                                    height="75"
                                  />
                                  <i className="fa fa-solid fa-close close-icon" onClick={()=>removeItem(product._id)}></i>
                                  <div className="des">
                                    <p>{product.mobileName}</p>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td style={{ width: "15%", textAlign: "center" }}>
                              <h6>{product.mobilePrice1}</h6>
                            </td>
                            <td style={{ width: "35%" }}>
                              <div className="detailcart_counter">
                                <i
                                  className="fa-solid fa-plus"
                                  onClick={() =>
                                    increaseProductCount(product._id)
                                  }
                                ></i>
                                <input
                                  className="input-number"
                                  type="text"
                                  value={product.quantity}
                                  min="0"
                                  max="20"
                                  readOnly
                                />
                                <i
                                  className="fa-solid fa-minus"
                                  onClick={
                                    product.quantity > 1
                                      ? () => decreaseProductCount(product._id)
                                      : () => removeItem(product._id)
                                  }
                                ></i>
                              </div>
                            </td>
                            <td style={{ width: "15%", textAlign: "center" }}>
                              <h6>{product.mobilePrice1 * product.quantity}</h6>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="col-4 checkout_main_div">
              <div className="checkout">
                <ul>
                  <li className="Order Summary">
                    Order Summary
                    <span>{getTotal()}</span>
                  </li>

                  <div className="d-grid gap-3">
                    <div className="py-3">
                      <li className="Subtotal">
                        Total
                        <span>{getTotal()}</span>
                      </li>
                    </div>
                    <div className="py-3">
                      <li className="Discount">
                        Discount
                        <span>-$8</span>
                      </li>
                    </div>
                    <div className="py-3">
                      <li className="Shopping (Regular Delivery)">
                        Shopping
                        <span>$6</span>
                      </li>
                    </div>
                  </div>

                  <li className="Total Order">
                    Total Order
                    <span>{getTotal()}</span>
                  </li>
                </ul>
                <Link to="/checkout" className="proceed-btn">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DetailCart;
