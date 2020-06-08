// // log a string to the console //////////////////////////////
// console.log("Hello World!!!");

// // setting JS variables with var
// var firstName = "John";
// var lastName = "Smith";
// var age = 28;

// // log variables to the console
// console.log(firstName);
// console.log(lastName);
// console.log(age);

// // type coersion
// console.log(firstName + " " + lastName + ", " + age);

// // assigning multiple variables simultaneously
// var job, isMarried;
// job = "Developer";
// isMarried = false;

// console.log(firstName + " is a " + age + " year-old " + job + ". is he married? " + isMarried);

// // assining a variable that's already in use will overwrite the variable
// // age = "Twenty-Eight";
// // alert function will use a pop-up window to display content
// alert(firstName + " is a " + age + " year-old " + job + ". is he married? " + isMarried);


// // prompt function will use a pop-up window to take in a response. In this case, we're overwriting a variable.
// var lastName = prompt("What is John's last name?");
// console.log(firstName + " " + lastName);

// var thisYear = 2020;
// var yearJohn = thisYear - age;
// var ageMark = 30;
// var johnOlder = age > ageMark;
// console.log(johnOlder);
// console.log(yearJohn);

// console.log(thisYear / 10);

// var nextYear = thisYear++;
// console.log(nextYear);

/////////////////////////////////////////////////////////////

var firstName = "Phil";
var lastName = "DeLong";
var jobTitle = "Software Developer";
var age = 30;

// if (age > 18) {
// 	console.log(firstName + " " + lastName + " is an adult");
// 	console.log("Should have known, they're a " + age + " year-old " + jobTitle + "...");
// } else {
// 	console.log(firstName + " " + lastName + " is not an adult");
// 	console.log("They're only " + age + "!");
// }


age >= 18 ? console.log(firstName + " is an adult.")
: console.log(firstName + " is not an adult")

var adult = age >= 18 ? "adult" : "child";
console.log(adult);

var job = "teacher";

switch (job) {
	case "teacher":
		console.log(firstName + " is a teacher.");
		break;
	case "driver":
		console.log(firstName + " is a driver.");
		break;
	case "designer":
		console.log(firstName + " is a designer.");
		break;
	default:
		console.log(firstName + " does something else.");
}