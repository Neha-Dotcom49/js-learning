function giveMeMoney(){
    console.log("Let me arrange for you..");
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("Okay. take this 10000 rs");
            // reject("Sorry.. I am not able to manage"); ;
        }, 5000);
    });   
}
try {
    const promise = await giveMeMoney();
    console.log(promise);
} catch (error) {
    console.log(error);
}
console.log("Thank you...");