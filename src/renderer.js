import { createDayWeatherCard } from "./createDayWeatherCard.js";
import { getAllDaysRelevantData } from "./getWeatherData.js";
import { FahrenheitToggle } from "./fahrenheitToggle.js";

export async function render() {
  document.getElementById("content").replaceChildren();

  FahrenheitToggle.addBtn();
  const allDaysRelevantData = await getAllDaysRelevantData();
  allDaysRelevantData.forEach((d) =>
    createDayWeatherCard(d, FahrenheitToggle.isFahrenheit),
  );
}
