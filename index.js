/*
Variables defined in the test suite:
- oldID
- currentAge

You should NOT try to redefine any of the above variables.
*/

// Write your code below this line!
const newID = 1000000000 + oldID;
let ageIsValid;
if (Number.isInteger(currentAge)){
  ageIsValid=true;
} else{
  ageIsValid = false;
}

let randomNumber = Math.random()*20;
let randomInteger = Math.floor(randomNumber);
let randomUserID = Math.ceil(Math.random()*20) + 1000000000;
