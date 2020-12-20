"use strict";

let startYear = 1900;
let endYear = 2020;
let i;

function isLeapYear(year) {
  if (year % 4 == 0) {
    return true;
  }
}
function LeapYears(start, end) {
  let years = [];
  for (i = start; i < end; i++) {
    years.push(i);
  }
  let leapYears = [];
  years.forEach(function (y) {
    if (isLeapYear(y)) leapYears.push(y);
  });
  return leapYears;
}
console.log(LeapYears(startYear, endYear));

console.log("-----------------------------------------------------");

let lengthOfUserArray = 10;
let userArray1 = new Array(lengthOfUserArray);
let userArray2 = new Array(lengthOfUserArray);

for (i = 0; i < userArray1.length; i++) {
  userArray1[i] = parseInt(Math.random() * 100);
  userArray2[i] = parseInt(Math.random() * 100);
}
function ReverseOrder(userArray) {
  return userArray.reverse();
}
console.log(userArray1);
ReverseOrder(userArray1);
console.log(userArray1);

console.log("-----------------------------------------------------");
let random = parseInt(Math.random() * lengthOfUserArray);
function RandomElement(userArray, random) {
  return userArray[random];
}
console.log("Случайный элемент = ", RandomElement(userArray1, random));

console.log("-----------------------------------------------------");

function FirstElements(userArray, n) {
  return userArray.splice(0, n);
}

function LastElements(userArray, n) {
  return userArray.splice(userArray.length - n, n);
}
console.log("Первые");
console.log(FirstElements(userArray1, 5));
console.log("Последние");
console.log(LastElements(userArray1, 5));

console.log("-----------------------------------------------------");
console.log(userArray2);
const reducer1 = (accumulator, currentValue) => accumulator + currentValue;
const reducer2 = (accumulator, currentValue) => accumulator * currentValue;
const reducer3 = (accumulator, currentValue) => accumulator + currentValue ** 2;
function DifferentActions(userArray, reducer) {
  return userArray.reduce(reducer);
}

console.log(DifferentActions(userArray2, reducer1));
console.log(DifferentActions(userArray2, reducer2));
console.log(DifferentActions(userArray2, reducer3));

console.log("-----------------------------------------------------");

function ChangePosition(userArr, pos1, pos2) {
    userArr.splice(pos1, 0, userArr.splice(pos2, 1)[0]);
  return userArr;
}

console.log(userArray2);
ChangePosition(userArray2, 3, 5);
console.log(ChangePosition(userArray2, 3, 5));
