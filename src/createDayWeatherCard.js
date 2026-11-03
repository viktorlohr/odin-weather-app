import { convertToFahrenheit, convertDate } from "./helpers.js";

export function createDayWeatherCard(dayWeatherData, isFahrenheit) {
  const tempKeys = ["temp", "feelslike", "tempmin", "tempmax"];
  const tempDisplayEntries = tempKeys.map((key) => [
    key,
    displayTemperature(dayWeatherData[key]),
  ]);
  const tempDisplayData = Object.fromEntries(tempDisplayEntries);

  const dayWeatherCard = document.createElement("div");
  dayWeatherCard.classList.add("day-weather-card");

  const dayWeatherCardSections = document.createElement("div");
  dayWeatherCardSections.classList.add("sections");

  addHeading();
  addPrecipSection();
  addTempSection();
  addWindSection();

  dayWeatherCard.appendChild(dayWeatherCardSections);
  document.getElementById("content").appendChild(dayWeatherCard);

  function addHeading() {
    const dayWeatherCardHeading = document.createElement("h2");
    let heading;
    if (dayWeatherData.datetime.split("-").length === 3) {
      heading = "Weather on " + convertDate(dayWeatherData.datetime);
    } else {
      heading = "Current weather";
    }
    dayWeatherCardHeading.textContent = heading;
    dayWeatherCard.appendChild(dayWeatherCardHeading);
  }

  function addPrecipSection() {
    const precipSectionEl = document.createElement("div");
    const precipSectionHeading = document.createElement("h3");
    precipSectionHeading.textContent = "Precipitation";
    precipSectionEl.classList.add("precip");
    const precipEl = document.createElement("div");
    precipEl.textContent = dayWeatherData.precip + " mm";
    const precipProbEl = document.createElement("div");
    precipProbEl.textContent = dayWeatherData.precipprob + " %";

    const cloudCoverEl = document.createElement("div");
    cloudCoverEl.classList.add("cloudcover");
    const cloudcover = dayWeatherData.cloudcover;
    const percipprob = dayWeatherData.precipprob;
    let textContent;
    if (cloudcover < 10) {
      textContent = "☀️";
    } else if (cloudcover < 40) {
      textContent = "🌤️";
    } else if (cloudcover < 60) {
      if (percipprob > 60) {
        textContent = "🌦️🌈";
      } else {
        textContent = "⛅️";
      }
    } else {
      if (percipprob > 60) {
        textContent = "🌧️";
      } else {
        textContent = "☁️";
      }
    }
    cloudCoverEl.textContent = textContent;

    precipSectionEl.append(
      precipSectionHeading,
      cloudCoverEl,
      precipEl,
      precipProbEl,
    );

    dayWeatherCardSections.appendChild(precipSectionEl);
  }

  function addTempSection() {
    const tempSectionEl = document.createElement("div");
    const tempSectionHeading = document.createElement("h3");
    tempSectionHeading.textContent = "Temperature";
    tempSectionEl.classList.add("temp");
    const tempEl = document.createElement("div");
    tempEl.textContent = tempDisplayData.temp;

    tempSectionEl.append(tempSectionHeading, tempEl);
    dayWeatherCardSections.append(tempSectionEl);
  }

  function addWindSection() {
    const windSectionEl = document.createElement("div");
    const windSectionHeading = document.createElement("h3");
    windSectionHeading.textContent = "Wind";
    windSectionEl.classList.add("wind");
    const windSpeedEl = document.createElement("div");
    windSpeedEl.textContent = dayWeatherData.windspeed + " km/h";
    const feelsLikeEl = document.createElement("div");
    feelsLikeEl.textContent = "feels like " + tempDisplayData.feelslike;
    windSectionEl.append(windSectionHeading, feelsLikeEl, windSpeedEl);
    dayWeatherCardSections.append(windSectionEl);
  }

  function displayTemperature(t) {
    if (isFahrenheit) {
      return convertToFahrenheit(t) + " °F";
    } else {
      return Math.trunc(t) + " °C";
    }
  }
}
