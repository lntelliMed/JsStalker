var firstName = prompt("What is your first name?");
var lastName = prompt("What is your last name?");
var age = prompt("How old are you?");

var fullName = firstName + " " + lastName;
console.log("Your full name is " + fullName);
console.log("You are " + age + " years old!");

var days = age * 365.25;//Accounts for leap years!
alert(age + " years is roughly " + days + " days!");
var numberAge = Number(age);
if (numberAge < 0){
	console.log("Come back whenever you're born!");
}

if (numberAge === 21){
	console.log("Happy 21st Birthday!");
}

if (numberAge % 2 !== 0){
	console.log("Your age is an odd number!");
}

if (numberAge % Math.sqrt(numberAge) === 0){
	console.log("Your age is a perfect square!");
}