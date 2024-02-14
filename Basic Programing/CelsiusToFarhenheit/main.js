// JavaScript Program to Convert Celsius to Fahrenheit

// Using the formula with a custom function

function converCelsius(degree) {
    return (9 / 5 * degree) + 32;

}
console.log(converCelsius(37).toFixed(2));


// Using the arrow function and template literals

changeCelsius = (C) =>
    `${C} Celsius is equal to ${(9 / 5 * C) + 32} Fahrenheit.`;


let C = 20;
console.log(changeCelsius(C));

