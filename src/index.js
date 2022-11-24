import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import Footer from "./Footer";
import WeatherDesign from "./WeatherDesign";

import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container">
      <WeatherDesign defaultCity="Kyiv" />
      <Footer />
    </div>
  </React.StrictMode>
);
