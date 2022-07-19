import React, { Component } from "react";
import Slider from "react-slick";
import './TopProducts.css'
import $ from "jquery";


/* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="mainTopProd p-3 pt-5">
        <h2 className="text-center"><b><span className="topPdts">T</span>op <span className="pdts">P</span>roducts</b></h2>
      <div className=" container">
       
        <Slider {...settings}>
      
        <div>
<figure className="snip1268">
  <div className="image">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg" alt="sq-sample4"/>
    <div className="icons">
      <a href="/"><i className="ion-star"></i></a>
      <a href="/"> <i className="ion-share"></i></a>
      <a href="/"> <i className="ion-search"></i></a>
    </div>
    <a href="/" className="add-to-cart">Add to Cart</a>
  </div>
  <figcaption>
    <h2>Denim Shirt</h2>
    <p>My family is dysfunctional and my parents won't empower me. Consequently I'm not self actualized.</p>
    <div className="price">$65.00 </div>
  </figcaption>
</figure>
</div>
<div>
<figure className="snip1268 hover">
  <div className="image">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample17.jpg" alt="sq-sample17"/>
    <div className="icons">
      <a href="/"><i className="ion-star"></i></a>
      <a href="/"> <i className="ion-share"></i></a>
      <a href="/"> <i className="ion-search"></i></a>
    </div>
    <a href="/" className="add-to-cart">Add to Cart</a>
  </div>
  <figcaption>
    <h2>Winter Clothes</h2>
    <p>If something is so complicated that you can't explain it in 10 seconds, then it's probably not worth knowing anyway.</p>
    <div className="price">$75.00 </div>
  </figcaption>
</figure>
</div>
<div>
<figure className="snip1268">
  <div className="image">
    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample15.jpg" alt="sq-sample15"/>
    <div className="icons">
      <a href="/"><i className="ion-star"></i></a>
      <a href="/"> <i className="ion-share"></i></a>
      <a href="/"> <i className="ion-search"></i></a>
    </div>
    <a href="/" className="add-to-cart">Add to Cart</a>
  </div>
  <figcaption>
    <h2>Footwear</h2>
    <p>Miss Wormwood: What state do you live in? Calvin: Denial. Miss Wormwood: I don't suppose I can argue with that!</p>
    <div className="price">$195.00 </div>
  </figcaption>
</figure>
</div>
<div>
<figure className="snip1268">
  <div className="image">
    <img src="https://i.ibb.co/6wgn4sL/rsz-1pexels-pixabay-534220.jpg" alt="sq-sample15"/>
    <div className="icons">
      <a href="/"><i className="ion-star"></i></a>
      <a href="/"> <i className="ion-share"></i></a>
      <a href="/"> <i className="ion-search"></i></a>
    </div>
    <a href="/" className="add-to-cart">Add to Cart</a>
  </div>
  <figcaption>
    <h2>Footwear</h2>
    <p>Miss Wormwood: What state do you live in? Calvin: Denial. Miss Wormwood: I don't suppose I can argue with that!</p>
    <div className="price">$195.00 </div>
  </figcaption>
</figure>
</div>
<div>
<figure className="snip1268">
  <div className="image">
    <img src="https://i.ibb.co/6wgn4sL/rsz-1pexels-pixabay-534220.jpg" alt="sq-sample15"/>
    <div className="icons">
      <a href="/"><i className="ion-star"></i></a>
      <a href="/"> <i className="ion-share"></i></a>
      <a href="/"> <i className="ion-search"></i></a>
    </div>
    <a href="/" className="add-to-cart">Add to Cart</a>
  </div>
  <figcaption>
    <h2>Footwear</h2>
    <p>Miss Wormwood: What state do you live in? Calvin: Denial. Miss Wormwood: I don't suppose I can argue with that!</p>
    <div className="price">$195.00 </div>
  </figcaption>
</figure>
</div>
          
        </Slider>
      </div>
      </div>
    );
  }
}