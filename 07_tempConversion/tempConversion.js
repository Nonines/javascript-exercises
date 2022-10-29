const ftoc = function(fahrenheit) {
  // take in a fahr. value and return it's equivalent in celsius
  // ((f - 32) * 5) / 9  math formula

  const celsius = ((fahrenheit - 32) * 5) / 9;
  const roundedCelsius = +celsius.toFixed(1);
  return roundedCelsius;
};

const ctof = function(celsius) {
  // take in a cels. value and return it's equivalent in fahrenheit
  // ((c * 9) / 5) + 32  formula

  const fahrenheit = ((celsius * 9) / 5) + 32;
  const roundedFahrenheit = +fahrenheit.toFixed(1);
  return roundedFahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
