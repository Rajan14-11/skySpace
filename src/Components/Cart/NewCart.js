import React, { useEffect, useState } from 'react'
import { Offcanvas ,Stack} from 'react-bootstrap'
import CurrencyFormat from 'react-currency-format';
import { Link, NavLink } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import Navbar from '../../Shared/Header/Navbar';
import "./NewCart.css"

function NewCart() {


  const [showcart, setShowCart] = useState("true");
  const [allproducts, setAllproducts] = useState([]);

  let quantity = 0;

  {
    allproducts && allproducts.map((item)=>{
      return(
        quantity += parseInt(item.quantity)
      )
    })
  }

   useEffect(() => {
     const getproducts = async () => {
       try {
         let result = await fetch(
           "https://theskyaural.herokuapp.com/mobileDetailsPost"
         );
         let data = await result.json();
      //    let localdata = [{
      //     //  mobileTitle:localStorage.getItem('Title').toString(),
      //     //  mobilePrice1:localStorage.getItem('Price').toString(),
      //     //  quantiy:localStorage.getItem('quantity').toString(),
      //     productdetails:localStorage.getItem("ProductDetails")
      //  }];

      let localdata = [JSON.parse(localStorage.getItem("ProductDetails"))]
         let completedata = [...data,...localdata]
         console.log(completedata)
         setAllproducts(completedata);
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
      <Offcanvas show={showcart} placement="end">
        <Link to={"/"}>
          <Offcanvas.Header
            closeButton
            onClick={() => {
              setShowCart(!showcart);
            }}
          >
            <Offcanvas.Title>Cart</Offcanvas.Title>
          </Offcanvas.Header>
        </Link>
        <Offcanvas.Body>
          <Stack gap={3}>
            {quantity!==0 ?

              allproducts.map((singleproduct) => {
                return (
                  <div className="cart-item" key={singleproduct._id}>
                    <div className="product-details">
                      <Link to={`/productdetail/${singleproduct._id}`}>
                        <img src={singleproduct.mobileImg1Link} alt="" />
                      </Link>
                      <div className="product-detail">
                        <h4>{singleproduct.mobileTitle}</h4>
                        <h6>
                          {singleproduct.mobileRam1}/{singleproduct.mobileRam2}
                        </h6>

                        {singleproduct.quantity > 0 ? (
                          <div className="quantity">
                            <i
                              class="fa fa-light fa-circle-plus"
                              onClick={() =>
                                increaseProductCount(singleproduct._id)
                              }
                            ></i>

                            <p className="item-amount">
                              {singleproduct.quantity}
                            </p>

                            <i
                              style={{
                                background: "transparent",
                                border: "none",
                              }}
                              class=" fa fa-light fa-circle-minus"
                              onClick={
                                singleproduct.quantity > 1
                                  ? () =>
                                      decreaseProductCount(singleproduct._id)
                                  : () => removeItem(singleproduct._id)
                              }
                            ></i>
                          </div>
                        ) : (
                          <div>
                            <h4 style={{ color: "red" }}>Out of Stock</h4>
                          </div>
                        )}
                      </div>
                      <div className="right-part-cart">
                        <i
                          class="fa fa-light fa-xmark remove-item"
                          onClick={() => removeItem(singleproduct._id)}
                        ></i>


                        {singleproduct.quantity > 0 ? (
                          <h5>
                            <span>$</span>
                            {singleproduct.mobilePrice1 *
                              singleproduct.quantity}
                          </h5>
                        ) : (
                          " "
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            :
            (<div className='empty-cart'>
             <img src='/imgs/download.png'/>
             <h4>Your Cart is empty </h4>
            </div>
            )
            }
          {quantity !==0 ?
            <div className="cart-footer">
              <button
                className="clear-cart banner-btn"
                onClick={() => clearCart()}
              >
                clear cart
              </button>
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p className="subtotal">
                      Subtotal ({quantity} items):{" "}
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

              <NavLink to={"/checkout"}>
                <button className="checkout-btn">Checkout</button>
              </NavLink>
            </div>
            :""}
          </Stack>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default NewCart