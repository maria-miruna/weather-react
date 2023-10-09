import React, { useState, useEffect } from "react";
import axios from "axios";

export default function MaxTemperature(props) {
  const [maximumTemperature, setMaximumTemperature] = useState(null);

  useEffect(() => {
    function search() {
      let apiKey = "62bc298785543e137bc6756e514eb1c3";
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;

      axios.get(apiUrl).then((response) => {
        let maxTemp = Math.round(response.data.daily[0].temp.max);

        setMaximumTemperature(maxTemp);
      });
    }

    search();
  });

  return <p>{maximumTemperature}°C</p>;
}
