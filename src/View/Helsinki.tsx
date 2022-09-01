import { apiKey } from "../api/apikey";
import { CurrentWeather } from "../components/CurrentWeather";
import { useFetch } from "../components/useFetch";

export const Helsinki = () => {
  const latitude = 60.192059;
  const longitude = 24.945831;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  const { data, pending, error } = useFetch(url, "Helsinki");

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
