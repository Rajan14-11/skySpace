import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import NewHeader from '../../Shared/Header/NewHeader'
import "./Cart.css"
import "./products.json"
function Cart() {

  const [showcart, setShowCart] = useState("true")
  const [items, setItems] = useState(1)
  const [total, setTotal] = useState(0)
  const [allproducts, setAllproducts] = useState()

  useEffect(() => {


    const getproducts = async () => {
      try {
        let result = await fetch(
          "https://theskyaural.herokuapp.com/mobileDetailsPost"
        );
        let data = await result.json();


        // console.log(allproducts)
        //   return products;
        setAllproducts(data)
      } catch (error) {
        console.log(error);
      }
    }
    return () => {
      getproducts()
    }
  }, [])

  const removeItem = (id)=>{

      console.log("clicked", id);
      let newcart = [...allproducts];
      const index = allproducts.findIndex((item) => item.id === id)
     console.log(index)
      if (index >= 0) {
        newcart.splice(index, 1);
      } else {
        console.log("hi");
      }
      setAllproducts(newcart);
    };


  return (
    <>
      <NewHeader productsInCart={allproducts && allproducts.length} />
      {/* <!-- cart --> */}
      <div className={`cart-overlay ${showcart ? "transparentBcg" : ""}`}>
        <div className={`cart ${showcart ? "showCart" : ""}`}>
          <Link to={"/home"}>
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


            {allproducts && allproducts.map((singleproduct) => {
              return (
                <div className="cart-item" key={singleproduct._id}>
                  <Link to={`/addtocart/:${singleproduct._id}`}>
                    <img src={singleproduct.mobileImg1Link} alt="" />
                  </Link>
                  <div>
                    <h4>{singleproduct.mobileTitle}</h4>
                    <h5>{singleproduct.mobilePrice1}</h5>
                    <span
                      className="remove-item"
                      onClick={()=>removeItem(singleproduct._id)}
                    >
                      remove
                    </span>
                  </div>
                  <div>
                    <i
                      className="fas fa-chevron-up"
                      onClick={() => {
                        setItems(items + 1);
                        setTotal(total + 2);
                      }}
                    ></i>
                    <p className="item-amount">{items}</p>
                    <i
                      className="fas fa-chevron-down "
                      onClick={() => setItems(items - 1)}
                    ></i>
                  </div>
                </div>
              );
            })

            }
          </div>
          <div className="cart-footer">
            <h3>
              your total : $ <span className="cart-total">{total}</span>
            </h3>
            <button className="clear-cart banner-btn">clear cart</button>
          </div>
        </div>
      </div>

    </>

  );
}

export default Cart