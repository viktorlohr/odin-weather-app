import { createDayWeatherCard } from "./createDayWeatherCard.js";
import { getMockData } from "./getWeatherData.js";
import { FahrenheitToggle } from "./fahrenheitToggle.js";

export async function render() {
  document.getElementById("content").replaceChildren();

  FahrenheitToggle.addBtn();
  const WeatherData = await getMockData();
  WeatherData.forEach((d) =>
    createDayWeatherCard(d, FahrenheitToggle.isFahrenheit),
  );
}
