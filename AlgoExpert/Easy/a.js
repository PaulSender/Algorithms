// Collaborative Filtering - Simple
// Programming challenge description:
// A Recommender System is capable of predicting the preferences of an active user for a set of items. For example, an online store can suggest a product to a shopper based on a history of purchases or page views.

// One of the traditional approaches for constructing such a system is to use Collaborative Filtering. It does not require any information about the items themselves and makes recommendations based on the past behavior of many users.

// Usually, collaborative filtering can be reduced to two steps:

// Look for users with similar interests as the active user
// Use ratings from the other users identified above to make a prediction for the active user
// Your task is to implement the first step using the number of inversions in lists of ratings from other users as a numerical similarity measure.

// An Inversion is a pair of elements (S_{i}, S_{j})(S
// ​i
// ​​ ,S
// ​j
// ​​ ) within the sequence, such that i < ji<j and S_{i} > S_{j}S
// ​i
// ​​ >S
// ​j
// ​​ . Inversions can be counted by iterating over the array and counting the number of elements that are smaller than the current element and are placed to the right of it.

// Here are a few examples:

// Sorted array (1,2,3,4,5) has zero inversions
// Array (5,1,2,3,4) has four inversions: (5,1), (5,2), (5,3), (5,4)
// Array (1,3,5,2,4) has three inversions: (3,2), (5,2), (5,4)
// The maximum possible number of inversions in an array with nn elements is \frac{n(n-1)}{2}
// ​2
// ​
// ​n(n−1)
// ​​ .

// Suppose we asked several people to rank three music genres. We then form a list of ratings for each person from their most favorite to least favorite genre. See the input description below for an example.

// In that example, Bob is our active user and we are going to make a prediction for him. We can enumerate items in his list in ascending order Rock -> 0, Blues -> 1, Jazz -> 2 and replace each genre with their numeric value for all users. Because the array for the active user is already sorted, it has zero inversions.

// If a person in this set has identical preferences and ranks items exactly the same way as the active user, the number of inversions in the array would be zero. In general, the more inversions the array has, the more varied those preferences are.

// For users in the current example we have:

// Alice:0,2,1
// John:2,1,0
// Now it's a straightforward process to calculate the number of inversions for each user. Alice has 1 inversion: (2,1). And John has 3 inversions: (2,1), (2,0) and (1,0).

// So Alice has more preferences in common with Bob and is more suitable as the basis of a prediction.

// Input:
// Each line contains a user name and an ordered list of their preferences separated by a colon. Items in the list are comma-delimited. The first line of the input is the active user (the user whom a prediction is for). For example:

// Bob:Rock,Blues,Jazz
// Alice:Rock,Jazz,Blues
// John:Jazz,Blues,Rock
// Output:
// Print the list of users to be considered for making a recommendation. The list must be sorted by the number of inversions in ascending order. If two users have the same count of inversions sort, them alphabetically.

// For example:

// Alice,John