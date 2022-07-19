import { faAddressBook, faAddressCard, faBell, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faCartPlus, faChartSimple, faHouseChimney, faLeftRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import "./NewHeader.css"
import { Link, NavLink } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/FirebaseInitialize';


function NewHeader(props) {
    const [active, setActive] = useState("false")
    const[mode,setMode] = useState("light")
const [showcart, setShowCart] = useState("true");

const logOut = () => {
  signOut(auth);
};

  return (
    <>
      <nav className={`sidebar ${active ? "close" : ""}`}>
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
            onClick={() => setActive(!active)}
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

                    <div className="cart-items">{props.productsInCart}</div>
                    <span className="text nav-text">Cart</span>
                  </a>
                </li>
              </NavLink>
              <div
                className="cart-btn nav-link"
                onClick={() => {
                  setShowCart(!showcart);
                }}
              ></div>

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
    </>
  );
}

export default NewHeader