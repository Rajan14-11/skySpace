import React, { useState } from "react";
import "./Header.css";
import Rotate from "react-reveal/Rotate";
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import UseAuth from "../../Hooks/useAuth";
import NewHeader from "./NewHeader";
import { faAddressBook, faAddressCard, faBell, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faCartPlus, faChartSimple, faHouseChimney, faLeftRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./NewHeader.css"
import { Link, NavLink } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/FirebaseInitialize';

const Header = (props) => {
  // const { logOut, user } = UseAuth();
  const [BurgerStatus, setBurgerStatus] = useState(false);
  const [active, setActive] = useState("false")
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
          <header>
            <div className="image-text">
              <span className="image">
                <img src="" alt="" />
              </span>

              <div className="text logo-text">
                <span className="name">The Sky Aural</span>
                <span className="profession">Akash Soni</span>
              </div>
            </div>

            <i className="bx bx-chevron-right toggle"></i>
            <FontAwesomeIcon
              className="toggle"
              icon={faLeftRight}
              onClick={() => setBurgerStatus(false)}
            />
          </header>

          <div className="menu-bar">
            <div className="menu">
              <li className="search-box" onClick={() => setActive(!active)}>
                {/* <i className='bx bx-search icon'></i> */}
                <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />

                <input type="text" placeholder="Search..." />
              </li>

              <ul className="menu-links">
                <NavLink to={"/"}>
                  <li className="nav-link">
                    <a href="#">
                      {/* <i className="bx bx-home-alt icon"></i> */}
                      <FontAwesomeIcon className="icon" icon={faHouseChimney} />
                      <span className="text nav-text">Home</span>
                    </a>
                  </li>
                </NavLink>
                <NavLink to={"/Services"}>
                  <li className="nav-link">
                    <a href="#">
                      {/* <i className="bx bx-bar-chart-alt-2 icon"></i> */}
                      <FontAwesomeIcon className="icon" icon={faChartSimple} />
                      <span className="text nav-text">Services</span>
                    </a>
                  </li>
                </NavLink>
                <NavLink to={"/products"}>
                  <li className="nav-link">
                    <a href="#">
                      {/* <i className="bx bx-bell icon"></i> */}
                      <FontAwesomeIcon className="icon" icon={faBell} />
                      <span className="text nav-text">Product</span>
                    </a>
                  </li>
                </NavLink>
                <li className="nav-link">
                  <a href="#">
                    {/* <i className="bx bx-pie-chart-alt icon"></i> */}
                    <FontAwesomeIcon className="icon" icon={faAddressCard} />
                    <span className="text nav-text">About Us</span>
                  </a>
                </li>
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
                {/* <div
                className="cart-btn nav-link"
                onClick={() => {
                  setShowCart(!showcart);
                }}
              ></div> */}

                <li className="nav-link">
                  <a href="#">
                    {/* <i className="bx bx-heart icon"></i> */}
                    <FontAwesomeIcon className="icon" icon={faAddressBook} />
                    <span className="text nav-text">Contact</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bottom-content">
              <li className="" onClick={logOut}>
                <a href="#">
                  {/* <i className="bx bx-log-out icon"></i> */}
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
                {/* <span className="mode-text text">{mode}</span> */}

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

      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand fs-4 fw-bold text-light" href="/">
              {" "}
              <Fade right>SkyAural</Fade>
            </a>
            {/* <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            > */}
            {/* <span className="navbar-toggler-icon"></span>
            </button> */}

            <button className="header_menu" onClick={() => setBurgerStatus(true)}>Menu</button>
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
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
