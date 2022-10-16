import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function EachDayForecast(props) {
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
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="EachDayForecast">
      <div className="WeatherDay">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={38} animate={true} />
      <div className="dailyTemperatures">
        <span className="Temperature-max">{maxTemperature()}</span>
        <span className="Temperature-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
