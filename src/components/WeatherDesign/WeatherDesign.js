import React, { useState } from "react";
import "./WeatherDesign.css";
//import axios from "axios";
import Summary from "./components/Summary/Summary";
import WeatherDailyForecast from "./components/WeatherDailyForecast/WeatherDailyForecast";
import { generalApiCall } from "./functionForApiCall";

export default function WeatherDesign(props) {
  const [weatherForecast, setWeatherForecast] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherForecast({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
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
    //const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    //const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    //axios.get(apiUrl).then(handleResponse);
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
