// You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

// Return the number of consistent strings in the array words.

// Input: allowed = "ab", words = ["ad","bd","aaab","baa","badab"]
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.


// Not sure if this can be optimized more

function numberOfConsistentStrings(allowed, words) {
 
}
var example = ["ad", "bd", "aaab", "baa", "badab"]
console.log(numberOfConsistentStrings("ab", example))


// var consistentStrings = 0
// // loop though the array
// // at each word, loop through its characters :: Bottleneck ... but how to improve it?
// // see if the character is in allowed

// // constint lookup time for allowed
// var map = {}
// for (var char of allowed) {
//     map[char] = char
// }

// for (var word of words) {
//     var good = true
//     for (var char of word) {
//         if (map[char] === undefined) {
//             good = false
//         }
//     }
//     if (good) {
//         consistentStrings++
//     }
// }
// return consistentStrings