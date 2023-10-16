import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [result, setResult] = useState({ ready: false });
  const [clear, setClear] = useState("");

  function handleResponse(response) {
    setResult({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      windSpeed: Math.round((response.data.wind.speed * 3600) / 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      timezone: response.data.timezone,
      longitude: response.data.coord.lon,
      latitude: response.data.coord.lat,
    });
  }

  function search() {
    let apiKey = "2ad97b46f52d1ea9b55ab2f9586e1ccf";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then(handleResponse);
  }

  function handleSearch(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    setClear(event.target.value);
  }

  function deleteContent() {
    setClear("");
  }

  if (result.ready) {
    return (
      <div>
        <div className="Weather">
          <div className="search-bar">
            <i className="fas fa-search p-1 search-element"></i>
            <form onSubmit={handleSearch}>
              <input
                className="search-input w-100"
                type="text"
                placeholder="Search a city"
                value={clear}
                onChange={handleCityChange}
              />
            </form>
            <button className="search-element" onClick={deleteContent}>
              <i className="fa-solid fa-xmark p-1"></i>
            </button>
          </div>
        </div>
        <WeatherInfo result={result} />
        <Forecast lon={result.longitude} lat={result.latitude} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
