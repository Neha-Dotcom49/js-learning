function isPalindrome(str){
    let reverseStr = str.split("").reverse().join("");
     if (str==reverseStr) {
        console.log(`Given string ${str} : is palindrome`);
        
     }else{
        console.log(`Given string ${str} : is not a palindrome`);
     }
}
isPalindrome("madam");
isPalindrome("141");
isPalindrome("Sunday");
isPalindrome("mom");
isPalindrome("listen");
isPalindrome("dad");

