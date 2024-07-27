function isAnagram(str1, str2) {
    const cleanStr1 = str1.toLowerCase().replace(/[^a-z0-9]/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/[^a-z0-9]/g, '');
    const sortedStr1 = cleanStr1.split("").sort().join("");
    const sortedStr2 = cleanStr2.split("").sort().join("");
    
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
isAnagram("moM", "mom");