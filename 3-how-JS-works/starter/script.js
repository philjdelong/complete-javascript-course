///////////////////////////////////////
// Lecture: Hoisting
function start() {
    var a = "Hey";
    first();
    function first() {
        var b = "Hi";
        second();
        function second() {
            var c = "Hello";
            console.log(a, b, c);
        }
    }
}
start();

var phil = {
    name: "Phil",
    age: 30,
    showInfo: function() {
        console.log("Phil is", this);
    }
}
phil.showInfo();

function scopeThis() {
    console.log(this);
}
scopeThis();

///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/



///////////////////////////////////////
// Lecture: The this keyword