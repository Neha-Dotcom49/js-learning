const arrayNumbers = [20,11,40,25,37,49,9,90,60,2,19];
console.log(`Given Array:`,arrayNumbers);
const greaterThan50 = arrayNumbers.filter((element)=>{
    return element>50;
});
console.log(`Elements which is Greater Than 50:`,greaterThan50);

const newArray = arrayNumbers.filter( (element)=>{
    return element%2==0;
});
console.log(`Even Numbers are:`,newArray);


const newArray1 = arrayNumbers.filter( (element)=>{
    return element%2!==0;
});
console.log(`Odd Numbers are:`,newArray1);


const newArray2 = arrayNumbers.filter( (element)=>{
    return element%5==0;
});
console.log(`Multiple of 5 are:`,newArray2);


const newArray3 = arrayNumbers.filter( (element)=>{
    return element>20 && element<50;
});
console.log(`Elements Between 20 & 50 are:`,newArray3);

