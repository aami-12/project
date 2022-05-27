
function findLongestWord(str) {
    var longestWord = str.sort(function (a, b) {
        return b.length - a.length;
    });
    return longestWord[0].length;
}
console.log(findLongestWord(['1','5','18','100','2000']));