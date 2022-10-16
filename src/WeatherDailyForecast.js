import React, { useState } from "react";
import EachDayForecast from "./EachDayForecast";
import "./WeatherDailyForecast.css";
import axios from "axios";

export default function WeatherDailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="WeatherDailyForecast">
        <div className="row">
          {forecast.map(function (day, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <EachDayForecast data={day} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    const apiKey = "8542913933d6e9526040ad6e6691ada1";
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
