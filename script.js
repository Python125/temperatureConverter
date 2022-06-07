function convertToC(fahrenheit) {
  let celsius = (fahrenheit - 32)/1.8;
  return celsius;
};

console.log(convertToC(98.6));

function convertToK(fahrenheit) {
  let kelvin = ((fahrenheit-32)/1.8) + 273.15;
  return kelvin
}
console.log(convertToK(0))

function convertToF(celsius) {
  let fahrenheit = (celsius*1.8)+32;
  return fahrenheit;
};

console.log(convertToF(0));

function convertToK(celsius) {
  let kelvin = celsius + 273.15;
  return kelvin;
};

console.log(convertToK(-273.15));

