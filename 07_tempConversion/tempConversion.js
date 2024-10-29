const convertToCelsius = function(val) {
  return Math.round(((val - 32) / 1.8) * 10) / 10;
};

const convertToFahrenheit = function(val) {
  return Math.round((val * 1.8 + 32) * 10) / 10;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
