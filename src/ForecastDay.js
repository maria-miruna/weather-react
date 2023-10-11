import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let dayOfWeek = date.toLocaleDateString(undefined, {
      weekday: "short",
    });
    let day = date.getDate();
    return ` ${dayOfWeek} ${day} `;
  }

  return (
    <div>
      <p className="week-days">{day()}</p>
      <WeatherIcon code={props.data.weather[0].icon} size={50} />
      <p>
        <span className="weather-forecast-temperature-max">
          <strong> {maxTemperature()}</strong>
        </span>
        /{" "}
        <span className="weather-forecast-temperature-min">
          {minTemperature()}
        </span>
      </p>
    </div>
  );
}
