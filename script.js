document.write("JavaScript works!");

console.log("Hello console!");
console.warn("This is only a test!");

let myName = "Meek";
let workFromHome = true;
let side = 15;
let radius = 10;
/* all different ways I learned to print things to the console from 
existing prperties */
let wfhAnswer = ` ${myName} work from home: ${workFromHome}`;
let length = `The lenght of each side of the square is ${side}`

let squareArea = side * side;
let squarePerimeter = 4 * side;
let circleArea = Math.PI * radius * radius;
let circlePerimeter=  2 * Math.PI  * radius




console.log("My name is " + myName)
console.log(wfhAnswer)
console.log(length)
console.log( `The radius of a circle is ${radius * 1}`)
console.log(squareArea)
console.log(squarePerimeter)
console.log(circleArea)
console.log(circlePerimeter)

let travelOptions=["foot","bike","car","airplane"];

console.log(`1) ${travelOptions[0]}`);
console.log(`2) ${travelOptions[1]}`);
console.log(`3) ${travelOptions[2]}`);
console.log(`4) ${travelOptions[3]}`);

var travelType = prompt("How would you like to travel")

console.log(`Travel Type: ${travelType}`);

// calculating cost and time
let distance = 100;
let time = 0;
let cost = 0;

// if...else statements for travel options
if (travelType === "foot") {
    console.log("Walking is free! Speed is 3mph.");
    cost = 0;
    time = distance / 3;
  } else if (travelType === "bike") {
    let rentBike = prompt("Do you want to rent a bike? (yes/no)");
    if (rentBike === "yes") {
      console.log("Bike rental is $45! Speed is 10mph.");
      cost = 45;
    } else {
      console.log("Biking is free! Speed is 10mph.");
      cost = 0;
    }
    time = distance / 10;
  } else if (travelType === "car") {
    console.log("Driving is $0.25/mi. Speed is 60mph.");
    cost = 0.25 * distance;
    time = distance / 60;
  } else if (travelType === "airplane") {
    let passengerCount = prompt("How many passengers?");
    console.log("Flying is $0.10/mi. Speed is 400mph.");
    cost = 0.10 * distance;
    time = distance / 400;
  } else {
    console.log(`Sorry. ${travelType} is an invalid option.`);
  }
  console.log(`Traveling ${distance} miles by ${travelType} took ${time} hours and cost $${cost}!`);

 
// Build and display the cost bar
let costBar = "Cost: ";
for (let i = 0; i < cost; i++) {
  costBar += "$";
}
console.log(costBar);

// Build and display the time bar
let timeBar = "Time: ";
for (let i = 0; i < time; i++) {
  timeBar += "/";
}
console.log(timeBar);

console.log(costBar); // "Cost: $$$$$"