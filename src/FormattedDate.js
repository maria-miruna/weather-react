import React from "react";

export default function FormattedDate(props) {
  let dayOfWeek = props.date.toLocaleDateString(undefined, {
    weekday: "long",
  });
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let month = props.date.toLocaleDateString(undefined, {
    month: "long",
  });
  let day = props.date.getDate();

  return (
    <div>
      {dayOfWeek} {hours}:{minutes}, {day} {month}
    </div>
  );
}
