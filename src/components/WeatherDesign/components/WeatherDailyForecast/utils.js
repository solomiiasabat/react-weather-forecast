import axios from "axios";
import { apiKey } from "./constants";

export function forecastApiCall(props, onLoad, onSuccess) {
  const latitude = [props.coordinates.lat];
  const longitude = [props.coordinates.lon];
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(
    (response) => onSuccess(response.data.daily),
    () => onLoad(true)
  );
}
