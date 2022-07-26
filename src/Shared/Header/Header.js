import React, { useState } from "react";
import "./Header.css";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import { faAddressBook, faAddressCard, faBell, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowRightFromBracket,
  faCartPlus,
  faHouseChimney,
  faMagnifyingGlass,

} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./NewHeader.css"
import { Link, NavLink } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/FirebaseInitialize';

const Header = (props) => {
  // const { logOut, user } = UseAuth();
  const [BurgerStatus, setBurgerStatus] = useState(true);
    const[mode,setMode] = useState("light")
const [showcart, setShowCart] = useState("true");

const logOut = () => {
  signOut(auth);
};


  return (
    <>
      {/* <div className='d-flex justify-content-end'>
<button onClick={logOut}>LogOut</button>
<Link to="/login"><h2>Login</h2></Link>
<Link to="/signup"><h2>Reg</h2></Link>
   <h2>{user.email}</h2>
  </div>  */}

      <div className="burgerMenu" show={BurgerStatus}>
        <nav className={`sidebar ${BurgerStatus ? "close" : ""}`}>
          <div className="menu-bar">
            <div
              className="image-text"
              style={{
                position: "sticky",
                top: "0",
                background: "white",
                zIndex: "100000",
              }}
            >
              <span className="sidebar_image">
                <img src="/imgs/bg.jpg" alt="" />
              </span>

              <div className="text logo-text">
                {/* <span className="name">The Sky Aural</span> */}
                <span className="profession">User Name</span>
              </div>

              <button
                type="button"
                className="btn-close"
                aria-label="Close"
                onClick={() => setBurgerStatus(true)}
              ></button>
            </div>

            <div className="menu">
              <li className="search-box">
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />

                <input type="text" placeholder="Search..." />
              </li>

              <ul className="menu-links">
                <NavLink to={"/"}>
                  <li className="nav-link">
                    <a href="#">
                      <FontAwesomeIcon className="icon" icon={faHouseChimney} />
                      <span className="text nav-text">Home</span>
                    </a>
                  </li>
                </NavLink>

                <NavLink to={"/products"}>
                  <li className="nav-link">
                    <a href="#">
                      <FontAwesomeIcon className="icon" icon={faBell} />
                      <span className="text nav-text">Product</span>
                    </a>
                  </li>
                </NavLink>

                <li style={{ height: "fit-content" }}>
                  <div className="m-2" style={{ width: "100%" }}>
                    <div className="accordion" id="myAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            type="button"
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                          >
                            MOBILES
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <div className="card-body">
                            <div className="accordion" id="mySubAccordion">
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="subheadingOne">
                                  <button
                                    type="button"
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#subcollapseOne"
                                  >
                                    IPHONES
                                  </button>
                                </h2>
                                <div
                                  id="subcollapseOne"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#mySubAccordion"
                                >
                                  <div className="card-body">
                                    <ul style={{ listStyle: "disc" }}>
                                      <li>Iphone(new with inidan warranty)</li>
                                      <li>
                                        Iphone(new with international warranty)
                                      </li>
                                      <li>Iphone(close to new)</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div className="accordion-item">
                                <h2 className="accordion-header" id="subheadingTwo">
                                  <button
                                    type="button"
                                    className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#subcollapseTwo"
                                  >
                                    SAMSUNG
                                  </button>
                                </h2>
                                <div
                                  id="subcollapseTwo"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#mySubAccordion"
                                >
                                  <div className="card-body">
                                    <ul>
                                      <li>Samsung Fold</li>
                                      <li>Samsung Budget</li>
                                      <li>Samsung Flagship</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="subheadingThree"
                                >
                                  <button
                                    type="button"
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#subcollapseThree"
                                  >
                                    Redmi
                                  </button>
                                </h2>
                                <div
                                  id="subcollapseThree"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#mySubAccordion"
                                >
                                  <div className="card-body">
                                    <ul>
                                      <li>Redmi K50i</li>
                                      <li>Xiomi 11i</li>
                                      <li>Redmi Note 11i</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            type="button"
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                          >
                            EARPHONES
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <div className="card-body">
                            <div className="accordion" id="mySubAccordion">
                              <div className="accordion-item">
                                <h2 className="accordion-header" id="subheadingOne">
                                  <button
                                    type="button"
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#subcollapseOne"
                                  >
                                    Wired Earphones
                                  </button>
                                </h2>
                                <div
                                  id="subcollapseOne"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#mySubAccordion"
                                >
                                  <div className="card-body">
                                    <ul>
                                      <li>BOAT</li>
                                      <li>Apple</li>
                                      <li> Redmi</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>

                              <div className="accordion-item">
                                <h2 className="accordion-header" id="subheadingTwo">
                                  <button
                                    type="button"
                                    className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#subcollapseTwo"
                                  >
                                    Earpods
                                  </button>
                                </h2>
                                <div
                                  id="subcollapseTwo"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#mySubAccordion"
                                >
                                  <div className="card-body">
                                    <ul>
                                      <li>Apple Earpods</li>
                                      <li>Samsung Earpods</li>
                                      <li>Budget Earpods</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="subheadingThree"
                                >
                                  <button
                                    type="button"
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#subcollapseThree"
                                  >
                                    Neckbands
                                  </button>
                                </h2>
                                <div
                                  id="subcollapseThree"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#mySubAccordion"
                                >
                                  <div className="card-body">
                                    <ul className="accordian_li">
                                      <li>BOAT</li>
                                      <li>Samsung</li>
                                      <li>Redmi</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            type="button"
                            className="accordion-button collapsed"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                          >
                            Laptops
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#myAccordion"
                        >
                          <div className="card-body">
                            <p>
                              CSS stands for Cascading Style Sheet. CSS allows
                              you to specify various style properties for a
                              given HTML element such as colors, backgrounds,
                              fonts etc.{" "}
                              <a
                                href="https://www.tutorialrepublic.com/css-tutorial/"
                                target="_blank"
                              >
                                Learn more.
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <FontAwesomeIcon className="icon" icon={faAddressCard} />
                    <span className="text nav-text">About Us</span>
                  </a>
                </li>

                <NavLink to={"/cart"}>
                <div
                  className="offcanvas offcanvas-end"
                  tabindex="-1"
                  id="offcanvasRight"
                  aria-labelledby="offcanvasRightLabel"
                >

                </div>
                <li
                  className="nav-link car"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                  >
                  <a href="#">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faCartPlus}
                      onClick={() => {
                        setShowCart(!showcart);
                      }}
                    />

                    <div className="cart-items">{props.quantity}</div>
                    <span className="text nav-text">Cart</span>
                  </a>
                </li>

                 </NavLink>

                <li className="nav-link">
                  <a href="#">
                    <FontAwesomeIcon className="icon" icon={faAddressBook} />
                    <span className="text nav-text">Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bottom-content">
              <li className="" onClick={logOut}>
                <a href="#">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faArrowRightFromBracket}
                  />
                  <span className="text nav-text">Logout</span>
                </a>
              </li>

              <li className="mode">
                <div className="sun-moon nav-link">
                  {mode == "light" ? (
                    <FontAwesomeIcon
                      className="icon-sunmoon"
                      icon={faMoon}
                      style={{ filter: "revert" }}
                    />
                  ) : (
                    <FontAwesomeIcon className="icon-sunmoon" icon={faSun} />
                  )}
                </div>

                <div
                  className="toggle-switch"
                  onClick={() => {
                    document.body.classList.contains("dark")
                      ? setMode("light")
                      : setMode("dark");
                    document.body.classList.toggle("dark");
                  }}
                >
                  <span className="switch"></span>
                </div>
              </li>
            </div>
          </div>
        </nav>
      </div>

      <div className="sticky-top ">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid d-flex justify-content-space-between align-items-center">
            <a className="navbar-brand fs-4 fw-bold text-light" href="/">
              {" "}
              <Fade right>SkyAural</Fade>
            </a>
            <button
              className="navbar-toggler burger_menu"
              onClick={() => setBurgerStatus(false)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav text-center m-auto mb-2 mb-lg-0">
                <Rotate top left>
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                </Rotate>
                <Rotate top left>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      About
                    </a>
                  </li>
                </Rotate>
                <Rotate top left>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Services
                    </a>
                  </li>
                </Rotate>
                <Rotate top left>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Products
                    </a>
                  </li>
                </Rotate>
                <Rotate top left>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      Contact Us
                    </a>
                  </li>
                </Rotate>
              </ul>
              <form role="search">
                <div className="d-flex justify-content-center headerSearchDiv">
                  <div className="d-flex ">
                    <input
                      autoComplete="none"
                      className=" form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <Pulse>
                      <i
                        className="fs-2 pe d-flex align-items-center fa-solid fa-heart"
                        id="likeBtn"
                      ></i>
                    </Pulse>
                  </div>
                </div>
              </form>
              <div className="right_menu d-flex">
                <div className="image-text d-flex flex-column">
                  <span className="sidebar_image">
                    <img src="/imgs/bg.jpg" alt="" />
                  </span>

                  <div className="text logo-text">
                    {/* <span className="name">The Sky Aural</span> */}
                    <span className="profession">User Name</span>
                  </div>
                </div>
                <NavLink to={"/cart"}>
                  <li className="nav-link car">
                    <a href="#">
                      <FontAwesomeIcon
                        className="icon"
                        icon={faCartPlus}
                        onClick={() => {
                          setShowCart(!showcart);
                        }}
                      />

                      <div className="cart-items">{props.quantity}</div>
                      <span className="text nav-text">Cart</span>
                    </a>
                  </li>
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;





