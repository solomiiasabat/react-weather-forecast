import React, { useState } from "react";
import "./WeatherDesign.css";
import Summary from "./components/Summary/Summary";
import WeatherDailyForecast from "./components/WeatherDailyForecast/WeatherDailyForecast";
import { generalApiCall } from "./functionForApiCall";

export default function WeatherDesign(props) {
  const [weatherForecast, setWeatherForecast] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherForecast({
      ready: true,
      temperature: Math.round(response.main.temp),
      description: response.weather[0].description,
      wind: response.wind.speed,
      humidity: response.main.humidity,
      city: response.name,
      date: new Date(response.dt * 1000),
      icon: response.weather[0].icon,
      coordinates: response.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    generalApiCall(city, handleResponse);
  }

  if (weatherForecast.ready) {
    return (
      <div className="WeatherDesign">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter your city"
                className="form-control"
                id="weather-engine"
                onChange={handleCityChange}
              ></input>
            </div>
            <div className="col-3">
              <button className="btn btn-primary">Search</button>
            </div>
          </div>
        </form>
        <Summary data={weatherForecast} />
        <WeatherDailyForecast coordinates={weatherForecast.coordinates} />
      </div>
    );
  } else {
    search();
    return <h1 className="text-white">Loading...</h1>;
  }
}
