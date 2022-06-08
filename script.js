function convertToC(fahrenheit) {
  let celsius = (fahrenheit - 32)/1.8;
  return celsius;
};

console.log(Math.round(convertToC(84)));

function convertToK(fahrenheit) {
  let kelvin = ((fahrenheit-32)/1.8) + 273.15;
  return kelvin
}
console.log(Math.round(convertToK(0)));

function convertToF(celsius) {
  let fahrenheit = (celsius*1.8)+32;
  return fahrenheit;
};

console.log(Math.round(convertToF(0)));

function convertToK(celsius) {
  let kelvin = celsius + 273.15;
  return kelvin;
};

console.log(convertToK(0));

function convertToF(kelvin) {
  let fahrenheit = ((kelvin-273.15) *1.8) +32;
  return fahrenheit
}
console.log(convertToF(100))

function convertToC(kelvin) {
  let celsius = kelvin - 273.15;
  return celsius
}
console.log(convertToC(900))
