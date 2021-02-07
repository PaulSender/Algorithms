// Given two non-empty arrays of integers, write a function that determiens whether the second array is a subsequence of the first one. 

// A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array.
// For instance, the numbers [1,3,4] form a subsequence of the array [1,2,3,4], and so do the numbers [2,4]. Note that a single number in an array and the array itself are both valid 
// subsequences of the array. 



// check each and every pair of the two arrays
// so like 5 and 1. 5 and 6. 5 and -1... 22 and 6 22 and -1.. etc. to see if they match, if they do.. we can push the sub array number to a new array and check that new array against the sequence at the end
// ^ A lot of work and not very good. So going to jump to what I think is an optimized solution first and not go to brute force.

// Questions I would ask: 

// would ask for clarification on  Note that a single number in an array and the array itself are both valid subsequences of the array. Can they give an example of this.
// Can the sequence array contain numbers that are non-unqiue for example [0,0,0,0,0]. The reason for this is could add a chunk of code that places the sequence array in a map of itself
// and when cases like this show up, it could save run time by doing a constant time look up... but would still need to loop through the whole array to place in a map so that doesn't matter.

// Notes after failed tests
// Duplicates need to be accounted for so maybe set the map's value as the number of times its appeared and check
// Ordering of the sequence array needs to be accounted for as well
// [1,2,3,4]
// [4,3,2,1] is not a subsequence

// Failed... Needed to watch video explanation... work before doing so...
// Placing the big array in a map (potential bottle neck)
    // Checking the map for each value in the sequence array
    // set bool var above the loop to true and loop through, if the map doesn't contain a number, return false otherwise continue until all numbers are checked.
    // var map = {}
    // for (var num of array) {
    //     if(map[num] === undefined) {
    //         map[num] = 1
    //     }
    //     else {
    //         map[num] = map[num] + 1
    //     }
    // }
    // // console.log(map)
    // for(var sub of sequence) {
    //     if(map[sub] === undefined || map[sub] === 0) {
    //         return false
    //     }
    //     map[sub]--
    // }
    // return true

    
    // var potential = 0
    // for(var i = 0; i < array.length; i++) {
    //     if(sequence[i] === array[i]) {
    //         potential++
    //         continue
    //     }
    //     else { return false }
    // }
    // return true


function isValidSubsequence(array, sequence) {
    // Counter for index of sequence
    var sub = 0
    // Loop though main array
    for(var main = 0; main < array.length; main++) {
        // If the counter for index of squence is the length of the sequence (at the end) break the loop
        if (sub === sequence.length) {
            break
        }
        // If we found a match, increment our sub seqeunce value and continue the loop
        if(sequence[sub] === array[main]) {
            sub += 1
        }
    }
    // check if the counter for index of sequence is the length of the sequence (at the end). If it is, then we've travered the entire subequence array and found nothing that would break out condition
    // if its not, then we know the loop has been broken due to our condition and we can return that we have not travered the sequence array because something went wrong. 
    // the other condition for breaking is if we run out of elements in the main array. 

//     "array": [5, 1, 22, 25, 6, -1, 8, 10],
//   "sequence": [5, 1, 25, 22, 6, -1, 8, 10]

// for example, after we match 25, we try to match 22 and can't because it already appeared before the match. we traverse through the rest of the main array and don't find it. We break the main
// array loop and return that the index sub does not indicate that we made it through the entire sub array. 

    return sub === sequence.length
}

var example = [5, 1, 22, 25, 6, -1, 8, 10]
var seqeunce = [1, 6, -1, 10]

console.log(isValidSubsequence(example, seqeunce))