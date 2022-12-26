import axios from "axios";
import { apiKey } from "../../constants";

export function forecastApiCall(props, onSuccess, onLoad) {
  const latitude = [props.lat];
  const longitude = [props.lon];
  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios
    .get(apiUrl)
    .then(
      (response) => onSuccess(response.data.daily),
      () => onLoad(true)
    )
    .then((error) => error);
}

//(response) => onSuccess(response.data.daily),
//() => onLoad(true)
