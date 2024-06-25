const fruits_seasonal = ["Banana","Orange","Apple","Mango","Water Melon"];
console.log(fruits_seasonal);
console.log(`====== Step-1 Finding First And Last element======`);
const element0th = fruits_seasonal[0];
console.log(`First Position element:` , element0th);


const len = fruits_seasonal.length;
console.log(`Last Position Element:` , fruits_seasonal[len-1]);

console.log(`======= Step-2 inserting element Papaya at Starting Position====`);
console.log(fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`===============Step 3 Remove Mango from array ============`);
console.log(fruits_seasonal);
const deleteElements = fruits_seasonal.splice(4,1);
console.log(fruits_seasonal);

console.log(`============= Step-4 Inserting Pineapple element at last position =============`);
console.log(fruits_seasonal);
fruits_seasonal.push("Pineapple")
console.log(fruits_seasonal);

console.log(`============ Step-5 Insert Dragon Fruit Before Water Melon =================`);
console.log(fruits_seasonal);
fruits_seasonal.splice(4,0,"Dragon Fruit");
console.log(fruits_seasonal);

console.log(`========== Step-6 Replace an element orange with kiwi ===============`);
console.log(fruits_seasonal);
fruits_seasonal.splice(2,1,"Kiwi");
console.log(fruits_seasonal);

console.log(`=========== Step 7 Log the elements starting from index 1 to 4 ============`);
console.log(fruits_seasonal);
const sliceFrom1To4 = fruits_seasonal.slice(1, 5);
console.log(sliceFrom1To4);

console.log(`============== step-8 Only select last 3 element and log on console ========== `);
console.log(fruits_seasonal);
const len2 = fruits_seasonal.length;
const last3Slice = fruits_seasonal.slice(len2-3);
console.log(last3Slice);
