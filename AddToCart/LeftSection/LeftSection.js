import React, { useState } from 'react'
import './LeftSection.css'
function LeftSection() {

  const [image, setImage] = useState("/imgs/bg.jpg");
  return (
    <>
      <div className="content">
        <div className="large-img">
          <img src={image} alt="big-image" />
        </div>
        <div className="small-images">
          <div className="img-1">
            <img src="/imgs/bg.jpg" onClick={() => setImage("/imgs/bg.jpg")} />
          </div>
          <div className="img-1">
            <img src="/imgs/bg2.webp" onClick={() => setImage("/imgs/bg2.webp")}/>
          </div>
          <div className="img-2">
            <img src="/imgs/bg3.jpg" onClick={() => setImage("/imgs/bg3.jpg")}/>
          </div>
        </div>

        <hr />

        <div className="description">
          <div class="d-grid gap-2 ">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-primary dropdown-toggle descbtn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Description
              </button>
              <ul class="dropdown-menu">
                <li>
                  <p className="dropdown-item paragraph">
                    {" "}
                    That’s right, Make it Rain! If money ain’t pouring down on
                    you, drink your favorite brew and get back to the grind.
                    This balanced and smooth blend will keep you motivated and
                    focused on your goals to chase that paper and have it coming
                    down like that paper should!
                  </p>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    <strong>Tasting Notes: </strong>Cocoa / Brown Sugar
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="d-grid gap-2">
            <div class="btn-group">
              <button
                type="button"
                class="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Customer Reviews (6)
              </button>
              <ul class="dropdown-menu">
                <li>
                  <p className="dropdown-item">
                    That’s right, Make it Rain! If money ain’t pouring down on
                    you, drink your favorite brew and get back to the grind.
                    This balanced and smooth blend will keep you motivated and
                    focused on your goals to chase that paper and have it coming
                    down like that paper should!
                  </p>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Tasting Notes: Cocoa / Brown Sugar
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LeftSection