import React, { useState } from "react";
import axios from "axios";

import "./Search.css";
import Temperature from "./Temperature";

export default function Search() {
  const [city, setCity] = useState("");
  const [result, setResult] = useState({
    temperature: null,
    humidity: null,
    windSpeed: null,
    description: null,
    icon: null,
    name: null,
  });

  function handleSearch(event) {
    event.preventDefault();

    let apiKey = "2ad97b46f52d1ea9b55ab2f9586e1ccf";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(url).then((response) => {
      setResult({
        temperature: Math.round(response.data.main.temp),
        humidity: response.data.main.humidity,
        windSpeed: Math.round((response.data.wind.speed * 3600) / 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        name: response.data.name,
      });
    });
  }

  function showWeather(event) {
    setCity(event.target.value);
  }

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
              onChange={showWeather}
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
      <Temperature result={result} />
    </div>
  );
}
