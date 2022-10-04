import React, { useState } from "react";
import "./WeatherDesign.css";
import axios from "axios";

export default function WeatherDesign() {
  const [weatherForecast, setWeatherForecast] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherForecast({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });
  }

  if (weatherForecast.ready) {
    return (
      <div className="WeatherDesign">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your city"
                class="form-control"
                id="weather-engine"
              ></input>
            </div>
            <div className="col-3">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </form>
        <h1 className="cityname mt-2">Kyiv</h1>
        <p>Monday, 7:00</p>
        <h1 className="temperature">
          <img
            src="https://png.pngtree.com/png-vector/20190719/ourlarge/pngtree-cloud-icon-png-image_1558213.jpg"
            alt="weather description icon"
            width={175}
            className="main-weather-icon"
          ></img>
          {weatherForecast.temperature}°C
        </h1>
        <p className="weather-description text-capitalize">
          {weatherForecast.description}
        </p>
        <div className="row">
          <div className="col-6">
            <ul className="wind">
              <li>Wind</li>
              <li>💨 {weatherForecast.wind}km/h</li>
            </ul>
          </div>
          <div className="col-6">
            <ul className="humidity">
              <li>Humidity</li>
              <li>💦 {weatherForecast.humidity}%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = "Kyiv";
    const apiKey = "8542913933d6e9526040ad6e6691ada1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
