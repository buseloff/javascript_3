"use strict";
const users = [
  { name: "Alex", age: 20, isSelected: false },
  { name: "Pete", age: 29, isSelected: false },
  { name: "Antony", age: 45, isSelected: true },
  { name: "Nicole", age: 35, isSelected: true },
];

users.forEach(function (value) {
  console.log(value);
});

console.log(users.filter((user) => user.age >= 30));

const isEveryUserAdult = users.every(checkAdult);
function checkAdult(user) {
  return user.age >= 30;
}
console.log(isEveryUserAdult);

const isSomeUserAdult = users.some(checkAdult);
function checkAdult(user) {
  return user.age >= 30;
}
console.log(isSomeUserAdult);

for (var prop in users) {
  console.log(prop);
}

for (var prop of users) {
  console.log(prop);
}
console.log(
    "------------------------------------------------------------------------"
  );
let myArrr = [1, 2, 5, 9, 45, 6];
for (let i = 0; i < myArrr.length; i++) {
  console.log(myArrr[i]);
}
console.log(
    "------------------------------------------------------------------------"
  );

for (let elem in myArrr) {
  console.log(myArrr[elem]);
}
console.log(
    "------------------------------------------------------------------------"
  );

myArrr.forEach((elem) => console.log(elem));
