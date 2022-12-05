import React from "react";
import WeatherIcon from "../../../WeatherIcon";
import "./EachDayForecast.css";

export default function EachDayForecast(props) {
  function maxTemperature() {
    const temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    const temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    const date = new Date(props.data.dt * 1000);
    const day = date.getDay();

    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

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
