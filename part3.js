'use strict';

// const xzabc = 23;
// if (xyzabc === 23) console.log(23);

// const calcAge = birthYear => 2022 - birthYear;
// console.log(1990);

// const oZ = [40, 60, 55, 8];
// const grams = [];
// // const calcGrams = function (ounces) {
// //   return ounces * 28.35;
// // };
// const calcGrams = ounces => ounces * 1.60943;
// for (let i = 0; i < oZ.length; i++) {
//   const gram = calcGrams(oZ[i]);
//   grams.push(gram);
// }
// console.log(grams);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };
// console.log(oZ);
// company building a smart home thermometer. Most recent task is this: Given an array of temperatures of one day, calculate the temperature amplitude. keep in mind sometimes there might be a sensor error.
// const temperatures = [13, 2, 6, 1, 'error', 9, 25, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [14, 5, 7, 14, 'error', 17, 15, 8, 7, 3];
// console.log(temperatures);
//1) understand the problem.
// what is temp amplitude? Answer: difference between highest and lowest temp.
// how to compute max and min temps in array
// whats a sensor error and what to do?

//2Breaking up into smaller sub-problelms
// -How ignore the sensor errors
// - find max value in temp array
// - find min value in temp array
// find amplitude(sub max from min and return it)
// const tempAmplitude = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     const curTemp = temps[i];
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
// console.log(max, min);
// return max - min;
// };
// const amplitude = tempAmplitude(temperatures);
// console.log(amplitude);
// Prob 2: function should recieve two array of temperatures

// Under stand the problem
// with 2 array , should we implment functionality twice? NO, just merge two arrays.
// how to merge

// Breaking up into smaller problems
// merge arrays

// const tempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     if (typeof temps[i] !== 'number') continue;
//     const curTemp = temps[i];
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   // console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = tempAmplitudeNew(temperatures, [29, 4, 8]);
// console.log(amplitudeNew);
// const calcTempAmplitudeNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const currTemps = temps[i];
//     if (typeof currTemps !== 'number') continue;
//     if (temps[i] > max) max = currTemps;
//     if (temps[i] < min) min = currTemps;
//   }
//   console.log(max, min);
//   return max - min;
// };
// const amplitudeNew = calcTempAmplitudeNew(temperatures, temperatures2);
// console.log(amplitudeNew);
// Kelvin 273*temp
// Prompt always returns a string//////////////////////
// const measureK = function () {
//   const measurement = {
//     type: 'temp',
//     unit: 'celsius',
//     value: Number(prompt('Degrees celcius')),
//   };
//   //found the bug, prompt returns a string
//   console.table(measurement);
//   // console.log(measurement.value);
//   // console.warn(measurement.value);
//   // console.error(measurement.value);
//   const kelvin = measurement.value + 273;
//   return kelvin;
// };
// console.log(measureK());

// const testArr = [24, 25, 26, 27, 28];
// const reverseMyArray = function (arr) {
//   const arrayOne = arr;
//   let arrayTwo = [];

//   for (let i = 0; i < arrayOne.length; i++) {
//     arrayTwo.push(arrayOne[i]);
//   }
//   return arrayTwo.reverse();
// };
// const newArr = reverseMyArray(testArr);
// console.log(newArr);

// const greg = function () {
//   let fullName = prompt('Your full name');
//   let salary = Number(prompt('Your salary'));
//   let baseSalary = 9000;

//   if (salary > 0 && salary <= 9000 && typeof fullName === 'alphanumberic') {
//     return `Name: ${fullName} Salary :${baseSalary}`;
//   } else if (salary > 9000 && typeof fullName === 'alphanumeric') {
//     return `Name: ${fullName} Salary :${salary}`;
//   } else if (typeof fullName !== 'alphanumeric') {
//     return alert('Enter valid name');
//   }
// };
// console.log(greg());

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]


// const testData1 = [17, 21, 23];
// const testData2 = [12, 5, -5, 0, 4];

// const printForecast = function (arr) {
//   let str = '';

//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}C in ${i + 1} day(s) ... `;
//   }
//   console.log('...' + str);
// };
// printForecast(testData1);
// //If it was just 3 data points you could do this

const random = () => {
  return Promise.resolve(Math.random());
};

const sumRandomAsyncNums = async () => {
  const first = await random();
  const second = await random();
  const third = await random();

  console.log(`result ${first + second + third}`);
};
sumRandomAsyncNums();

const pet = false;

if (pet === true) {
  console.log('PooPoo');
} else {
  console.log('i do not');
}

let score1 = 20;
let score2 = 15;
let highScore;

const noNeg = function () {};
//I forget everything there is to know about this
/* in the future if i take a postion with Milton I can come home and fuck around with this shit and get a desk job that hurts my back when i sit */


