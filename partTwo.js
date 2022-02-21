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


// Intro to Arrays - Data structure. container that holds variables and then later reference them
// long way below.
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

//Arrays. line 165 is literal syntax
const friends = ['Tyler', 'Adam', 'Greg'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

//number of elements in any array
console.log(friends.length);
// friends.length is not 0 based.
// inside brakets JS expects Expressions, not statements
console.log(friends[friends.length - 1])

//  changing elements to the array even when declared with const. Able to mutate what is stored in the array.
friends[0] = 'Justin';
console.log(friends);
// cannot replace the entire array. Ex:Below
// friends = ['Bob', 'Alice'] //produces error - assignment to constant variable
// const calcAge = birthYear => 2022 - birthYear
const calcAge0 = function (birthYear) {
    return 2022 - birthYear;
}
const age = calcAge0(1992)
const firstName = 'Ryan'
const ryan = [firstName, 'Nichol-Laporte', age, 'Lineman', friends];
console.log(ryan);

const calcAge = function (birthYear) {
    return 2022 - birthYear;
}
const years = [1990, 1992, 1995, 1997, 1999];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[4]);
console.log(age1, age2, age3);

const ages = [(friends[0]), calcAge(years[0]), (friends[1]), calcAge(years[1]), (friends[2]), calcAge(years[4])]
console.log(ages)

//Basic Array Operations(Methods)

const friends = ['Tyler', 'Adam', 'Greg'];
//push adds elements to the end of an array. [Mutates original array]
// friends.push('Justin'); //the '.' attaches the function to the friends array
//storing the function into a variable to find out the length of they new array
const newLength = friends.push('Justin');
console.log(friends);
console.log(newLength);
//add elements to the beginning of the array
friends.unshift('Dillan');
console.log(friends);
// Remove elements from the array.
// pop returns the removed element
friends.pop(); //Last element
const popped = friends.pop();
console.log(`who got removed from the list: ${popped}`);
console.log(friends);

friends.shift(); //First Element
console.log(friends)
// finding the location of the element in the array
console.log(friends.indexOf('Adam'));
console.log(friends.indexOf('Dillan'));

// includes: will return true if in array or false if not
// includes is === strict equality
friends.push(23);
console.log(friends.includes('Adam'));
console.log(friends.includes('Dillan'));
console.log(friends.includes('23'));
console.log(friends.includes(23));

//conditionals
if (friends.includes('Peter')) {
    console.log('You have a friend named Peter')
} else {
    console.log(`You have other friends I guess`)
}
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}
//     if (bill >= 50 && bill <= 300) {
//         return bill * 0.15
//     } else {
//         return bill * 0.2
//     }
// }
const calcTotal = function (bills) {
    if (bills >= 50 && bills <= 300) {
        return bills * 1.15
    } else {
        return bills * 1.20
    }
}
const bills = [125, 555, 44];
// const tip = calcTip(301);
const tips = [calcTip([bills[0]]), calcTip([bills[1]]), calcTip([bills[2]])];

const totals = [calcTotal([bills[0]]), calcTotal([bills[1]]), calcTotal([bills[2]])];

const totalsChallenge = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(tips, totals, totalsChallenge);


// Intro to Ojects {}
// The order matters in arrays.
const ryanArray = [
    'Ryan',
    'LaPorte',
    2022 - 1992,
    'lineman',
    ['Justin', 'Greg', 'Pat']
];
console.log(ryanArray[4]);
// Object is called ryan with 5 properties.
// Object literal syntax, order does not matter
const ryan = {
    firstName: 'Ryan',
    lastName: 'Laporte',
    age: '2022-1992',
    job: 'lineman',
    friends: ['Justin', 'Greg', 'Pat']
};
console.log(ryan);
// the '.' is an operator
// real property name
console.log(ryan.lastName);
console.log(ryan['lastName']);

// conmputed property name
const nameKey = 'Name';
console.log(ryan['first' + nameKey]);
console.log(ryan['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Ryan? Choose between firstName, lastName, age, job, and friends');
// dot notation wont work because there is no property called interestedIn under the object Ryan
//

if (ryan[interestedIn]) {
    console.log(ryan[interestedIn]);
} else {
    alert('Wrong request. Choose between firstName, lastName, age, job, and friends ')
}

ryan.location = 'Ontario';
ryan['twitter'] = '@suckittrebek';
console.log(ryan)

// Challenge
// "Jonas has 3 friends, and his best friend is called Justin"

console.log(`${ryan.firstName} has ${ryan.friends.length} friends, and his best friend is called ${ryan.friends[0]} `)


// functions are values.
// ryan.calcAge is calling on the method. when using 'this' points to ryan it will use the propety inside the ryan object.
// We use 'this' in case you need to change the name of the object: ex to Ryan2... this still references whatever is called
const ryan = {
    firstName: 'Ryan',
    lastName: 'Laporte',
    birthYear: 1992,
    job: 'lineman',
    friends: ['Justin', 'Greg', 'Pat'],
    hasDriversLicense: !true,

    // any function that is attached to an Object is called a method
    // calcAge: function (birthYear) {
    //     return 2022 - birthYear;
    // }
    // calcAge: function () {
    //     // console.log(this);
    //     return 2022 - this.birthYear;
    // }
    // creating jonas.age like above.
    calcAge: function () {
        this.age = 2022 - this.birthYear
        return this.age;
    },
    getSummary: function () {
        this.summary = `${this.firstName} is a ${this.age}-year old lineman, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license `
        return this.summary;
    }
}
// age gets calculated once then you call it again in other instances where you do not have to calculate it.
console.log(ryan.calcAge())
console.log(ryan.age);
console.log(ryan.getSummary())
console.log(ryan.summary)


// make a string when using bracket notations
// console.log(ryan['calcAge'](1992));


//Challenge
// "Ryan is a 46-year old teacher, and he has a/no drivers license" ^^
*/
// const markMiller = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.markBMI = this.mass / this.height ** 2
//         return this.markBMI
//     },
// }
// const johnSmith = {
//     Fullname: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.johnBMI = this.mass / this.height ** 2
//         return this.johnBMI
//     },

// }
// const checkWinner = function () {
//     if (markMiller.markBMI > johnSmith.johnBMI) {
//         return `Mark's BMI ${markMiller.markBMI} is higher than John's ${johnSmith.johnBMI}!`
//     } else {
//         return `Johns's BMI ${johnSmith.johnBMI} is higher than Marks's ${markMiller.markBMI}!`
//     }
// }
// console.log(johnSmith.calcBMI() > markMiller.calcBMI())
// console.log(checkWinner)

const mark = {
    fullName: 'Mark Miller',
    mass: 64,
    height: 1.69,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    },
}
const john = {
    Fullname: 'John Smith',
    mass: 95,
    height: 1.95,
    calcBMI: function () {
        this.bmi = this.mass / this.height ** 2
        return this.bmi
    },

}
mark.calcBMI();
john.calcBMI();
if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.Fullname}'s ${john.bmi}!`)
} else if (john.bmi > mark.bmi) {
    console.log(`${john.Fullname}'s ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}!`)
}
// console.log(mark.bmi, john.bmi);
// console.log(checkWinner(mark.bmi, john.bmi))