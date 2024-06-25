console.log(`===============step 1===============`);
var greaterNum = function(numOne, numTwo){
    var result = numOne>=numTwo ? numOne : numTwo;
    console.log(`Greater From numbers ${numOne}, ${numTwo} is ${result}`);
}
greaterNum(10,-10);
greaterNum(800,899);



console.log(`===============step 2=============`);
function isEvenOrOddNum(argOne){
 var result = argOne%2 == 0 ? true : false;
 return result;
}
 var returnValue = isEvenOrOddNum(29);
 console.log(`Given number 29 is even : ${returnValue}`);
var returnValue = isEvenOrOddNum(44);
console.log(`Given number 44 is even : ${returnValue}`);
var returnValue = isEvenOrOddNum(0);
console.log(`Given number 0 is even : ${returnValue}`);
var returnValue = isEvenOrOddNum(101);
console.log(`Given number 101 is even : ${returnValue}`);


console.log(`=========step 3=============`);
function wordLength(word){
    var result=  word.length % 2 === 0 ? "Even" : "odd" ;
    return result;
}
var returnValue = wordLength("javaScript");
console.log(`The length of "JavaScript" is ${"JavaScript".length} and it is ${returnValue}`);
var returnValue = wordLength("Developer");
console.log(`The length of "Developer" is ${"Developer".length} and it is ${returnValue}`);
var returnValue = wordLength("Google");
console.log(`The length of "Google" is ${"Google".length} and it is ${returnValue}`);

