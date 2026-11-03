import { createDayWeatherCard } from "./createDayWeatherCard.js";
import { getWeatherData } from "./getWeatherData.js";

async function renderDayWeather() {
  const dayWeatherData = await getWeatherData("Regensburg");
  createDayWeatherCard(dayWeatherData);
}

renderDayWeather();
