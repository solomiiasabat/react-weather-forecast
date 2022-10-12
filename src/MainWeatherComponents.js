import React from "react";
import ForecastDate from "./ForecastDate";

export default function MainWeatherComponents(props) {
  return (
    <div className="MainWeatherComponents">
      <h1 className="cityname mt-2">{props.data.city}</h1>
      <p>
        <ForecastDate date={props.data.date} />
      </p>
      <h1 className="temperature">
        <img
          src="https://png.pngtree.com/png-vector/20190719/ourlarge/pngtree-cloud-icon-png-image_1558213.jpg"
          alt="weather description icon"
          width={175}
          className="main-weather-icon"
        ></img>
        {props.data.temperature}°C
      </h1>
      <p className="weather-description text-capitalize">
        {props.data.description}
      </p>
      <div className="row">
        <div className="col-6">
          <ul className="wind">
            <li>Wind</li>
            <li>💨 {props.data.wind}km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="humidity">
            <li>Humidity</li>
            <li>💦 {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
