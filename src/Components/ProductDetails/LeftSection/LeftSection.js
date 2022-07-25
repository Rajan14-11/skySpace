import React, { useState } from "react";
import "./LeftSide.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

function LeftSection(props) {
  //  console.log(props)
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
      </div>
    </>
  );
}

export default LeftSection;
