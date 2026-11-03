import { createDayWeatherCard } from "./createDayWeatherCard.js";
import { WeatherData } from "./weatherData.js";
import { FahrenheitToggle } from "./fahrenheitToggle.js";

export async function render() {
  document.getElementById("content").replaceChildren();
  const location = document.getElementById("location").value.trim();

  if (!location) {
    return;
  }

  FahrenheitToggle.addBtn();
  const allDaysRelevantData =
    await WeatherData.getAllDaysRelevantData(location);
  allDaysRelevantData.forEach((d) =>
    createDayWeatherCard(d, FahrenheitToggle.isFahrenheit),
  );
}
