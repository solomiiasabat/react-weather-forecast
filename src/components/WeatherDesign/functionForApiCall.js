import axios from "axios";
import { apiKey } from "./constants";

export function generalApiCall(city, onSuccess) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then((response) => onSuccess(response.data));
}
