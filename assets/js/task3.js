"use strict";
//let userValue = prompt();
//const test = 20;
/*if (true) {
   
    console.log(test);

    if (true) {
        var test = 10;
        console.log(test);
    }
}
console.log(test);*/

/*function f() {
    var test = 10;
    console.log(this);
}

f();*/

/*switch (userValue) {
  case "1":
    {
        console.log(test);

    }
    break;
  case "2":
    {
        console.log(test);
    }
    break;
  case "3":
    {
        console.log(test);
    }
    break;
  case "4":
    {
        console.log(test);
    }
    break;
  default:
    {
        console.log(test);
    }
    break;
}*/

/*for (var i = 0; i < 5; i++) {}
console.log(i);

for (let i = 0; i < 5; i++) {}
console.log(i);
*/
const test = 10;
function myFun() {
    console.log(test);
}

myFun();

function f() {
    let x = 89;
    return function () {
        return x++;
}
}
console.log("------------------------------------");
const result1 = f();
console.log(result1());
console.log(result1());
console.log(result1());
console.log(result1());
console.log(result1());

console.log("------------------------------------");
const result2 = f();
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());
console.log(result2());