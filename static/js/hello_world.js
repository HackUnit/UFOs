// Printing a string with JavaScript

console.log("Hello, world!")

// Simple JavaScript console.log statement

function printHello() {

    console.log("Hello there!");

}

// Takes two numbers and adds them

// Python code:
//
// def addition(a, b):
//     
//    return a + b

// JavaScript code:

function addition(a, b) {
    
    return a + b;
}

console.log(addition(4, 5));

// Using the Simple JavaScript console.log funtion and making it into an arrow function:

printHello = () => "Hello there!";

// Another original addition function to exemplify arrow functions

function addition(a, b) {

    return a + b;

}

// Previous code converted to an arrow function

addition = (a,b) => a + b;


// Original doubleAddition functions

function doubleAddition(c, d) {

    var total = addition(c, d) * 2;

    return total;

}


// Previous code converted to an arrow function

doubleAddition = (c, d) => addition(c, d) * 2;


// For loop practice in JS

let friends = ["Sarah", "Greg", "Cindy", "Jeff"];

// Creating for loop

function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
      console.log(userList[i]);
    }
 }


// JavaScript for loop	                            Python for loop
// for (var i = 0; i < userList.length; i++) {      for i in user_list: print(i)
// console.log(userList[i]); }	

// To call the function:

listLoop(friends);


// New for loop to practice on

let vegetables = ["Carrots", "Peas", "Lettuce", "Tomatoes"];

for (var i = 0; i < vegetables.length; i++) {
    
    console.log("I love " + vegetables[i]);

}

// Another JS for loop to practice on

for (var i = 0; i < 5; i++) {

    console.log("I am " + i);

}