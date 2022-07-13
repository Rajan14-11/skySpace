import { faAddressBook, faAddressCard, faBell, faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { faArrowRightFromBracket, faChartSimple, faHouseChimney, faLeftRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import "./NewHeader.css"


function NewHeader() {
    const [active, setActive] = useState("false")
    const[mode,setMode] = useState("light")
  return (
    <>
      <nav className={`sidebar ${active ? "close" :""}`}>
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
          <FontAwesomeIcon className="toggle" icon={faLeftRight} onClick={()=>setActive(!active)}/>
        </header>

        <div className="menu-bar">
          <div className="menu">
            <li className="search-box" onClick={()=>setActive(!active)}>
              {/* <i className='bx bx-search icon'></i> */}
              <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />

              <input type="text" placeholder="Search..." />
            </li>

            <ul className="menu-links">
              <li className="nav-link">
                <a href="#">
                  {/* <i className="bx bx-home-alt icon"></i> */}
                  <FontAwesomeIcon className="icon" icon={faHouseChimney} />
                  <span className="text nav-text">Home</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  {/* <i className="bx bx-bar-chart-alt-2 icon"></i> */}
                  <FontAwesomeIcon className="icon" icon={faChartSimple} />
                  <span className="text nav-text">Services</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  {/* <i className="bx bx-bell icon"></i> */}
                  <FontAwesomeIcon className="icon" icon={faBell} />
                  <span className="text nav-text">Product</span>
                </a>
              </li>

              <li className="nav-link">
                <a href="#">
                  {/* <i className="bx bx-pie-chart-alt icon"></i> */}
                  <FontAwesomeIcon className="icon" icon={faAddressCard} />
                  <span className="text nav-text">About Us</span>
                </a>
              </li>

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
            <li className="">
              <a href="#">
                {/* <i className="bx bx-log-out icon"></i> */}
                <FontAwesomeIcon className="icon" icon={faArrowRightFromBracket} />
                <span className="text nav-text">Logout</span>
              </a>
            </li>

            <li className="mode">
              <div className="sun-moon nav-link">
                {mode=="light"?<FontAwesomeIcon className="icon-sunmoon" icon={faMoon} style={{filter:'revert'}} />:<FontAwesomeIcon className="icon-sunmoon" icon={faSun} />
                }
              </div>
              {/* <span className="mode-text text">{mode}</span> */}

              <div className="toggle-switch" onClick={()=>{
                document.body.classList.contains("dark")?setMode("light"):setMode('dark')
                document.body.classList.toggle('dark')
            }}>
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