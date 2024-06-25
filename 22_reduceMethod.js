let array = [3, 6, 5, 2]; 
const sum = array.reduce((runningTotal, value)=>{
    return runningTotal + value;
},0 );
console.log(sum);

