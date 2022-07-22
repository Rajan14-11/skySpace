import React, { useState } from "react";
import "./Filter.css";
import Typography from "@mui/material/Typography";
import Slider from "@mui/material/Slider";
import { Checkbox } from "@mui/material";

function Filter() {
  const [value, setValue] = useState([1000, 10000]);

  const rangeSelector = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="filter_conatiner">
        <div className="inner_content">
          <div className="filter_heading">
            <h2>Filters</h2>
            <i
                className="fas fa-window-close close-button"

              ></i>
          </div>

          <div className="hr">
            <hr />
          </div>

          <div className="categories">
            <div className="categories_title heading">
              <h3>categories</h3>
            </div>
            <span className="main_category">Mobiles & Accessories</span>
            <div className="sub_category">
              <h4>Mobiles</h4>
            </div>
          </div>

          <div className="hr">
            <hr />
          </div>

          <div className="price">
            <div className="slider">
              <Typography id="range-slider" className="heading" gutterBottom>
                Select Price Range:
              </Typography>
              <Slider
                value={value}
                min={0}
                max={10000}
                onChange={rangeSelector}
                valueLabelDisplay="auto"
              />

              <div className="price_range">
                <span>{value[0]}</span>

                <span>to</span>
               <span>{value[1]}</span>
              </div>
            </div>
          </div>

          <div className="hr">
            <hr />
          </div>

          <div className="brands">
            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    <h4 className="heading">Brands</h4>
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="brand">
                      <Checkbox />
                      <span>Iphone</span>
                    </div>
                    <div className="brand">
                      <Checkbox />
                      <span>Samsung</span>
                    </div>
                    <div className="brand">
                      <Checkbox />
                      <span>MI</span>
                    </div>
                    <div className="brand">
                      <Checkbox />
                      <span>Realme</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hr">
            <hr />
          </div>
          <div className="customer_ratings">
            <div className="accordion" id="accordionExample1">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="true"
                    aria-controls="collapseTwo"
                  >
                    <h3 className="heading">Customer Ratings</h3>
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample1"
                >
                  <div className="accordion-body">
                    <div className="brand">
                      <Checkbox />
                      <span>4 ⭐ & above</span>
                    </div>
                    <div className="brand">
                      <Checkbox />
                      <span>3 ⭐ & above</span>
                    </div>
                    <div className="brand">
                      <Checkbox />
                      <span>2 ⭐ & above</span>
                    </div>
                    <div className="brand">
                      <Checkbox />
                      <span>1 ⭐ & above</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hr">
            <hr />
          </div>

          <div className="ram">
            <div className="accordion" id="accordionExample2">
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="true"
                    aria-controls="collapseThree"
                  >
                    <h3 className="heading">RAM</h3>
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample2"
                >
                  <div className="accordion-body">
                    <div className="brand">
                      <Checkbox />
                      <span>8 GB</span>
                    </div>
                    <div className="brand">
                      <Checkbox />
                      <span>6 GB</span>
                    </div>
                    <div className="brand">
                      <Checkbox />
                      <span>4 Gb</span>
                    </div>
                    <div className="brand">
                      <Checkbox />
                      <span>Less than 4 GB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hr">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
