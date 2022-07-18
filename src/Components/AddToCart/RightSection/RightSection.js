import React, { useState } from 'react'
import { Link, Navigate, NavLink, useNavigate } from 'react-router-dom'
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import './RightSection.css'
function RightSection(props) {

  const [changeValue, setChangeValue] = useState(1)
  const [counterValue, setCounterValue] = useState(1)
  const [totalPrice,setTotalPrice] = useState(props.price)

 let navigate = useNavigate()

  const Cart = ()=>{

   navigate("/cart",{replace:true})
   
  }

  const increment = ()=>{
    setCounterValue((prevValue) => prevValue + changeValue);
    setTotalPrice(props.price*(counterValue+1))
  }
  return (
    <>
      <div className="content">
        <div className="product">
          <div className="product-name">
            <h1 className="title">{props.title}</h1>
          </div>

          <div className="product__rating">
            {Array(5)
              .fill()
              .map((_, i) => (
                <p key={i}>🌟</p>
              ))}
          </div>

          <p className="product__price">
            <strong>$</strong>
            <strong>{totalPrice}</strong>
          </p>

          <select className="form-select" aria-label="Default select example">
            <option selected>{"choose"}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>

          <div className="counter">
            <button
              className="counterbutton"
              onClick={() =>
                increment()
                // passed in function to prevent memory leak
              }
            >
              <b>+</b>
            </button>

            <input
              value={counterValue}
              type="text"
              onChange={(e) => setChangeValue(parseInt(e.target.value))}
            />
            <button
              className="counterbutton"
              onClick={() => {
                setCounterValue((prevValue) => prevValue - changeValue);
                setTotalPrice(totalPrice-(props.price))
              }}
              disabled={counterValue == 1 ? true : false}
            >
              <b>-</b>
            </button>
          </div>

          <div className="d-flex cartbtn">
            <button className="btn btn-primary addtocartbtn" type="button" onClick={()=>{
             Cart()
            }}>
              Add To Cart
            </button>

            <button className="btn btn-primary buyitnowbtn" type="button">
              Buy It Now
            </button>
          </div>
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

        <div className="description">
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

          <div className="d-grid gap-2">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Customer Reviews (6)
              </button>
              <ul className="dropdown-menu">
                <li>
                  <p className="dropdown-item paragraph">
                    That’s right, Make it Rain! If money ain’t pouring down on
                    you, drink your favorite brew and get back to the grind.
                    This balanced and smooth blend will keep you motivated and
                    focused on your goals to chase that paper and have it coming
                    down like that paper should!
                  </p>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tasting Notes: Cocoa / Brown Sugar
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

        </div>
      </div>
    </>
  );
}

export default RightSection