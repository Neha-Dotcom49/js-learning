let array = [10, 20, 30, 40, 15];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element); 

}

console.log(`Traverse array in reverse order`);
for (let index = array.length-1; index >=0; index--) {
    const element = array[index];
    console.log(element); 

}

console.log(`Sum the array elements`);
let sum = 0;
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    sum = sum + element;

}
console.log(sum);


console.log(`Log the even numbers......`);
let arrayNum = [11, 20, 32, 40, 15, 23, 80];
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    if (element%2==0) {
        console.log(element);
    }

}

 

console.log(`Log the Odd numbers......`);
let arrayNumber = [11, 20, 32, 40, 15, 23, 80];
for (let index = 0; index < arrayNumber.length; index++) {
    const element = arrayNumber[index];
    if (element%2!=0) {
        console.log(element);
    }

}
