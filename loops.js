"use strict";

let age = 15;
while (age  < 18) { // 
  console.log(`You are ${age} years old. That is not old enough`);
  age++; // increment +1 every loop 
 
  console.log(`Happy birthday, You are ${age} years old`);
  if(age == 17) {
    console.log(`Just one more year to go before you are 18`);
  }
}

let countdown = 10;

while (countdown > 0) {
  console.log(`Countdown: ${countdown}`);
  countdown--;
}
console.log("Ready for launch!");
