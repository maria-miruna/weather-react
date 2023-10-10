import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": { icon: "CLEAR_DAY", color: "goldenrod" },
    "01n": { icon: "CLEAR_NIGHT", color: "#045D8D" },
    "02d": { icon: "PARTLY_CLOUDY_DAY", color: "goldenrod" },
    "02n": { icon: "PARTLY_CLOUDY_NIGHT", color: "#045D8D" },
    "03d": { icon: "PARTLY_CLOUDY_DAY", color: "goldenrod" },
    "03n": { icon: "PARTLY_CLOUDY_NIGHT", color: "#045D8D" },
    "04d": { icon: "CLOUDY", color: "#045D8D" },
    "04n": { icon: "CLOUDY", color: "#045D8D" },
    "09d": { icon: "RAIN", color: "#045D8D" },
    "09n": { icon: "RAIN", color: "#045D8D" },
    "10d": { icon: "RAIN", color: "#045D8D" },
    "10n": { icon: "RAIN", color: "#045D8D" },
    "11d": { icon: "RAIN", color: "#045D8D" },
    "11n": { icon: "RAIN", color: "#045D8D" },
    "13d": { icon: "SNOW", color: "#045D8D" },
    "13n": { icon: "SNOW", color: "#045D8D" },
    "50d": { icon: "FOG", color: "#045D8D" },
    "50n": { icon: "FOG", color: "#045D8D" },
  };

  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code].icon}
      color={codeMapping[props.code].color}
      size={props.size}
      animate={true}
    />
  );
}
