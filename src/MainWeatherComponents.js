import React from "react";
import ForecastDate from "./ForecastDate";
import WeatherIcon from "./WeatherIcon";

export default function MainWeatherComponents(props) {
  return (
    <div className="MainWeatherComponents">
      <h1 className="cityname mt-2">{props.data.city}</h1>
      <p>
        <ForecastDate date={props.data.date} />
      </p>
      <div>
        <h1 className="temperature">
          <WeatherIcon code={props.data.icon} size={52} animate={false} />
          {props.data.temperature}°C
        </h1>
      </div>
      <p className="weather-description text-capitalize">
        {props.data.description}
      </p>
      <div className="row">
        <div className="col-6">
          <ul className="wind">
            <li>Wind</li>
            <li>💨 {Math.round(props.data.wind)}km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="humidity">
            <li>Humidity</li>
            <li>💦 {Math.round(props.data.humidity)}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
