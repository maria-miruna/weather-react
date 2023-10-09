import React from "react";

export default function Sunset(props) {
  let sunsetTimestamp = props.sunset * 1000;
  let timezoneOffset = props.timezone;

  let time = new Date(sunsetTimestamp + timezoneOffset * 1000);

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
