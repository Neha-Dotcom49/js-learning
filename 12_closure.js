var globalVariable = 100;
function outer(){
    let outerVariable = 200; 
    console.log(globalVariable);
    console.log(outerVariable);
    let innerFunction = function(){
        const innerVariable = 300;
        console.log(`Inner Function...`);
        console.log(innerVariable);
        console.log(outerVariable);
        console.log(globalVariable);
    }
    return innerFunction;
}
const result = outer();
result();



