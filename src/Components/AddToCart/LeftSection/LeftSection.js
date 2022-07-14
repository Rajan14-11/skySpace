import React, { useState } from 'react'
import './LeftSection.css'
function LeftSection(props) {

  const [image, setImage] = useState(props.mobilePic4);
  return (
    <>
      <div className="content">
        <div className="large-img">
          <img src={image} alt="big-image" />
        </div>
        <div className="small-images">
          <div className="img-1">
            <img
              src={props.mobilePic1}
              onClick={() => setImage(props.mobilePic1)}
            />
          </div>
          <div className="img-1">
            <img
              src={props.mobilePic12}
              onClick={() => setImage(props.mobilePic2)}
            />
          </div>
          <div className="img-2">
            <img
              src={props.mobilePic3}
              onClick={() => setImage(props.mobilePic3)}
            />
          </div>
        </div>

        <hr />

        <div className="description">
          <div className="d-grid gap-2 ">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle descbtn"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Description
              </button>
              <ul className="dropdown-menu">
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
                  <a className="dropdown-item" href="#">
                    <strong>Tasting Notes: </strong>Cocoa / Brown Sugar
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-grid gap-2">
            <div className="btn-group">
              <button
                type="button"
                className="btn btn-primary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Customer Reviews (6)
              </button>
              <ul className="dropdown-menu">
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
                  <a className="dropdown-item" href="#">
                    Tasting Notes: Cocoa / Brown Sugar
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
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