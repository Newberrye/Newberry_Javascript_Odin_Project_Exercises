const ftoc = function(tempF) {
  let celsius = 0;
  celsius = (tempF - 32) * 5 / 9;
  celsius = Number.parseFloat(celsius).toFixed(1);
  celsius = Number(celsius);
  return celsius;
};

const ctof = function(tempC) {
  let fahr = 0;
  fahr = (tempC * 9 / 5) + 32;
  fahr = Number.parseFloat(fahr).toFixed(1);
  fahr = Number(fahr);
  return fahr;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
