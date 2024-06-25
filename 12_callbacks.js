let jennyHomework = function(callback){
    console.log(`Jenny started homework`);
    console.log(`Jenny took an hour`);
    console.log(`Finally she has completed her homework`);
    callback();
}
let elonCopyHomework = function(){
    console.log(`Elon is playing`);
    console.log(`Jenny called back Elon`);
    console.log(`Elon came and copied his homework`);
}

jennyHomework(elonCopyHomework);

function doHomework(callback){

    console.log(`doing`);
    console.log(`completed`);
    callback();
}

function copyHome(){
    console.log(`Homework copied`);
}
doHomework(copyHome);


let iWillDo = function(call){
    console.log(`i took some time`);
    call();
}
let iWillCopy = function(){
    console.log(`i copied`);
}
iWillDo(iWillCopy);

