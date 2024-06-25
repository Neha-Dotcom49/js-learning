let add = function(){
    console.log(10+10);
    // console.log(this);
}
add();

// Arrow Function 
let multiply = (n1, n2) => {
    const result =n1*n2;
    return result;
}
const value = multiply(2, 9);
console.log(value);