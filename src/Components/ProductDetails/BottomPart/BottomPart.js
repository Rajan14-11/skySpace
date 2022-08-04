import React, { useRef, useState } from 'react'
import "./BottomPart.css"
import {Link} from "react-scroll"

function BottomPart() {

    const [writeReview,setWriteReview] = useState(false)

    return (
      <div>
        <div className="bottom_main_container">
          <ul className="bottom_nav_links">
            <li className="bottom_nav_link nav-active">
              <Link
                activeClass="nav-active"
                to="description"
                spy={true}
                // smooth={true}
              >
                Description
              </Link>
            </li>
            <li className="bottom_nav_link">
              <Link
                to="additional_info"
                spy={true}
                // smooth={true}
              >
                Additional Information
              </Link>
            </li>
            <li className="bottom_nav_link">
              <Link
                to="reviews"
                spy={true}
                // smooth={true}
              >
                Reviews
              </Link>
            </li>
          </ul>

          <div className="description_content mt-4 mb-2" id="description">
            <div className="card">
              <div className="card-body">
                <h3>Product Information</h3>
                <p className="pb-1" style={{ fontSize: 18 }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra non, semper suscipit,
                  posuere a, pede. Donec nec justo eget felis facilisis
                  fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                  dignissim pellentesque felis. Phasellus ultrices nulla quis
                  nibh. Quisque a lectus. Donec consectetuer ligula vulputate
                  sem tristique cursus.
                </p>
                <ul>
                  <li>
                    Nunc nec porttitor turpis. In eu risus enim. In vitae mollis
                    elit.
                  </li>
                  <li>Vivamus finibus vel mauris ut vehicula.</li>
                  <li>
                    Nullam a magna porttitor, dictum risus nec, faucibus sapien.
                  </li>
                </ul>
                <p style={{ fontSize: 18 }}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Donec odio. Quisque volutpat mattis eros. Nullam malesuada
                  erat ut turpis. Suspendisse urna viverra non, semper suscipit,
                  posuere a, pede. Donec nec justo eget felis facilisis
                  fermentum. Aliquam porttitor mauris sit amet orci. Aenean
                  dignissim pellentesque felis. Phasellus ultrices nulla quis
                  nibh. Quisque a lectus. Donec consectetuer ligula vulputate
                  sem tristique cursus.
                </p>
              </div>
            </div>
          </div>

          <div
            className="additional_info_content mt-4 mb-2"
            id="additional_info"
          >
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>OS</th>
                  <td>MIUI 13</td>
                </tr>
                <tr>
                  <th>RAM</th>
                  <td>6 GB</td>
                </tr>
                <tr>
                  <th>Product Dimensions</th>
                  <td>16.4 x 0.9 x 7.4 cm; 200 Grams</td>
                </tr>
                <tr>
                  <th>Connectivity technologies</th>
                  <td>Bluetooth, Infrared, Wi-Fi, USB</td>
                </tr>
                <tr>
                  <th>Special features</th>
                  <td>
                    Display: Tru display, True Color, Blue light reduction,
                    Super resolution touch, Corning Gorilla Glass 5 protection,
                    3.5mm Audio Jack, IR Blaster, X-Axis linear motor, 5G
                    enabled with support for 12 5G bands, Wi-Fi 6, Bluetooth
                    5.3, 64MP ISOCELL Primary sensor 8MP Ultrawide, 120° FOV 2MP
                    Macro Sensor Video recording support- Upto 4K@30 fps Slow
                    motion support Short Video | Movie frame | Tilt shift |
                    Timed burst | VLOG Mode | Long exposure | Short video |
                    Clone Mode | Time lapse | Panaroma | Documents mode | Pro
                    Mode | AI Noise Reduction algorithm
                  </td>
                </tr>
                <tr>
                  <th>Resolution</th>
                  <td>1920 x 1080</td>
                </tr>
                <tr>
                  <th>Other camera features</th>
                  <td>Rear, Front</td>
                </tr>
                <tr>
                  <th>Battery Power Rating</th>
                  <td>5080</td>
                </tr>
                <tr>
                  <th>Whats in the box</th>
                  <td>
                    Redmi K50i 5G, Power adapter, USB cable, SIM eject tool,
                    Warranty card, User guide, Clear soft case, Screen protector
                    pre-applied on the phone
                  </td>
                </tr>
                <tr>
                  <th>Manufacturer</th>
                  <td>Redmi</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="review_content mb-2 mt-4" id="reviews">
            <div
              className="tab-pane active show"
              role="tabpanel"
              id="react-tabs-39"
              aria-labelledby="react-tabs-38"
            >
              <div className="reviews">
                <h3>Reviews (2)</h3>
                <div className="review">
                  <div className="row no-gutters">
                    <div className="col-auto">
                      <h5>
                        <a href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#">
                          Samanta J.
                        </a>
                      </h5>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "60%" }}
                          ></div>
                          <span className="tooltip-text">3.00</span>
                        </div>
                      </div>
                      <span className="review-date mb-1">6 days ago</span>
                    </div>
                    <div className="col">
                      <h5>Good, perfect size</h5>
                      <div className="review-content">
                        <p style={{ fontSize: 16 }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Ducimus cum dolores assumenda asperiores facilis
                          porro reprehenderit animi culpa atque blanditiis
                          commodi perspiciatis doloremque, possimus, explicabo,
                          autem fugit beatae quae voluptas!
                        </p>
                      </div>
                      <div className="review-action">
                        <a href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#">
                          <i className="icon-thumbs-up"></i>Helpful (2)
                        </a>
                        <a href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#">
                          <i className="icon-thumbs-down"></i>Unhelpful (0)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="review">
                  <div className="row no-gutters">
                    <div className="col-auto">
                      <h5>
                        <a href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#">
                          John Doe
                        </a>
                      </h5>
                      <div className="ratings-container">
                        <div className="ratings">
                          <div
                            className="ratings-val"
                            style={{ width: "60%" }}
                          ></div>
                          <span className="tooltip-text">3.00</span>
                        </div>
                      </div>
                      <span className="review-date mb-1">5 days ago</span>
                    </div>
                    <div className="col">
                      <h5>Very good</h5>
                      <div className="review-content">
                        <p style={{ fontSize: 16 }}>
                          Sed, molestias, tempore? Ex dolor esse iure hic veniam
                          laborum blanditiis laudantium iste amet. Cum non
                          voluptate eos enim, ab cumque nam, modi, quas iure
                          illum repellendus, blanditiis perspiciatis beatae!
                        </p>
                      </div>
                      <div className="review-action">
                        <a href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#">
                          <i className="icon-thumbs-up"></i>Helpful (0)
                        </a>
                        <a href="/react/molla/demo-13/product/default/bose-soundsport-wireless-headphones-blue/#">
                          <i className="icon-thumbs-down"></i>Unhelpful (0)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="addreview_btn">
                <button
                  className="btn btn-sm add_review_button"
                  onClick={() => setWriteReview(true)}
                >
                  Add a Review
                </button>
              </div>

              {writeReview && (
                <div className="reply ">
                  <div className="title-wrapper text-left">
                    <h3 className="title title-simple text-left text-normal">
                      Add a Review
                    </h3>
                    <p style={{ fontSize: 18 }}>
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <div className="rating-form">
                    <label htmlFor="rating" className="text-dark">
                      Your rating *{" "}
                    </label>
                    <span className="rating-stars selected">
                      <a className="star-1" href="#">
                        1
                      </a>
                      <a className="star-2" href="#">
                        2
                      </a>
                      <a className="star-3" href="#">
                        3
                      </a>
                      <a className="star-4" href="#">
                        4
                      </a>
                      <a className="star-5" href="#">
                        5
                      </a>
                    </span>
                    <select
                      name="rating"
                      id="rating"
                      style={{ display: "none" }}
                    >
                      <option value="">Rate…</option>
                      <option value="5">Perfect</option>
                      <option value="4">Good</option>
                      <option value="3">Average</option>
                      <option value="2">Not that bad</option>
                      <option value="1">Very poor</option>
                    </select>
                  </div>
                  <form action="#">
                    <textarea
                      id="reply-message"
                      cols="30"
                      rows="6"
                      className="form-control mb-2"
                      placeholder="Comment *"
                      required=""
                    ></textarea>
                    <div className="row">
                      <div className="col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          id="reply-name"
                          name="reply-name"
                          placeholder="Name *"
                          required=""
                        />
                      </div>
                      <div className="col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          id="reply-email"
                          name="reply-email"
                          placeholder="Email *"
                          required=""
                        />
                      </div>
                    </div>
                    <div className="form-checkbox d-flex align-items-start mb-2">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        id="signin-remember"
                        name="signin-remember"
                      />
                      <label
                        className="form-control-label ml-3"
                        htmlFor="signin-remember"
                      >
                        Save my name, email, and website in this browser for the
                        next time I comment.
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-sm add_review_button"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
}

export default BottomPart