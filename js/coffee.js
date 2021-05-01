alert("WELCOME TO MY WEBSITE");	
let cups = prompt("How many cups of coffee have you had and would you like another one? (check your console)")


if (cups < 3) {
  answer = "Yes I'll take another cup of coffee.";
} else if(cups > 3) {
  answer = "I think I'm okay for now.";
}

console.log(answer);

let miles = prompt("How many miles has it been since your last oil change?(check your console)")

if (miles > 500 ) {
  answer = "Yes I think I need an oil change.";
} else if(miles < 500) {
  answer = "My car doesn't need an oil change yet.";
}

console.log(answer);