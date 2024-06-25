const friendList = ["Stew", "Elon", "Bill", "Jenny"];
console.log(friendList);
console.log(`====== Sort in ascending order =======`);
friendList.sort();
console.log(friendList);
console.log(`====== Sort in descending order =======`);
friendList.reverse();
console.log(friendList);

const rollNum = [11, 55, 33, 77, 44, 99, 22];
console.log(rollNum);
rollNum.sort();
console.log(rollNum);

console.log(`=======Other array =======`);
const array = [11, 105, 390, 77, 89, 99, 292];
console.log(array);
console.log(`====== Sorting in ascending order========`);
array.sort((n1, n2)=>{
    return n1>n2 ? 1 : -1;
});
console.log(array);

console.log(`====== Sorting in descending order========`);
array.reverse();
console.log(array);


console.log(`------Other way to sort element in descending order------------`);
const arrayNumbers = [11, 105, 390, 77, 89, 99, 292];
arrayNumbers.sort((n1, n2)=>{
    return n1>n2 ? -1 : 1;
});
console.log(arrayNumbers);