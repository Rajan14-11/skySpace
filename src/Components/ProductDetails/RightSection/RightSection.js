import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'
import './RightSide.css'
function RightSection(props) {
  const [changeValue, setChangeValue] = useState(1)
  const [counterValue, setCounterValue] = useState(1)
  const [totalPrice,setTotalPrice] = useState(props.price)
 let navigate = useNavigate()
 const Cart = ()=>{
    //  localStorage.setItem("Title",props.title)
    //  localStorage.setItem("Price",props.price)
    //  localStorage.setItem("quantity",counterValue)
    localStorage.setItem("ProductDetails",JSON.stringify(props.productdetails))
    navigate("/cart",{replace:true})

  }

  const increment = ()=>{
    setCounterValue((prevValue) => prevValue + changeValue);
    setTotalPrice(props.price*(counterValue+1))
  }
  return (
    <>
      <div className="rightside_content">
        <div className="product">
          <strong>
            <div className="product-name">
              <h3 className="title">{props.title}</h3>
            </div>
          </strong>

          <p className="product_briefdesc">
            iPhone 13 Pro and 13 Pro Max. Huge camera upgrades. New OLED display
            with ProMotion. Fastest smartphone chip ever. Breakthrough battery
            life.
          </p>

          <p className="product__price">
            <strong>$</strong>
            <strong>{props.price}</strong>
          </p>

          <div className="product__rating">
            {Array(5)
              .fill()
              .map((_, i) => (
                <p key={i}>🌟</p>
              ))}
          </div>

          {/* <select className="form-select" aria-label="Default select example">
            <option selected>{"choose"}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select> */}

          <div className="product_desc">
            <ul>
              <li>
                15 cm (6.1-inch) Super Retina XDR display with ProMotion for a
                faster, more responsive feel
              </li>
              <li>
                Pro camera system with new 12MP Telephoto, Wide and Ultra Wide
                cameras; LiDAR Scanner; 6x optical zoom range; macro
                photography; Photographic Styles, ProRes video, Smart HDR 4,
                Night mode, Apple ProRAW, 4K Dolby Vision HDR recording
              </li>
              <li>
                12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR
                recording
              </li>
              <li>A15 Bionic chip for lightning-fast performance</li>
              <li>Durable design with Ceramic Shield</li>
            </ul>
          </div>

          <div className="d-flex cartbtn">
            <div className="counter">
              <button className="counterbutton" onClick={() => increment()}>
                <b>+</b>
              </button>

              <input
                className="counter_input"
                value={counterValue}
                type="text"
                onChange={(e) => setChangeValue(parseInt(e.target.value))}
              />
              <button
                className="counterbutton"
                onClick={() => {
                  setCounterValue((prevValue) => prevValue - changeValue);
                  setTotalPrice(totalPrice - props.price);
                }}
                disabled={counterValue == 1 ? true : false}
              >
                <b>-</b>
              </button>
            </div>

            <button
              className="btn btn-primary buyitnowbtn"
              type="button"
              onClick={() => {
                Cart();
              }}
            >
              Add To Cart
            </button>
          </div>
        <div className="social-sharing">
          <div className="facebook">
            <img src="/imgs/facebooksvg.svg"></img>
          </div>
          <div className="facebook">
            <img src="/imgs/twittersvg.svg"></img>
          </div>
          <div className="facebook">
            <img src="/imgs/instagramsvg.svg"></img>
          </div>
        </div>
        </div>


        {/* <div className="description">
          <div className="d-grid gap-2 ">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle descbtn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Description
              </button>
              <ul className="dropdown-menu">
                <li>
                  <p className="dropdown-item paragraph">
                    {" "}
                    That’s right, Make it Rain! If money ain’t pouring down on
                    you, drink your favorite brew and get back to the grind.
                    This balanced and smooth blend will keep you motivated and
                    focused on your goals to chase that paper and have it coming
                    down like that paper should!
                  </p>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <strong>Tasting Notes: </strong>Cocoa / Brown Sugar
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default RightSection