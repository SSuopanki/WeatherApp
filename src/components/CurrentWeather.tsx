import styled from "@emotion/styled";
import { AxiosResponse } from "axios";
import { WeatherData } from "../api/types";

interface Prop {
  data: AxiosResponse<WeatherData, WeatherData>;
}

export const CurrentWeather = (prop: Prop) => {
  const main = prop.data.data.main;
  const name = prop.data.data.name;
  const ano = prop.data.data.wind;
  if (!prop) return <></>;
  return (
    <Container>
      <TitleDiv>Current Weather of {name}</TitleDiv>
      <DataContainer>
        <WeatherDiv>
          <TextDiv>Current temperature: {main.temp} Celsius</TextDiv>
          <TextDiv>Feels like: {main.feels_like} Celsius</TextDiv>
          <TextDiv>Humidity: {main.humidity} %</TextDiv>
          <TextDiv>Pressure: {main.pressure} hPa</TextDiv>
          <TextDiv>Max Temperature: {main.temp_min} Celsius</TextDiv>
          <TextDiv>Min Temperature: {main.temp_max} Celsius</TextDiv>
        </WeatherDiv>
        <WeatherDiv>
          <TextDiv>Wind</TextDiv>
          <TextDiv>Wind direction: {ano.deg} degrees</TextDiv>
          <TextDiv>Wind Speed: {ano.speed} m/s</TextDiv>
        </WeatherDiv>
      </DataContainer>
    </Container>
  );
};

const DataContainer = styled.div`
  flex-direction: row;
  display: flex;
`;
const Container = styled.div`
  background-color: #071f4c;
  color: white;
  border-radius: 10px;
`;

const WeatherDiv = styled.div`
  margin: 2rem;
`;

const TitleDiv = styled.div`
  font-size: 2rem;
  padding-left: 2rem;
  padding-top: 1rem;
`;

const TextDiv = styled.div`
  margin: 1rem;
  font-size: 20px;
`;
