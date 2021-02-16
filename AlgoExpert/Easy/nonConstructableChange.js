// Given an array of positive integers representing the vlaues of coins in your possesstion, write a functio nthat returns the minium amount of change (the minimum sum of money) that you cannot create.
// The given coins can have any positive integer value and aren't necessariliy unique.

// For example, if you're given coins = [1, 2, 5], the min amount of change that you can't create is 4. if you're gtiven no coins, the min amouint of change that you can't create is 1.

// Upper bound for MAX change is the largest number in the array.. 
// Lower bound is smallest..  find the min in between?
// Add Min + all besides max to find second max.. return number between second max and max?

// Needed video explanation

// Need to give sort method something to sort on

//@param{number[]} counts
//@ return {number} min non-obtainable change amount
function nonConstructableChange(coins) {
    if(coins.length === 0) {
        return 1
    }
    var createable = 0
    var scoins = coins.sort((a,b) => a-b)
    for (var coin of scoins) {
        if(coin > createable + 1) {
            return createable + 1
        }
        createable += coin
    }
    return createable + 1
}

const example = [5, 7, 1, 1, 2, 3, 22]
console.log(nonConstructableChange(example))

