console.log(`Count the total number of a character`);
var word = "JavAScript";
var counter = 0;
for (let index = 0; index < word.length; index++) {
    var ch = word.charAt(index);
    if (ch=="a") {
        counter ++;
    }
}
console.log(`Total number of a is: ${counter}`);


//-------------------------------------------------------------------------
function charCountWithoutSpacesAndPunctuation(str) {
    // Remove all non-alphabetic characters using a regular expression
    let stringWithOnlyAlphabets = str.replace(/[^a-zA-Z]/g, '');
    // Return the length of the string with only alphabetic characters
    return stringWithOnlyAlphabets.length;
  }
  
  // Example usage
  let exampleString = "Hello, World!";
  let count = charCountWithoutSpacesAndPunctuation(exampleString);
  console.log(count); // Output will be 10



  