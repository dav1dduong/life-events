"use strict";

// make an array of colors string array
//iterate loop through array, log each color to the console
//bonus include eachj  color to a sentence

let colors = ["red", "black", "green", "orange", "blue"];
for (let i = 0; i < colors.length; i++) {
  console.log("I love " + colors[i]);
}

// for of loop
//helpful if we need to access every elemnt in array or string

for (let favColor of colors) {
  console.log(favColor);
}
