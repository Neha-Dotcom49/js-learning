console.log(`=================step 1===============`);

var isEvenOrOdd = function(num){
if (num%2==0) {
    return "EVEN";
    
} else {
    return "ODD";
}
}
var value = isEvenOrOdd(45);
console.log(`Given number 45 is ${value}`);
var value = isEvenOrOdd(70);
console.log(`Given number 70 is ${value}`);
var value = isEvenOrOdd(67);
console.log(`Given number 67 is ${value}`);
var value = isEvenOrOdd(98);
console.log(`Given number 98 is ${value}`);

console.log(`=================step 2===============`);
var voteEligibility = function(age){
    if (age>=18) {
        return "eligible";
    } else {
        return "Not eligible";

    }
}
 var meassage = voteEligibility(18);
console.log(`your age is 18 and you are ${meassage} for vote`);
var meassage = voteEligibility(20);
console.log(`your age is 20 and you are ${meassage} for vote`);
var meassage = voteEligibility(17);
console.log(`your age is 17 and you are ${meassage} for vote`);
var meassage = voteEligibility(40);
console.log(`your age is 40 and you are ${meassage} for vote`);

console.log(`=================step 3===============`);
var strLength = function(str){
    if (str.length >=10) {
        console.log(`string contain 10 or more than 10 character`);
    } else {
        console.log(`string does not contain 10 or more than 10 character`);
    }
}
strLength("javaScript - ES6")

console.log(`=================step 4===============`);
var strStartWith = function(str){
  if (str.startsWith("java")) {
    console.log(`Given string ${str} start with word "java"`);
  } else {
    console.log(`Given string  ${str} does not start with word "java"`);
  }
}
strStartWith("javaScript");
strStartWith("Programming Language");
