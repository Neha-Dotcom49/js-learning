const arrayNumbers = [20,11,40,25,2311,9,31,60,2,19];
console.log(`Original Array:`,arrayNumbers);
const newArray = arrayNumbers.map((elements)=>{
    return elements+10;
});
console.log(`After Adding 10 Into each elements:`,newArray);

const cube = arrayNumbers.map((element)=>{
   return element*element*element;
});
console.log(`Cube Of each element is:`,cube);

const newArray1 = arrayNumbers.map((elements,index)=>{
    return elements+index;
});
console.log(`After Adding index Into each elements:`,newArray1);