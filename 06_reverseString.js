console.log(`Reverse the string`);
var word = "JavaScript"; 
var result = "";// tpircSavaJ
for (let index = word.length-1; index >=0; index--) {
    var ch = word.charAt(index);
    result = result + ch;
}
console.log(result);