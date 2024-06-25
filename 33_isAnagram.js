

function isAnagram(str1, str2) {
    const sortedStr1 = str1.split("").sort().join("");
    const sortedStr2 = str2.split("").sort().join("");
    
    if (sortedStr1 === sortedStr2) {
        console.log(`The words ->"${str1}" , "${str2}" are anagrams.`);;
    } else {
        console.log(`The words ->"${str1}" , "${str2}" are not anagrams.`);;
    }
}

isAnagram("vile", "evil");
isAnagram("silent", "listen");
isAnagram("gram", "aram");
isAnagram("mom", "tom");