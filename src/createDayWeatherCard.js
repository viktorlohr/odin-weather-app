export function createDayWeatherCard(dayWeatherData) {
  const dayWeatherCard = document.createElement("div");
  dayWeatherCard.classList.add("day-weather-card");

  const precipSectionEl = document.createElement("div");
  precipSectionEl.classList.add("precip");
  const precipEl = document.createElement("div");
  precipEl.textContent = dayWeatherData.precip;
  const precipProbEl = document.createElement("div");
  precipProbEl.textContent = dayWeatherData.precipprob;
  precipSectionEl.append(precipEl, precipProbEl);
  dayWeatherCard.appendChild(precipSectionEl);

  const tempSectionEl = document.createElement("div");
  tempSectionEl.classList.add("temp");

  const windSectionEl = document.createElement("div");
  windSectionEl.classList.add("wind");
}
