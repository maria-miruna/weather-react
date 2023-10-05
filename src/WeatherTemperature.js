import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temperature"> {props.celsius}</span>°
        <span>
          <a href="/" className="current-selected">
            C
          </a>
          /
          <a href="/" onClick={showFahrenheit}>
            F
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <span>
        <span className="temperature"> {Math.round(fahrenheit)}</span>°
        <span>
          <a href="/" onClick={showCelsius}>
            C
          </a>
          /
          <a href="/" className="current-selected">
            F
          </a>
        </span>
      </span>
    );
  }
}
