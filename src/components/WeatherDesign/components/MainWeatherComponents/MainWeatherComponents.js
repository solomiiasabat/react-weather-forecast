import React from "react";
import ForecastDate from "./components/ForecastDate";
import WeatherIcon from "./components/WeatherIcon";
import "./MainWeatherComponents.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";

export default function MainWeatherComponents(props) {
  return (
    <div className="MainWeatherComponents">
      <h1 className="cityname mt-2">{props.data.city}</h1>
      <div>
        <ForecastDate date={props.data.date} />
      </div>
      <div>
        <h1 className="temperature">
          <WeatherIcon code={props.data.icon} size={52} animate={true} />
          {props.data.temperature}°C
        </h1>
      </div>
      <div className="weather-description text-capitalize">
        {props.data.description}
      </div>
      <div className="row">
        <div className="col-6">
          <ul className="wind">
            <li>Wind</li>
            <li>
              <FontAwesomeIcon icon={faWind} /> {Math.round(props.data.wind)}{" "}
              km/h
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="humidity">
            <li>Humidity</li>
            <li>
              <FontAwesomeIcon icon={faDroplet} />{" "}
              {Math.round(props.data.humidity)}%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
