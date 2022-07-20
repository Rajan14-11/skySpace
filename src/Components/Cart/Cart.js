import React, { useEffect, useState } from "react";
import CurrencyFormat from "react-currency-format";
import { Link, NavLink } from "react-router-dom";
import NewHeader from "../../Shared/Header/NewHeader";
import "./Cart.css";
import "./products.json";
function Cart() {
  const [showcart, setShowCart] = useState("true");
  const [allproducts, setAllproducts] = useState([]);

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
    // const index = allproducts.findIndex((item) => item._id === id);
    let updatedCart = allproducts.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: parseInt(item.quantity) + parseInt(1) };
      }
      return item;
    });
    // console.log(updatedCart)
    setAllproducts(updatedCart);
  };
  const decreaseProductCount = (id) => {
    // const index = allproducts.findIndex((item) => item._id === id);
    let updatedCart = allproducts.map((item) => {
      if (item._id === id) {
        return { ...item, quantity: parseInt(item.quantity) - parseInt(1) };
      }
      return item;
    });
    setAllproducts(updatedCart);
  };

  const clearCart = () => {
    setAllproducts([]);
    // setTotal(0)
  };

  return (
    <>
      <NewHeader productsInCart={allproducts && allproducts.length} />
      {/* <!-- cart --> */}
      <div className={`cart-overlay ${showcart ? "transparentBcg" : ""}`}>
        <div className={`cart ${showcart ? "showCart" : ""}`}>
          <Link to={"/"}>
            <span className="close-cart">
              <i
                className="fas fa-window-close"
                onClick={() => {
                  setShowCart(!showcart);
                }}
              >
                {" "}
              </i>
            </span>
          </Link>
          <h2>your cart</h2>
          <div className="cart-content">
            {allproducts &&
              allproducts.map((singleproduct) => {
                return (
                  <div className="cart-item" key={singleproduct._id}>
                    <Link to={`/addtocart/:${singleproduct._id}`}>
                      <img src={singleproduct.mobileImg1Link} alt="" />
                    </Link>
                    <div>
                      <h4>{singleproduct.mobileTitle}</h4>
                      <h5>
                        {singleproduct.mobilePrice1 * singleproduct.quantity}
                      </h5>
                      <span
                        className="remove-item"
                        onClick={() => removeItem(singleproduct._id)}
                      >
                        remove
                      </span>
                    </div>
                    <div>
                      <i
                        className="fas fa-chevron-up"
                        onClick={() => increaseProductCount(singleproduct._id)}
                      ></i>
                      <p className="item-amount">{singleproduct.quantity}</p>
                      <button
                        disabled={singleproduct.quantity <= 1 ? true : false}
                        style={{background:"transparent" , border:'none'}}
                      >
                        <i
                          className="fas fa-chevron-down "
                          onClick={singleproduct.quantity>1?() =>
                            decreaseProductCount(singleproduct._id):("")
                          }
                        ></i>
                      </button>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="cart-footer">
            <CurrencyFormat
              renderText={(value) => (
                <>
                  <p>
                    Subtotal ({allproducts.length} items):{" "}
                    <strong>{value}</strong>
                  </p>
                </>
              )}
              decimalScale={2}
              value={getTotal(allproducts)}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />

            <button
              className="clear-cart banner-btn"
              onClick={() => clearCart()}
            >
              clear cart
            </button>
            <NavLink to={"/checkout"}>
              <button className="clear-cart banner-btn">CheckOut</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
