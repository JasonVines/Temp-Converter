"use strict";

console.log("converter.js");
console.log("test");
// Temperature Converter


// script for resetting the form
let clearButton = document.getElementById("clearForm");

clearButton.addEventListener("click", resetForm);

function resetForm (clickEvent) {
	document.getElementById("tempConverter").reset();
}


// Conversion functions
function toCelsius () {
	let x = document.getElementById("enter").value;
	let temp = Math.round((x - 32) * (5 / 9));
	document.getElementById("display").value = temp;
	if (temp <= 0.0) {
		document.getElementById("display").style.color = "blue";
	}  else if (temp > 32.0) {
		document.getElementById("display").style.color = "red";
	} else {
		document.getElementById("display").style.color = "darkgreen";
	}
}

function toFahrenheit () {
	let x = document.getElementById("enter").value;
	let temp = Math.round((x * (9 / 5)) + 32);
	document.getElementById("display").value = temp;
	if (temp <= 32.0) {
		document.getElementById("display").style.color = "blue";
	}  else if (temp > 90.0) {
		document.getElementById("display").style.color = "red";
	} else {
		document.getElementById("display").style.color = "darkgreen";
	}
}


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
	if (document.getElementById("celsius").checked === true) {
		toCelsius();
	} else if (document.getElementById("fahrenheit").checked === true) {
		toFahrenheit();
	} 
}


// Get a reference to the button element in the DOM
let submitButton = document.getElementById("converter");


// Assign a function to be executed when the button is clicked
submitButton.addEventListener("click", determineConverter);