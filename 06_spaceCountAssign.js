function countSpaces(sentence){
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
    if (sentence[i]==" ") {
        count++;
    }
}
console.log(`Given String is:`,sentence);
console.log(`Total Space Count Is:`,count);
}
countSpaces("JavaScript is the language of internet world");
countSpaces("Revision is the mother of success");