let greet = ()=>{
console.log(`Good Afternoon Today is friday`);
}
greet();


let multiply = (n1, n2, n3=1)=>{
const result = n1*n2*n3;
console.log(`Multiplication of given number ${n1},${n2},${n3} is:`,result);
}
multiply(5,5,2);
multiply(10,4)



let add = (m1,m2,m3,m4,m5) =>{
   const result = m1 + m2 + m3 + m4 + m5;
   return result;
}
let values = add(100,100,200,349,756);
console.log(`Addition of given numbers is:`,values);
let values1 = add("I am", " Learning" , " ES6" , " Feature" , " In depth");
console.log(`Addition Of Given Words is:`,values1);