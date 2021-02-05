/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

// look at pair of numbers and set their different to a profit variable
// While we loop, just see if the next pair's profit is greater than out current profit.


// Brute Foce: 

// var maxProfit = 0
// for (var i = 0; i < prices.length - 1; i++) {
//     for (var j = i+1; j < prices.length; j++) {
//         var sell = prices[j]
//         var buy = prices[i]
//         var profit = (sell - buy)
//         if(profit > maxProfit) {
//             maxProfit = profit
//         }
//     }
// }
// return maxProfit

// BUD: 
// Bottle Neck: Nested For Loop
// Unneeded Work: Looking at every possibility
// Duplicate Work: duplicate pairs or pairs that result in a negative profit

// Notes:
// look for smallest and biggest and that's max profit as long as smallest comes after biggest

/*
* @param {number[]} price
* @return {number}
*/
function maxProfit(prices) {
    var smallest = Number.MAX_VALUE
    var maxProfit = 0
    for(var i = 0; i < prices.length; i++) {
        if(prices[i] < smallest) {
            smallest = prices[i]
        }
        if((prices[i] - smallest) > maxProfit) {
            maxProfit = prices[i] - smallest
        }
    }
    return maxProfit
}

var example = [7,1,5,3,6,4]
console.log(maxProfit(example))

// 13 minutes over 45 minute timer
// Take aways
// "Pair" problems can usually be optimized with one loop
// In order to optimize, look at the problem again after brute force. Think about how you would code what was in your head.
