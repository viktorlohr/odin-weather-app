const KEY = "C8H98W67P75VEZM2Y2QHH4FT9";

export async function getWeatherData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${KEY}`,
    );
    const allData = await response.json();

    const currentData = allData.currentConditions;

    const currentRelevantData = getRelevantData(currentData);

    console.log(currentRelevantData);
  } catch {
    console.log("Could not get data");
  }
}

function getRelevantData(dayData) {
  const relevantKeys = [
    "temp",
    "maxtemp",
    "mintemp",
    "precip",
    "precipprob",
    "cloudcover",
    "windspeed",
    "feelslike",
  ];

  return Object.fromEntries(
    Object.entries(dayData).filter(([key]) => relevantKeys.includes(key)),
  );
}
