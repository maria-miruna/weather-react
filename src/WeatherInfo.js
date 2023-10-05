import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-md-5 col-sm-12 text-center">
          <h1>{props.result.city}</h1>
          <p className="days">
            <FormattedDate date={props.result.date} />
          </p>
        </div>
      </div>

      <div className="row align-items-center mt-2">
        <div className="col-md-5 col-sm-12">
          <div className="d-flex flex-row justify-content-center align-items-center">
            <div className="icon">
              <WeatherIcon code={props.result.icon} />
            </div>

            <div className="d-flex flex-column">
              <div className="current-information">
                <span className="temperature"> {props.result.temperature}</span>
                °
                <span>
                  <a href="/" className="current-selected">
                    C
                  </a>
                  /<a href="/">F</a>
                </span>
              </div>
              <div className="weather-information">
                {props.result.description}
              </div>
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
              <p>{props.result.windSpeed} km/h</p>
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
              <p>{props.result.humidity}%</p>
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
