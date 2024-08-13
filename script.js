"use strict";

const fullName = "David Duong";
let age = "21";
const birthday = "August 5";
const pineapplePizza = false;
let lifeEvents = [
  "I was born in Grand Rapids, Michigan",
  "Moved to South Carolina",
  "I like to gym",
  "I like to play video games",
];

if (pineapplePizza === true) {
  console.log(
    "My name is " +
      fullName +
      " and I like pineapple on pizza. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday
  );
} else {
  console.log(
    "My name is " +
      fullName +
      " and I do not like pineapple on pizza. I am currently " +
      age +
      " years old and my birthday is on " +
      birthday
  );
}

for (let i = 0; i < 4; i++) {
  console.log(lifeEvents[i]);
}
let counter = 0;

while (true) {
  let randomNumber = Math.floor(Math.random() * 10) + 1;
  if (randomNumber !== 5) {
    counter++;
    console.log(randomNumber + "!==5");
  } else {
    counter++;
    console.log("5===5");
    console.log(
      "It took " + counter + " iterations to randomly generate the number 5"
    );
    break;
  }
}
