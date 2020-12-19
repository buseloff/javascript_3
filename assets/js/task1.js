"use strict";

console.log(
  "------------------------------------------------------------------------"
);
let lengthOfUserArray = 5;
let userArray1 = new Array(lengthOfUserArray);
let userArray2 = new Array(lengthOfUserArray);
let i, stringOfUserArrays;

for (i = 0; i < userArray1.length; i++) {
  userArray1[i] = parseInt(Math.random() * 100);
  userArray2[i] = parseInt(Math.random() * 100);
}

stringOfUserArrays = userArray1.concat(userArray2).join(", ");
console.log(stringOfUserArrays);

console.log(
  "------------------------------------------------------------------------"
);

userArray1 = [-5, 0, 0, 56, 86, 35, 5, -5];
let resultArray, el;
console.log(`Исходный массив = ${userArray1}`);
resultArray = userArray1.filter(el => (el>0));

console.log(`После преобразования = ${resultArray}`);
console.log(
  "------------------------------------------------------------------------"
);

lengthOfUserArray = parseInt(prompt("Введите длину последовательности", 10));
userArray1 = new Array(lengthOfUserArray);

function NumbersOfFibonacci(n) {
  return n <= 1 ? n : NumbersOfFibonacci(n - 1) + NumbersOfFibonacci(n - 2);
}
for (i = 0; i <= userArray1.length; i++) {
  if (i == 0) {
    continue;
  }
  userArray1[i - 1] = NumbersOfFibonacci(i);
}

console.log("Последовательность Фибoначчи = ", userArray1);
console.log(
  "------------------------------------------------------------------------"
);


let userString = "This., -/ is #! a ;: {} $ % ^ & * book";
function RemoveSymbols(str) {
  let resultString = "";
  resultString = str.replace(/[^\w\s]/g, "")
  .replace(/\s+/g, " ");        
    return resultString;      
}
console.log("Строка до преобразования = ", userString);
console.log("Строка после преобразования = ", RemoveSymbols(userString));