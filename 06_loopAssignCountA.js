
console.log(`--------1.Count the total number of vowels including small and capital vowel using for loop---------`);
var str = "I am very good IT Developer";
var vowels = "aeiou";
var counter = 0;
for (let index = 0; index < str.length; index++) {
    var ch = str.charAt(index);
    var chLowerCase = ch.toLowerCase();
    if (vowels.includes(chLowerCase)) {
        counter++;
    }
}
console.log(counter);


console.log(`------------------2.WAF to get sum of cube of number from 1 to 5----------`);
function sumOfcube1(){
    var sumOfcube1 = 0;
    for (let i = 1; i <= 5; i++) {
        var cube2 = i * i * i;
        sumOfcube1 = sumOfcube1 + cube2; 
    }
    console.log(sumOfcube1);
}
sumOfcube1();

console.log(`--------2.WAF to get sum of cube of number from 1 to 5 with the help of return value----------`);
var sumOfcube = function(num){
    
    var sumOfcube = 0;
    for (let i = 0; i <= num; i++) {
        
        var cube  = i * i * i;
        sumOfcube = sumOfcube + cube;
    }
    return sumOfcube;
}
var returnValue = sumOfcube(5);
console.log(`sum of cube of number 5 is:${returnValue}`);
var returnValue = sumOfcube(6);
console.log(`sum of cube of number 6 is:${returnValue}`);



console.log(`--------3.WAP a program to print odd position character----------`);
function oddPositionChars(str){
    var result = "";
    for (let index = 0; index < str.length; index++) {
        var ch = str.charAt(index);
        if (index%2==1 && ch != ' ') {
            result = result + ch;  
        }  
    }
    console.log(result);
}
oddPositionChars("Hard Work always pay back");
oddPositionChars("Soon I will be UI IT Champ");





