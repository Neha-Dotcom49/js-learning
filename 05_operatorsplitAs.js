function squareOfWordLength(argOne){
    
    var len = argOne.length;
    var result = len * len;

    return result;
}
console.log(`===========Step 1=============`);

var returnValue = squareOfWordLength("JavaScript");
console.log(`The lenght of javascript is: ${"javascript".length} And The Squrelenght of javascript is: ${returnValue} ` );


// var argOne = "Google Chrome";
var returnValue = squareOfWordLength("Google Chrome");
console.log(`The length of Google Chrome is: ${"Google Chrome".length} And The Squrelenght of Google Chrome is: ${returnValue} ` );

// var argOne = "Developer smart";
var returnValue = squareOfWordLength("Developer Smart");
console.log(`The length of Developer Smart is: ${"Developer Smart".length} And The Squrelenght of Developer Smart is: ${returnValue} ` );

console.log(`===========Step 2=============`);
var str = "I am Angular Developer";
var len = str.length;
var totalWords = str.split(" ").length;
var result = len / totalWords;
var resultMul = len * totalWords;
var wordCount = str.split(' ').length;
console.log(`Total number of words: ${wordCount}`);
console.log(`Length of String is ${len} and Divide by Total Number of words result Is: ${result}`);
console.log(`Length of String is ${len} and Multiply Total Number Of words result Is: ${resultMul}`);
