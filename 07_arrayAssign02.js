const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11];
console.log(arrayNumber);
console.log(`======== Step-1 Length Of Array ===================`);
console.log(arrayNumber.length);

console.log(`======== Step-2 Log First and Last Element ========`);

const element1th = arrayNumber[0];
console.log(`First Element:`,element1th);
const len = arrayNumber.length;
console.log(`Last Element:`,arrayNumber[len-1]);

console.log(`=========== step-3 Log third last elements =========`);
console.log(arrayNumber);
const len2 = arrayNumber.length;
console.log(arrayNumber.slice(len-3));


console.log(`========= step-4 Find Even number using for of loop ===========`);
console.log(arrayNumber);
var result = "";
for (const element of arrayNumber) {
    if (element%2==0) {
        if (result !=="") {
            result = result + ",";
            
        }
       result = result + element;
       
    }
}
console.log(result);

console.log(`================== Step-5 Finding odd numbers ====================` );
console.log(arrayNumber);
var result = "";
for (const element of arrayNumber) {
    if (element%2==1) {
        if (result !=="") {
            result = result + ",";
            
        }
       
       result = result + element;
       
    }
}
console.log(result);

console.log(`============== Step-6 Sum Of All Even numbers In array====================`);
console.log(arrayNumber);
let sum1 = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (element%2 === 0) {
        sum1 += element;
    }
}
console.log("Sum of even numbers is:", sum1);

console.log(`============== Step-7 Sum Of All odd numbers In array====================`);
console.log(arrayNumber);
let sum2 = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (element%2 === 1) {
        sum2 += element;
    }
}
console.log("Sum of  numbers is:", sum2);

console.log(`===========Step-8 Sum of all elements from array ===========`);
console.log(arrayNumber);
let sum4 = 0;
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
        sum4 += element;
}
console.log("Sum of even numbers is:", sum4);

console.log(`===========Step-9 Find Numbers Multiple of 5=================`);
var array = [10, 20, 30, 40, 15];
let sum3 = 0;
var result = "";
for (const element of array) {
    if (element%5==0) {
        if (result !=="") {
            result = result + ",";
            
        }
       result = result + element;
        
      
    }
}
console.log(result);


console.log(`=========== Step-10 Is 115 available in array===============`);
console.log(`Given Array:`,arrayNumber);
var isInclude = arrayNumber.includes(115);
console.log(`Is 115 present in array:`,isInclude);


console.log(`=========== Step-11 Is 23 available in array================`);
var isInclude = arrayNumber.includes(23);
console.log(`Is 23 present in array:`,isInclude);


console.log(`=========== Step-12 Insert 55,66 at index 3=================`);
console.log(`Given Array:`,arrayNumber);
arrayNumber.splice(3,0,55,66)
console.log(arrayNumber);

console.log(`======== Step-13 Delete 3 element starting from index 4 =====`);
console.log(`Given Array:`,arrayNumber);
const deletedElements = arrayNumber.splice(4,4)
console.log(arrayNumber);
console.log(`deleted elements:`,deletedElements);