var array = [10, 20, 30, 40, 15];
for (const index in array) {
   console.log(array[index]);

}

console.log(`for of Loop `);
for (const element of array) {
    console.log(element);

}

var array = [10, 20, 30, 40, 15];
const result = array.join(",");
console.log(result);