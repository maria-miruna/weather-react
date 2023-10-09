import React from "react";

export default function Sunrise(props) {
  let sunriseTimestamp = props.sunrise * 1000;
  let timezoneOffset = props.timezone;

  let time = new Date(sunriseTimestamp + timezoneOffset * 1000);

  let hours = time.getUTCHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = time.getUTCMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <p>
      {hours}:{minutes}
    </p>
  );
}
