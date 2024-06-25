function greet(callbacks){
    console.log(`Good Morning `);
    callbacks();
    let innerFunction = function(){
        console.log(`See you soon...`);
    }
    return innerFunction;
}
let sayBye = function(){
    console.log(`Bye.. `);
}
greet(sayBye)();