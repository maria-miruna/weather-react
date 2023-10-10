import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function FutureForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "62bc298785543e137bc6756e514eb1c3";
  let longitude = props.lon;
  let latitude = props.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div>
      <p className="p-3">Five day forecast</p>
      <div className="row d-flex flex-nowrap overflow-auto gap-2 text-center pb-3">
        <div className="weather-item col">
          <p className="week-days">Thu 11</p>
          <WeatherIcon code="01d" size={50} />
          <p>
            <span className="weather-forecast-temperature-max">
              <strong>28°</strong>
            </span>
            / <span className="weather-forecast-temperature-min">10°</span>
          </p>
        </div>
      </div>
    </div>
  );
}
