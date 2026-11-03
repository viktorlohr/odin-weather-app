export function convertDate(isoDate) {
  const [year, month, day] = isoDate.split("-");
  return day + " / " + month + " / " + year;
}

export function convertToFahrenheit(tempCelsius) {
  return Math.trunc(tempCelsius * 1.8 + 32);
}
