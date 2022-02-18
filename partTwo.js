//Beginning of part two
// Strict mode. Helps avoid bugs and create visible errors and forbids certain things to be done
//add to scripts in the future
'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive!');

// const interfaces = 'Audio';
// const private = 534;


// Functions can hold 1 or more complete lines of code
// functions are values
// Variables hold values
// Operators produces value which is an Expression

// inside {} is the function body where the code is executed
// function is when you have to use it many times in your code
function logger() {
    console.log('My name is Ryan');
}

// Invoking, calling, running the function is what this is called.
logger();
logger();
logger();

// the function fruitProcessor has two arguments. apples, oranges. Gave the arguments or parameters values 5, 1. When function runs it is 5, 0. By returning the juice value, calling upon the fruitProcessor function will be the juice value. and because its a value you have to save it to a variable and then you can log it.
function fruitProcessor(apples, oranges) {
    // console.log(apples, oranges)
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
// this is capturing the value into a variable
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
//this is just logging the result not capturing the value into a variable
// console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//function declaration vs Expressions
// function declaration - can be called before they are defined in the code
const age1 = calcAge1(2022, 1992);

function calcAge1(currentYear, birthYear) {
    return currentYear - birthYear;
}

// function expression. function without a name is annon function. cannot be called before defined.
// example above with the declaration
const calcAge2 = function (currentYear, birthYear) {
    return currentYear - birthYear;
}

const age2 = calcAge2(2022, 1992);
console.log(age1, age2);


// Arrow function lesson

// Arrow function
//return happens by itsself in this case
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);

const calcAverage = (a, b, c) => (a + b + c) / 3
const dolphinScore = calcAverage(44, 23, 71);
console.log(dolphinScore)


const calcAverage1 = (a, b, c) => {
    const dolphinAvgScore = (a + b + c) / 3;
    const koalaAvgScore = (a + b + c) / 3;
    return dolphinAvgScore, koalaAvgScore
}
const dolphScore = calcAverage1(44, 23, 71)
const koalaScore = calcAverage1(45, 75, 89)
console.log(dolphScore, koalaScore)
*/

/*
const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2022 - birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1992, 'Ryan'));
console.log(yearsUntilRetirement(1995, 'Greg'));


function cutFruitPieces(fruit) {
    return fruit * 3;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

//after the function returns. it exits the function
const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear)
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`)
        return retirement;
    } else {
        console.log(`${firstName} has already retired`)
        return -1;
    }
}
console.log(yearsUntilRetirement(1992, 'Ryan'));
console.log(yearsUntilRetirement(1947, 'Mike'));


//challenge #1
// function 'checkwinner' takes the avg score of each team as parameters (avgDolphin, avgKoalas) and then logs the winner to the console. together with the victory points. ex. "koalas win (30 vs 13)"
const calcAverage = (a, b, c) => (a + b + c) / 3
let scoreDolphins = calcAverage(67, 88, 78)
let scoreKoalas = calcAverage(6, 5, 8)

const checkwinner = function (avgDolphins, avgKoalas) {

    if (avgDolphins >= 2 * avgKoalas) {
        console.log('fuck me')
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log('fuck me again')
    } else {
        console.log('i would like to cry now')
    }
}
checkwinner(scoreDolphins, scoreKoalas)
checkwinner(566, 788)

// Test 2
scoreDolphins = calcAverage(55, 77, 34)
scoreKoalas = calcAverage(45, 800, 99)
console.log(scoreDolphins, scoreKoalas)
checkwinner(scoreDolphins, scoreKoalas)
*/

// Intro to Arrays - Data structure. container that holds variables and then later reference them
// long way below.
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//Arrays. line 165 is literal syntax
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);
console.log(years);

console.log(friends[0]);
console.log(friends[2]);

//number of elements in any array
console.log(friends.length);
// friends.length is not 0 based.
console.log(friends[friends.length - 1])

