export function createDayWeatherCard(dayWeatherData) {
  const dayWeatherCard = document.createElement("div");
  dayWeatherCard.classList.add("day-weather-card");

  const dayWeatherCardHeading = document.createElement("h2");
  let heading;
  if (dayWeatherData.datetime.split("-").length === 3) {
    heading = "Weather on " + heading;
  } else {
    heading = "Current weather";
  }
  dayWeatherCardHeading.textContent = heading;
  dayWeatherCard.appendChild(dayWeatherCardHeading);

  const dayWeatherCardSections = document.createElement("div");
  dayWeatherCardSections.classList.add("sections");

  const precipSectionEl = document.createElement("div");
  const precipSectionHeading = document.createElement("h3");
  precipSectionHeading.textContent = "Precipitation";
  precipSectionEl.classList.add("precip");
  const precipEl = document.createElement("div");
  precipEl.textContent = dayWeatherData.precip;
  const precipProbEl = document.createElement("div");
  precipProbEl.textContent = dayWeatherData.precipprob;
  precipSectionEl.append(precipSectionHeading, precipEl, precipProbEl);
  dayWeatherCardSections.appendChild(precipSectionEl);

  const tempSectionEl = document.createElement("div");
  const tempSectionHeading = document.createElement("h3");
  tempSectionHeading.textContent = "Temperature";
  tempSectionEl.classList.add("temp");
  const tempEl = document.createElement("div");
  tempEl.textContent = dayWeatherData.temp;
  tempSectionEl.append(tempSectionHeading, tempEl);
  dayWeatherCardSections.append(tempSectionEl);

  const windSectionEl = document.createElement("div");
  const windSectionHeading = document.createElement("h3");
  windSectionHeading.textContent = "Wind";
  windSectionEl.classList.add("wind");
  const windSpeedEl = document.createElement("div");
  windSpeedEl.textContent = dayWeatherData.windspeed;
  const feelsLikeEl = document.createElement("div");
  feelsLikeEl.textContent = dayWeatherData.feelslike;
  windSectionEl.append(windSectionHeading, windSpeedEl, feelsLikeEl);
  dayWeatherCardSections.append(windSectionEl);

  dayWeatherCard.appendChild(dayWeatherCardSections);
  document.getElementById("content").appendChild(dayWeatherCard);
}
