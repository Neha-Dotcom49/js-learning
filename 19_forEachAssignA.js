const arrayNumbers =[1,-7,40,502,-77,91,0,108,89,-601];

arrayNumbers.forEach((value,index)=>{
    console.log(`Index Of element`,value,`is:`,index);

});

const positiveNum = [];
arrayNumbers.forEach((element)=>{
     if (element>0) {
       positiveNum.push(element);
        
     }
});
console.log(`Positive Numbers are:`,positiveNum);

const negativeNum = [];
arrayNumbers.forEach((element)=>{
if (element<0) {
    negativeNum.push(element)
}
});
console.log(`Negative Numbers are:`,negativeNum);


const evenNum =[];
arrayNumbers.forEach((element)=>{
     if (element%2==0) {
       evenNum.push(element) 
     }
});
console.log(`Even Numbers Are:`,evenNum);

let sum = 0;
arrayNumbers.forEach((element)=>{

   sum = sum + element;
});
console.log(`Sum Of All elements is:`,sum);


const evenIndex = [];
arrayNumbers.forEach((element,index)=>{
    if (index%2==0) {
        evenIndex.push(element)
    }
});
console.log(`Even index elements are:`,evenIndex);


