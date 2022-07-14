import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./OurServices.css";

// const [mobileProduct,setMobileProduct]=useState({})

export default class OurServices extends React.Component {
  componentDidMount() {
    fetch("https://theskyaural.herokuapp.com/mobileDetailsPost")
    // fetch("./products.js")
      .then((res) => res.json())
      .then((res) => this.setState({ posts: res }))
      .then((res) => console.log(res));
  }
  constructor(props) {
    super(props);
    this.state = { posts: [] };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 100,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 280,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };

    return (
      <div>
        <div className="mainServideStore">
          <div className="buttonRightLeft d-flex justify-content-between p-5 pb-0 ">
            <div className="titleItem">
              <h2>IN THE SPOTLIGHT</h2>
            </div>
            <div className="nextIcon">
              <button className="button leftBtn" onClick={this.previous}>
                <i className="fa-solid fa-angle-left"></i>
              </button>
              <button className="button rightBtn" onClick={this.next}>
                <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
          <Slider ref={(c) => (this.slider = c)} {...settings}>
            {this.state.posts.map((post) => (
              <div key={post._id}>
                <Link to={`/mobileDetails/${post._id}`}>
                  <img
                    className=" m-1 img-fluid"
                    src={post.mobileImg1Link}
                    alt="product  "
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
  }
}
