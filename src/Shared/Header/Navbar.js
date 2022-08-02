import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../Firebase/FirebaseInitialize";
import "./Navbar.css";
import "./NewHeader.css"
import {
  faAddressBook,
  faAddressCard,
  faBell,
  faMoon,
  faSun,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRightFromBracket,
  faHouseChimney,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";

function Navbar(props) {
const [BurgerStatus, setBurgerStatus] = useState(true);
const [mode, setMode] = useState("light");
const [showcart, setShowCart] = useState("true");

const user = useSelector(selectUser);

const logOut = () => {
  signOut(auth);
};

 const [allproducts, setAllproducts] = useState([]);

 let quantity = 0;

 {
   allproducts &&
     allproducts.map((item) => {
       return (quantity += parseInt(item.quantity));
     });
 }

 useEffect(() => {
   const getproducts = async () => {
     try {
       let result = await fetch(
         "https://theskyaural.herokuapp.com/mobileDetailsPost"
       );
       let data = await result.json();
       setAllproducts(data);
     } catch (error) {
       console.log(error);
     }
   };
   return () => {
     getproducts();
   };
 }, []);

  return (
    <>
      <div className="burgerMenu" show={BurgerStatus}>
        <nav
          className={`sidebar ${
            BurgerStatus || window.innerWidth > 660 ? "close" : ""
          }`}
        >
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
                <span className="profession">
                  {user ? user.email.slice(0, 10) : "User Name"}
                </span>
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
                                <h2
                                  className="accordion-header"
                                  id="subheadingOne"
                                >
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
                                <h2
                                  className="accordion-header"
                                  id="subheadingTwo"
                                >
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
                          data-bs-parent="#mySub2Accordion"
                        >
                          <div className="card-body">
                            <div className="accordion" id="mySub2Accordion">
                              <div className="accordion-item">
                                <h2
                                  className="accordion-header"
                                  id="sub2headingOne"
                                >
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
                                  data-bs-parent="#mySub2Accordion"
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
                                <h2
                                  className="accordion-header"
                                  id="sub2headingTwo"
                                >
                                  <button
                                    type="button"
                                    className="accordion-button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#sub2collapseTwo"
                                  >
                                    Earpods
                                  </button>
                                </h2>
                                <div
                                  id="sub2collapseTwo"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#mySub2Accordion"
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
                                  id="sub2headingThree"
                                >
                                  <button
                                    type="button"
                                    className="accordion-button collapsed"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#sub2collapseThree"
                                  >
                                    Neckbands
                                  </button>
                                </h2>
                                <div
                                  id="sub2collapseThree"
                                  className="accordion-collapse collapse"
                                  data-bs-parent="#mySub2Accordion"
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
                {user ? (
                  <a href="#">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faArrowRightFromBracket}
                    />
                    <span className="text nav-text">Logout</span>
                  </a>
                ) : (
                  <Link to="/login" onClick={()=>setBurgerStatus(true)}>
                    <FontAwesomeIcon
                      className="icon"
                      icon={faArrowRightFromBracket}
                    />
                    <span className="text nav-text">Login</span>
                  </Link>
                )}
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

      <header id="header" className="sticky-top">
        <div className="main_top sticky-top">
          <div className="main_container">
            <div className="navbar_main_logo">
              <Link to={"/"}>
                <img src="/imgs/skyspacelogo.jpeg" />
              </Link>
            </div>
            <div className="navbar_main_search">
              <input
                type="text"
                name="search"
                placeholder="search"
                autoComplete="off"
              />
              <button className="navbar_search_icon">
                <i className=" fa fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="navbar_right_menu">
              <Link to={"/cart"}>
                <div className="navbar_cart">
                  <div className="navbar_cart-items">{quantity}</div>
                  <i
                    className="fa fa-solid fa-cart-arrow-down navbar_icon"
                    onClick={() => {
                      setShowCart(!showcart);
                    }}
                  ></i>
                  <span>Cart</span>
                </div>
              </Link>
              <div
                className="hamburger_menu_bars"
                onClick={() => setBurgerStatus(false)}
              >
                <span className="hamburger_menu_bar"></span>
                <span className="hamburger_menu_bar"></span>
                <span className="hamburger_menu_bar"></span>
              </div>
              <Link to={"/wishlist"}>
                <div className="navbar_wishlist">
                  <i className="fa navbar_icon fa-light fa-heart"></i>
                  <span>Wishlist</span>
                </div>
              </Link>
              <Link to={"/login"}>
                <div className="navbar_user">
                  <i className="fa navbar_icon fa-light fa-user"></i>
                  <div className="user_login">
                    {user ? (
                      <>
                        <span>{user.email && user.email.slice(0, 10)}</span>
                        <button
                          className="navbar_logout_btn"
                          onClick={() => logOut()}
                        >
                          Logout
                        </button>
                      </>
                    ) : (
                      <>
                        <span>Account</span>
                        <span>Login or Register</span>
                      </>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <nav className="main_navbar">
          <div className="main_navbar_conatiner">
            <nav>
              <ul className="main_navbar_menu">
                <li>
                  ONE-PLUS
                  <ul className="sub-nav">
                    <li>One Plus Nord 2T 5G</li>
                    <li>One Plus 10R 5G</li>
                    <li>One Plus 9RT 5G</li>
                    <li>One Plus 9 5G</li>
                  </ul>
                </li>
                <li>
                  APPLE
                  <ul className="sub-nav">
                    <li>I-Phone 11</li>
                    <li>I-phone 12</li>
                    <li>I-phone 13</li>
                    <li>I-Phone X</li>
                  </ul>
                </li>
                <li>
                  Samsung
                  <ul className="sub-nav">
                    <li>Galaxy F13 5G</li>
                    <li>Galaxy A52s</li>
                    <li>Galaxy A03 Core</li>
                    <li>Galaxy S22 Ultra</li>
                  </ul>
                </li>
                <li>
                  EarPods
                  <ul className="sub-nav">
                    <li>Airdopes 141</li>
                    <li>Airpods Pro</li>
                    <li>Airpods 3</li>
                  </ul>
                </li>
              </ul>
            </nav>

            {/* </div> */}
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
