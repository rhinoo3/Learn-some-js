//value and variables
/*
let country = ('Canada');
let continent = ('North America');
let population = (38000000);
//trying to get the numbers different
if (population > 37000000) {
  population = '38M';

}

console.log(country);
console.log(continent);
console.log(population);

if (country === "Canada") alert('this is nothingness')
//how to comment out lines of code
console.log(40 + 8 + 23 - 10);

//will show below that it is a boolean
let javascriptIsFun = true;
console.log(javascriptIsFun)

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');
//changed it to a string
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

let year;
console.log(year)
console.log(typeof year);

year = 1992;
console.log(typeof year);

console.log(typeof null);

//<b>let, const, and var</b> <- Old way

//reassigning variable. (mutated variable)
let age = 30;
age = 31;

//const cannot be mutated. ex birthyear
const birthYear = 1992;
// birthYear = 1990;

// const job; <- error

// const job;

var job = 'programmer';
job = 'teacher'

lastName = 'Laporte';
console.log(lastName);


//Basic operators
// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; //15
x += 10; //x = x + 10 = 25
x *= 4; //x = x * 4 =100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99
console.log(x);

// Comparison operators
//boolean...asking if true or false and will provide answer in console
// Greater than >, Less than <,Greater equal >=, Less than equal <=
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
//based off the operator precedence. subtraction left to right (higher precedence), equal is right to left (lower precedence)
x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);


//coding Challenge #1
// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;
const markHigherBMI = markBMI > johnBMI;

console.log(johnBMI, markBMI, markHigherBMI);

//Strings and template literals
const firstName = 'Ryan';
const job = 'lineman';
const birthYear = 1991;
const year = 2037;

const ryan = "I'm" + ' ' + firstName + ', a' + ' ' + (year - birthYear) + " " + "year old" + ' ' + job + '!';
console.log(ryan)
//back tics for template literals. and use ${} for the variables. no quotations needed like above
const ryanNew = `I'm ${firstName} a ${year - birthYear} year old ${job}!`;
console.log(ryanNew);

console.log(`Just a regular string...`);

//old hard way of multiple lines
console.log('String with \n\
multiple \n\
lines');

//easier way with template literals
console.log(`String that will span multiple lines
like so
this is too easy.`);

//Taking Decisions: if / else statements
// called a control structure
// if(){
// else
// }
const age = 17;
const yearsLeft = 18 - age;

let years = "year"
if (yearsLeft === 1) {
  years = "year"
} else {
  years = "years"
}
if (age >= 18) {
  console.log('Adam can start his driving license 🤦‍♀️');
} else {
  console.log(`Adam is too young. Wait another ${yearsLeft} ${years} :)`);
}

const birthYear = 2001;

let century;
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);

//Coding Challenege #2

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const markBMI = massMark / heightMark ** 2;
const johnBMI = massJohn / heightJohn ** 2;
const markHigherBMI = markBMI > johnBMI;

//more common to write the actual condition in the if statement
if (markBMI > johnBMI) {
  console.log(`Marks's BMI (${markBMI}) is higher than John's (${johnBMI})!`)
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`)
}
console.log(`John ${johnBMI}, Mark ${markBMI}, is Mark's higher? ${markHigherBMI}`);
*/

// Type Conversion and Coercion
