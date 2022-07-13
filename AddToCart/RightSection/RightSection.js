import React, { useState } from 'react'
import './RightSection.css'
function RightSection() {

  const [changeValue, setChangeValue] = useState(1)
  const [counterValue, setCounterValue] = useState(1)
  return (
    <>
      <div className="content">
        <div className="product">
          <div className="product-name">
            <h1 className="title">MAKE IT RAIN COFFEE</h1>
          </div>

          <div className="product__rating">
            {Array(5)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </div>

          <p className="product__price">
            <strong>$</strong>
            <strong>{23.33}</strong>
          </p>

          <select class="form-select" aria-label="Default select example">
            <option selected>{'choose'}</option>
            <option value="1">One</option>
            <option value="2">Two</option>
          </select>

          <div className="counter">
              <button className='counterbutton'
                onClick={() => {
                  setCounterValue((prevValue) => prevValue + changeValue);
      // passed in function to prevent memory leak
                }}
              >
                <b>+</b>
              </button>
            <input
              value={changeValue}
              type="number"
              onChange={(e) => setChangeValue(parseInt(e.target.value))}
            />
              <button className='counterbutton'
                onClick={() => {
                  setCounterValue((prevValue) => prevValue - changeValue);

                }}
              >
                <b>-</b>
              </button>
            <div className="counter1">
              <p>{counterValue}</p>
            </div>
          </div>

          <div class="d-flex cartbtn">
            <button class="btn btn-primary addtocartbtn" type="button">
              Add To Cart
            </button>
            <button class="btn btn-primary buyitnowbtn" type="button">
              Buy It Now
            </button>
          </div>
        </div>

<div className='social-sharing'>
  <div className="facebook">
    <img src='/imgs/facebooksvg.svg'></img>
  </div>
  <div className="facebook">
    <img src='/imgs/twittersvg.svg'></img>
  </div>
  <div className="facebook">
    <img src='/imgs/instagramsvg.svg'></img>
  </div>
</div>

      </div>
    </>
  );
}

export default RightSection