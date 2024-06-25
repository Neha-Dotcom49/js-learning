function stringHandsOn() {
    var str = "    Hey you are doing good, keep it up    ";

    console.log(`1.Original string: "${str}"`);

    var originalLength = str.length;
    console.log(`2.Length of the original string: ${originalLength}`);

    var trimmedStr = str.trim();   //removed extra spaces
    var trimmedLength = trimmedStr.length;
    console.log(`3.Trimmed string: "${trimmedStr}"`);
    console.log(`Length of the trimmed string: ${trimmedLength}`);

    var extraSpacesCount = originalLength - trimmedLength;
    console.log(`4.Total number of extra spaces removed: ${extraSpacesCount}`);

    var firstChar = trimmedStr.charAt(0);
    var lastChar = trimmedStr.charAt(trimmedStr.length - 1);
    console.log(`5.First character: "${firstChar}", Last character: "${lastChar}"`);

    var wordCount = trimmedStr.split(' ').length;
    console.log(`6.Total number of words: ${wordCount}`);

    var indexOfGood = trimmedStr.indexOf('good');
    console.log(`7.Index of the word "good": ${indexOfGood}`);

    var substringFromIndex22 = trimmedStr.substring(22);
    console.log(`8.Substring starting from index 22: "${substringFromIndex22}"`);

    var endsWithUp = trimmedStr.endsWith('up');
    console.log(`9.String ends with "up": ${endsWithUp}`);

    var startsWithHey = trimmedStr.startsWith('Hey');
    console.log(`10.String starts with "Hey": ${startsWithHey}`);

    

}

stringHandsOn();