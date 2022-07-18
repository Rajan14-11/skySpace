import React from 'react'
import { Link } from 'react-router-dom';
import "./AlsoLike.css"
function AlsoLike(props) {
    // console.log(props)
  return (
    <>
      <h1 className="also-heading">You make also like</h1>
      <div className="content1">
        <div className="products">
          <div className="product1">
            <Link
              to={`/addtocart/${props.mobDetails && props.mobDetails[0]._id}`}
            >
              <div className="image">
                <img
                  src={props.mobDetails && props.mobDetails[0].mobileImg1Link}
                />
              </div>
              <div className="product-name">
                <h3>{props.mobDetails && props.mobDetails[0].mobileName}</h3>
              </div>
              <div className="product-price">
                <strong>$</strong>
                <strong>
                  {props.mobDetails && props.mobDetails[0].mobilePrice2}
                </strong>
              </div>
            </Link>
            <div className="adcbtn">
              <button className="btn">Add To Cart</button>
            </div>
          </div>

          <div className="product1">
            <Link
              to={`/addtocart/${props.mobDetails && props.mobDetails[1]._id}`}
            >
              <div className="image">
                <img
                  src={props.mobDetails && props.mobDetails[1].mobileImg2Link}
                />
              </div>
              <div className="product-name">
                <h3>{props.mobDetails && props.mobDetails[1].mobileName}</h3>
              </div>
              <div className="product-price">
                <strong>$</strong>
                <strong>
                  {props.mobDetails && props.mobDetails[1].mobilePrice2}
                </strong>
              </div>
            </Link>
            <div className="adcbtn">
              <button className="btn">Add To Cart</button>
            </div>
          </div>

          <div className="product1">
            <Link
              to={`/addtocart/${props.mobDetails && props.mobDetails[2]._id}`}
            >
              <div className="image">
                <img
                  src={props.mobDetails && props.mobDetails[2].mobileImg1Link}
                />
              </div>
              <div className="product-name">
                <h3>{props.mobDetails && props.mobDetails[2].mobileName}</h3>
              </div>
              <div className="product-price">
                <strong>$</strong>
                <strong>
                  {props.mobDetails && props.mobDetails[2].mobilePrice2}
                </strong>
              </div>
            </Link>
            <div className="adcbtn">
              <button className="btn">Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AlsoLike