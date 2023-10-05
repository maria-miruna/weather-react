import React, { useState } from "react";
import axios from "axios";

import "./Search.css";
import WeatherInfo from "./WeatherInfo";

export default function Search(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [result, setResult] = useState({ ready: false });

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
  }

  if (result.ready) {
    return (
      <div>
        <div className="Search">
          <div className="search-bar">
            <i className="fas fa-search p-1 search-element"></i>
            <form onSubmit={handleSearch}>
              <input
                className="search-input w-100"
                type="text"
                placeholder="Search a city"
                onChange={handleCityChange}
              />
            </form>
            <button className="location-element">
              <i className="fa-sharp fa-solid fa-location-dot"></i>
            </button>
            <button className="search-element">
              <i className="fa-solid fa-xmark p-1"></i>
            </button>
          </div>
        </div>
        <WeatherInfo result={result} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
