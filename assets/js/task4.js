"use strict";

let lengthOfUserArray = 10;
let userArray1 = new Array(lengthOfUserArray);
let userArray2 = new Array(lengthOfUserArray);

let i;

for (i = 0; i < userArray1.length; i++) {
  userArray1[i] = parseInt(Math.random() * 100);
  userArray2[i] = parseInt(Math.random() * 100);
}

let sumOfElements = 0,
  result;
console.log("-----------------------------------------------------");

function SumOfOddElements(userArray) {
  for (i = 0; i < userArray.length; i++) {
    if (userArray[i] % 2 == 1) {
      sumOfElements += userArray[i];
    }
  }
  return sumOfElements;
}

result = SumOfOddElements(userArray1);
console.log(`Сумма нечетных элементов = ${result}`);

console.log("-----------------------------------------------------");
let index = prompt("Введите индекс", 5);


function DeleteElement(index, userArray) {
  userArray.splice(index, 1);
  return userArray;
}

function AddElement(index, userArray, newValue) {
  userArray.splice(index, 0, newValue);
  return userArray;
}

console.log("Массив до удаления = ", userArray1);


DeleteElement(index, userArray1);
console.log("Массив после удаления индекса ", index, " =", userArray1);


AddElement(index, userArray1, 56);
console.log("Массив после добавления индекса ", index, " =", userArray1);
