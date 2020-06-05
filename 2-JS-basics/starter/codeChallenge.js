// In this challenge, Mark and John are trying to determine who has a higher BMI.
// The formula: BMI = (mass / height^2)

// Bonus for converting mass and height into metric measurements
// 1lb = 2.2kg
// 1ft = 0.3048m

// hight in inches
var markHeight = 74;
var johnHeight = 66;

// mass in lbs
var markMass = 250;
var johnMass = 183;

var markBmi = (markMass / (markHeight * markHeight)) * 100;
var johnBmi = (johnMass / (johnHeight * johnHeight)) * 100;

console.log("Mark's BMI is " + markBmi);
console.log("John's BMI is " + johnBmi);

if (markBmi > johnBmi) {
	console.log("Mark");
	var difference = markBmi - johnBmi;
} else {
	var difference = johnBmi - markBmi;
	console.log("John");
}
console.log(" is larger by " + difference);
if (difference < 1) {
	console.log("Close one!");
}

if (johnBmi > markBmi && difference <= 1) {
	console.log("John by a hair!");
} else if (markBmi > johnBmi && difference <= 1) {
	console.log("Mark by a hair!");
}