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
// const temperatures = [13, -2, -6, -1, 'error', 9, 25, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [14, -5, -7, -14, 'error', 17, 15, 8, 7, 3];
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
const measureK = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celcius')),
  };
  //found the bug, prompt returns a string
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// console.log(measureK());

const testArr = [24, 25, 26, 27, 28];
const reverseMyArray = function (arr) {
  const arrayOne = arr;
  let arrayTwo = [];

  for (let i = 0; i < arrayOne.length; i++) {
    arrayTwo.push(arrayOne[i]);
  }
  return arrayTwo.reverse();
};
const newArr = reverseMyArray(testArr);
console.log(newArr);

const noNeg = function () {};
//I forget everything there is to know about this
/* in the future if i take a postion with Milton I can come home and fuck around with this shit and get a desk job that hurts my back when i sit */
