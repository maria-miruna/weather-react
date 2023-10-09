import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import MaxTemperature from "./MaxTemperature";
import MinTemperature from "./MinTemperature";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-md-5 col-sm-12 text-center">
          <h1>{props.result.city}</h1>
          <p className="days">
            <FormattedDate
              date={props.result.date}
              timezone={props.result.timezone}
            />
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
                <WeatherTemperature celsius={props.result.temperature} />
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
              <MaxTemperature
                lon={props.result.longitude}
                lat={props.result.latitude}
              />
            </div>
            <div className="col-4">
              <p>Wind</p>
              <p>{props.result.windSpeed} km/h</p>
            </div>
            <div className="col-4">
              <p>Sunrise</p>
              <Sunrise
                sunrise={props.result.sunrise}
                timezone={props.result.timezone}
              />
            </div>
            <div className="col-4">
              <p>Min</p>
              <MinTemperature
                lon={props.result.longitude}
                lat={props.result.latitude}
              />
            </div>
            <div className="col-4">
              <p>Humidity</p>
              <p>{props.result.humidity}%</p>
            </div>
            <div className="col-4">
              <p>Sunset</p>
              <Sunset
                sunset={props.result.sunset}
                timezone={props.result.timezone}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
