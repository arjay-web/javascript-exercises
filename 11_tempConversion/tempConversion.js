const convertToCelsius = function(fahrenheit) {
  let celcisius = (fahrenheit - 32) / 1.8
  return Math.round(celcisius * 10) / 10;
};

const convertToFahrenheit = function(celcisius) {
  let fahrenheit = (celcisius * 1.8) + 32;
  return Math.round(fahrenheit * 10) / 10;
};

convertToCelsius(32)
convertToFahrenheit(0)
     
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
