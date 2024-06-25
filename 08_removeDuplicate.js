console.log(`Hotest interview question`);
console.log(`To remove duplicate element from the array`);
let array = [40, 20, 30, 40, 15, 30, 20];
array = [...new Set(array)];
console.log(array);