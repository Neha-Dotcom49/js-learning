let arrayRollNum = [10, 20, 30, 40, 15];
console.log(arrayRollNum);

console.log(`Length of the array, It means total number of elements in the array`);
console.log(arrayRollNum.length);

console.log(`=== Accessing array values using index ====`);
const element0th = arrayRollNum[0];
console.log(element0th);
console.log(arrayRollNum[2]);
const len = arrayRollNum.length;
console.log(arrayRollNum[len-1]);


console.log(`=== Update array values using index ====`);
arrayRollNum[3] = 100;
console.log(arrayRollNum);


console.log(`=== Add elements at the end of array ====`);
let array = [10, 20, 30, 40, 15];
console.log(`Original Array: ${array}`);
array.push(200);
console.log(`After push(): ${array}`);

 

console.log(`=== Add elements in the beginning of array ====`);
array.unshift(500);
console.log(`After unshift(): ${array}`);

 

console.log(`=== Remove elements in the beginning of array ====`);
array.shift();
console.log(`After shift() : ${array}`);

 

console.log(`=== Remove last elements from the array ====`);
array.pop();
console.log(`After pop() : ${array}`);