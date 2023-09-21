import React from "react";

import "./Temperature.css";

export default function Temperature() {
  return (
    <div className="Temperature">
      <div className="row align-items-center mt-2">
        <div className="col-md-5 col-sm-12">
          <div className="d-flex flex-row justify-content-center align-items-center">
            <img className="icon" src="" alt="" />
            <div className="d-flex flex-column">
              <div className="current-information">
                <span className="temperature"> 17</span>°
                <span>
                  <a href="/" className="current-selected">
                    C
                  </a>
                  /<a href="/">F</a>
                </span>
              </div>
              <div className="weather-information">Partly cloudly</div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-sm-12">
          <div className="row py-3 grid text-center highlight-cell">
            <div className="col-4">
              <p>Max</p>
              <p>22°</p>
            </div>
            <div className="col-4">
              <p>Wind</p>
              <p>11km/h</p>
            </div>
            <div className="col-4">
              <p>Sunrise</p>
              <p>07:19</p>
            </div>
            <div className="col-4">
              <p>Min</p>
              <p>14°</p>
            </div>
            <div className="col-4">
              <p>Humidity</p>
              <p>60%</p>
            </div>
            <div className="col-4">
              <p>Sunset</p>
              <p>19:55</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
