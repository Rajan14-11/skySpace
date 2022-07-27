import React, { Fragment, useEffect, useState } from "react";
import "./Cart.css";
// import CartItemCard from "./CartItemCard";
import { useSelector, useDispatch } from "react-redux";
// import { addItemsToCart, removeItemsFromCart } from "../../actions/cartAction";
// import { Typography } from "@material-ui/core";
// import RemoveShoppingCartIcon from "@material-ui/icons/RemoveShoppingCart";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Shared/Header/Header";
import CheckoutSteps from "../Checkout/CheckoutSteps";

const Cart = () => {

  const navigate = useNavigate()
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

   const checkoutHandler = () => {
navigate('/checkout')
  };

  return (
    <div className="detailcart_body">
      <Header />
      <div className="detailcart_stepper">
        <CheckoutSteps activeStep={0} />
      </div>
      {allproducts.length === 0 ? (
        <div className="emptyCart">
          {/* <RemoveShoppingCartIcon /> */}
          <p>No Product in Your Cart</p>
          <Link to="/products">View Products</Link>
        </div>
      ) : (
        <Fragment>
          <div className="cartPage">
            <div className="cartHeader">
              <p>Product</p>
              <p>Quantity & Subtotal</p>
              {/* <p>Subtotal</p> */}
            </div>

            {allproducts &&
              allproducts.map((item) => (
                <div className="cartContainer" key={item._id}>
                  <div className="CartItemCard">
                    <img src={item.mobileImg1Link} alt="ssa" />
                    <div className="detailcart_product">
                      <Link to={`/productdetail/:${item._id}`}>
                        <div className="detailcart_product_name">
                          {item.mobileName}
                        </div>
                      </Link>
                      {/* <span>{`Price: ₹${item.mobilePrice1}`}</span> */}
                      <p onClick={() => removeItem(item._id)} className="detailcart_remove">Remove</p>
                    </div>
                  </div>
                  <div className="cart_side">
                    <div className="cartInput">
                      <button
                        onClick={
                          item.quantity > 1
                            ? () => decreaseProductCount(item._id)
                            : () => removeItem(item._id)
                        }
                      >
                        -
                      </button>
                      <input type="number" value={item.quantity} readOnly />
                      <button onClick={() => increaseProductCount(item._id)}>
                        +
                      </button>
                    </div>
                    <p className="cartSubtotal">{`₹${
                      item.mobilePrice1 * item.quantity
                    }`}</p>
                  </div>
                </div>
              ))}

            <div className="cartGrossProfit">
              <div></div>
              <div className="cartGrossProfitBox">
                <p>Gross Total</p>
                <p>{`₹${allproducts.reduce(
                  (acc, item) => acc + item.quantity * item.mobilePrice1,
                  0
                )}`}</p>
              </div>
              <div></div>
              <div className="checkOutBtn">
                <button onClick={checkoutHandler}>Check Out</button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
