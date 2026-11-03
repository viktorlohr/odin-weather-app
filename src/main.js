import { createDayWeatherCard } from "./createDayWeatherCard.js";
// import { getWeatherData } from "./getWeatherData.js";

async function renderDayWeather() {
  // const dayWeatherdData = getWeatherData("Regensburg");
  const dayWeatherData = getMockData();
  console.log(dayWeatherData);
  createDayWeatherCard(dayWeatherData);
}

renderDayWeather();

function getMockData() {
  return {
    datetime: "2026-11-04",
    temp: 5.4,
    feelslike: 5.4,
    precip: 0,
    precipprob: 0,
    windspeed: 4,
  };
}
