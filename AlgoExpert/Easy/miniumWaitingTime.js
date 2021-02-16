//Possible duplicate work is looping throuhg the array 'twice' possible to solve the problem while sorting? - maybe but too complicated if possible

// Can improve the sort method because I don't know runtime of JS sort... should implement down merge or quick sort for fastest times (bottleneck 2)
//  var sorted = queries.sort((a,b) => a-b)
//  var totalTime = 0
//  var times = [sorted[0]]
//  // Can improve by not double looping (bottleneck)
//  for(var i = 1; i < sorted.length; i++) {
//    for(var time of times) {
//        totalTime += time
//    }
//    times.push(sorted[i])
//  }
//  return totalTime

// Solution visualized: 
// create map to hold times. map will start at the first index of sorted and its value will be sorted[0]
// At each iteration of sorted, we set the key to be the index and the value to be the previous map's index's value + sorted at the previous index
// Should stop populating at the last value (don't include it)
// To get total, in a seperate loop, simply loop through the maps values and add it to the running total
// {[1]: 1, = 1
//  [2]: Map.get(previous value) + sorted[i - 1], (2 + 1) = 3
//  [3]: ... (3 + 2) = 5,
//  [4]: ... (5 + 3) = 8
// }

function minimumWaitingTime(queries) {
    if(queries.length <= 1) {
        return 0
    }
    var sorted = queries.sort((a,b) => a-b)
    var map = {
        0: sorted[0]
    }
    for (var i = 1; i < sorted.length-1; i++) {
        map[i] = map[i-1] + sorted[i]
    }
    var total = 0
    for(var step of Object.values(map)) {
        total += step
    }
    return total
}
// 1, 2, 2, 3, 6
var queries = [3, 2, 1, 2, 6]
console.log(minimumWaitingTime(queries))