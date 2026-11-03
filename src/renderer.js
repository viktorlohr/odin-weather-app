import { createDayWeatherCard } from "./createDayWeatherCard.js";
import { WeatherData } from "./weatherData.js";
import { FahrenheitToggle } from "./fahrenheitToggle.js";

export async function render() {
  document.getElementById("content").replaceChildren();

  FahrenheitToggle.addBtn();
  const allDaysRelevantData = await WeatherData.getAllDaysRelevantData();
  allDaysRelevantData.forEach((d) =>
    createDayWeatherCard(d, FahrenheitToggle.isFahrenheit),
  );
}
