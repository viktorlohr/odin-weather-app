const KEY = "C8H98W67P75VEZM2Y2QHH4FT9";

export async function getAllDaysRelevantData(location) {
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=${KEY}`,
    );
    const allData = await response.json();

    console.log(allData);

    const todayData = allData.currentConditions;
    const daysData = allData.days;

    const allDaysRelevantData = [todayData, ...daysData].map((d) =>
      getRelevantData(d),
    );

    return allDaysRelevantData;
  } catch {
    console.log("Could not get data");
  }
}

function getRelevantData(dayData) {
  const relevantKeys = [
    "datetime",
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

export function convertToFahrenheit(tempCelsius) {
  return tempCelsius * 1.8 + 32;
}

export async function getMockData() {
  return [
    {
      datetime: "",
      temp: 5.4,
      feelslike: 5.4,
      precip: 0,
      precipprob: 0,
      windspeed: 4,
    },
    {
      datetime: "2026-11-05",
      temp: 5.4,
      feelslike: 5.4,
      precip: 0,
      precipprob: 0,
      windspeed: 4,
    },
    {
      datetime: "2026-11-04",
      temp: 5.4,
      feelslike: 5.4,
      precip: 0,
      precipprob: 0,
      windspeed: 4,
    },
  ];
}
