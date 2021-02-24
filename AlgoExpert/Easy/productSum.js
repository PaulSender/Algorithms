// function productSum(array) {
//     var productSum = 0
//     for (var ele of array) {
//         if(Array.isArray(ele)) {
//             productSum += helper(ele, 2)
//         }
//         else {
//             productSum += ele
//         }
        
//     }
//     return productSum
//   }

//   function helper(ele, depth) {
//     var sum = 0
//     for (var x of ele) {
//         if(Array.isArray(x)) {
//             sum += helper(x, depth + 1)
//         }
//         else {
//             sum += x
//         }

//     }
//     return depth * sum
//   }

function productSum(array, depth = 2) {
    var sum = 0
    for(var ele of array) {
        if(Array.isArray(ele)) {
            sum += depth * productSum(ele, depth+1)
        }
        else {
            sum += ele
        }
    }
    return sum
}

  var input = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
  console.log(productSum(input))