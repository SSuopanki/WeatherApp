import { apiKey } from "../api/apikey";
import { CurrentWeather } from "../components/CurrentWeather";
import { useFetch } from "../components/useFetch";

export const Oulu = () => {
  const latitude = 65.012;
  const longitude = 25.468;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  const { data, pending, error } = useFetch(url, "Oulu");

  if (pending) {
    return (
      <div>
        <span>LOADING...</span>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <div>{error}</div>
      </div>
    );
  }

  if (!data) {
    return <div>No data was found</div>;
  }

  return (
    <div>
      <CurrentWeather data={data} />
    </div>
  );
};
