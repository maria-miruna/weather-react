import React from "react";

export default function FormattedDate(props) {
  let timeZone = props.timezone * 1000;
  let localDate = new Date(props.date.getTime() + timeZone);

  let dayOfWeek = localDate.toLocaleDateString(undefined, {
    weekday: "long",
  });
  let hours = localDate.getUTCHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = localDate.getUTCMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let month = localDate.toLocaleDateString(undefined, {
    month: "long",
  });
  let day = localDate.getDate();

  return (
    <div>
      {dayOfWeek} {hours}:{minutes}, {day} {month}
    </div>
  );
}
