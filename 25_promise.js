const isPrepared = true;
const notesPromise = new Promise((resolve, reject)=>{
    if (isPrepared) {
       resolve("Buddies take this one and also prepare your notes"); 
    }
    reject("Sorry, guys. Will not be able to share notes...");
});
notesPromise.then((success)=>{
    console.log(success);
    console.log("Thank you so much..");
}).catch((failure)=>{
    console.log(failure);
    console.log("Bahot khadus teacher hai.. Hatt yarr");
}).finally(()=>{
    console.log("Finally.. Need to prepare my notes as well");
});