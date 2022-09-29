import React from "react";
import "./WeatherDesign.css";

export default function WeatherDesign() {
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
        23°C
      </h1>
      <p className="weather-description">Mostly cloudy</p>
      <div className="row">
        <div className="col-6">
          <ul className="wind">
            <li>Wind</li>
            <li>💨 4km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <ul className="humidity">
            <li>Humidity</li>
            <li>💦 90%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}