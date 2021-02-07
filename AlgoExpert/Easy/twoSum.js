// Write a function that takes in a non-empty array of distint integers and an interger represeting a target sum. 
// If any two numbers in the input array sum up to the target sum, the function should return them in an array, in
// any order. If no two nuymbers sum up to the target sum, the function should return an empty array.

// Note that the target sum has to be obtained by summing two different integers in the array; you can't add a single intger to itself in order to obtain the target sum.

// you can assume that there will be at most one pair of numbers summing up to the target sum. 

// Brute Force

// for (var i = 0; i < array.length - 1; i++) {
//     for (var j = i + 1; j < array.length; j++) {
//         if (array[i] + array[j] === targetSum) {
//             return [array[i], array[j]]
//         }
//     }
// }
// return [] 


function twoNumberSum(array, targetSum) {
    // Look for the difference between the target sum and the current index and search the rest of the array for that different. 
    // Search function::tells me to use a Map
    var map = {}
    for (var num of array) {
        if (map[num] === undefined) {
            map[num] = num
        }
    }
    for (var num of array) {
        var difference = targetSum - num
        if (map[difference] !== undefined && difference !== num) {
            return [difference, num]
        }
    }
    return []
}



var example = [3, 5, -4, 8, 11, 1, -1, 6]
console.log(twoNumberSum(example, 10))
