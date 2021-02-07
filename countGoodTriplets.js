/*
Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.

A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:

0 <= i < j < k < arr.length
|arr[i] - arr[j]| <= a
|arr[j] - arr[k]| <= b
|arr[i] - arr[k]| <= c
Where |x| denotes the absolute value of x.

Return the number of good triplets.

Input: arr = [3,0,1,1,9,7], a = 7, b = 2, c = 3
Output: 4
Explanation: There are 4 good triplets: [(3,0,1), (3,0,1), (3,1,1), (0,1,1)].
*/

// Brute Force

// var goodTriplets = 0 
//     for(var i = 0; i < arr.length-2; i++) {
//         for(var j = i+1; j < arr.length-1; j++) {
//             for(var k = j+1; k < arr.length; k++) {
//                 if(abs(arr, i, j) <= a && abs(arr, j, k) <= b && abs(arr, i, k) <= c) {
//                     goodTriplets++
//                 }
//             }
//         }
//     }
//     return goodTriplets

// The optimized solution to this is too much work for it to be worth it.

var countGoodTriplets = function(arr, a, b, c) {
    
};

function abs(arr, x, y) {
    return Math.abs(arr[x] - arr[y])
}

var example = [3,0,1,1,9,7]
var a = 7
var b = 2
var c = 3
console.log(countGoodTriplets(example, a, b, c))