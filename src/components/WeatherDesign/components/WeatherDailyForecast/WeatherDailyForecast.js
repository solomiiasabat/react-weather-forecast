import React, { useState, useEffect } from "react";
import EachDayForecast from "./components/EachDayForecast/EachDayForecast";
import "../WeatherDailyForecast/WeatherDailyForecast.css";
import { forecastApiCall } from "./utils";

export default function WeatherDailyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  useEffect(() => {
    forecastApiCall(props.coordinates, setForecast, setLoaded);
  }, [props.coordinates]);

  if (loaded) {
    return (
      <div className="WeatherDailyForecast">
        <div className="row pe-4 pb-4">
          {forecast.map(function (day, index) {
            if (index < 5) {
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
  } else return null;
}
