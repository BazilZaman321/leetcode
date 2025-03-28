//    2469. Convert the Temperature

var convertTemperature = function(celsius) {
    return [celsius + 273.15, celsius * 1.80 + 32.00]; 
};


console.log(convertTemperature(36.50));
console.log(convertTemperature(122.11)); 
console.log(convertTemperature(0)); 
