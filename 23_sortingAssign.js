const arrayRollNumbers = [113,45,56,11,32,45,109,799,56,45];
console.log(`Original Array:`,arrayRollNumbers);
arrayRollNumbers.reverse();
console.log(`After reversing array`,arrayRollNumbers);
arrayRollNumbers.sort();
console.log(`After using sort method Array:`,arrayRollNumbers);
arrayRollNumbers.sort((n1, n2)=>{
    return n1>n2 ? 1 : -1;
});
console.log(`Ascending order:`,arrayRollNumbers);
const len = arrayRollNumbers.length;
console.log(`Greater Number is:`,arrayRollNumbers[len-1]);
// const greaterNum = arrayRollNumbers[arrayRollNumbers.length-1];
// console.log(greaterNum);

const smallNum = arrayRollNumbers[0];
console.log(`Smaller Number is:`,smallNum);


const arrayRollNumbers1 = [...new Set(arrayRollNumbers)];
console.log(`Removing Duplicate using set method`,arrayRollNumbers1);