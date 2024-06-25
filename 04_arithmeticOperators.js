console.log(`======= Arithmetic Operator + =========`);
var result = 10 + 20;
console.log(`Result: ${result}`);

var numOne = 20;
var numTwo = 30;
var resultNum = numOne + numTwo;
console.log(`Result is: ${resultNum}`);

var addNums = function(argOne, argTwo, argThree){
    var result = argOne + argTwo + argThree;
    console.log(`Addition is ${result}`);
}
addNums(55.77, 333.89, 900, 800);



console.log(`======= Subtraction Operator - =========`);
var result = 30 - 20;
console.log(`Subtraction is: ${result}`);
var sub = function(argOne, argTwo){
    var result = argOne - argTwo;
    return result;
}
var returnResult = sub(10, 3);
console.log(`Return result is: ${returnResult}`);


console.log(`======= Multiplication Operator * =========`);
var result = 10 * 5;
console.log(`Multiplication is ${result}`);


console.log(`======= Exponential Operator=========`);
var result = 3 ** 3;
console.log(`Exponential is ${result}`);


console.log(`======= Division Operator / =========`);
var result = 10/3;
console.log(`Division is ${result}`);

console.log(`======= Modulus Operator % =========`);
var result = 15 % 2;
console.log(`Modulus is ${result}`);


console.log(`======= Increment Operator ++  =========`);
 // ++ 
 // 1. Pre fix  ++num;
 // 2. Post fix  num++
var numFour = 10;
var result = numFour++;
console.log(`Result is: ${result}`);

console.log(`======= Decrement Operator --  =========`);
var numFive = 10;
var result = --numFive;
console.log(`Result is: ${result}`);