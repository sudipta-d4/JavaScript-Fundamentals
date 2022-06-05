// Set Kelvin to 0
const kelvin = 0;

// Today's Forecast in Kelvin
const kelvin = 293;

// Today's Forecast in Celsius
const celsius = kelvin - 273;

// Today's Forecast in Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

// Convert from Celsius to Fahrenheit
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert Celsius to Newton
let newton = celsius * (33 / 100);
 
// Round Down
newton = Math.floor(newton);
 
console.log(`The temperature is ${newton} degrees Newton.`);
