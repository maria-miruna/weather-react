import React, { useState } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";

import "./Forecast.css";

export default function FutureForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <p className="p-3">Five day forecast</p>
        <div className="row d-flex flex-nowrap overflow-auto gap-2 text-center pb-3">
          <div className="weather-item col">
            <ForecastDay data={forecast[1]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "62bc298785543e137bc6756e514eb1c3";
    let longitude = props.lon;
    let latitude = props.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
