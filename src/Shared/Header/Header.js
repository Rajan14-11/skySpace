import React from 'react';
import './Header.css';
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';
import Pulse from 'react-reveal/Pulse';
import { Link } from 'react-router-dom';
const Header = () => {




    return (
      <div className="sticky-top">
        <nav className="navbar navbar-expand-lg ">
          <div className="container-fluid">
            <a className="navbar-brand fs-4 fw-bold text-light" href="/">
              {" "}
              <Fade right>SkyAural</Fade>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
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
                    <Link to={'/addtocart'}>
                      <Pulse>
                        <i
                          className="fs-2 pe d-flex align-items-center fa-solid fa-heart"
                          id="likeBtn"
                        ></i>
                      </Pulse>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
};

export default Header;