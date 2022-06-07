function convertToF(kelvin) {
  let fahrenheit = ((kelvin-273.15) *1.8) +32;
  return fahrenheit
}
console.log(convertToF(100))




function convertToK(fahrenheit) {
  let kelvin = ((fahrenheit-32)/1.8) + 273.15;
  return kelvin
}
console.log(convertToK(0))
