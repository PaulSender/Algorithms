function balancedSum(arr) {
    var sum = 0
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    var leftSum = 0
    for (var i = 0; i < arr.length; i++) {
        sum = sum - arr[i];
        if (leftSum === sum) {
            return i
        }
        else {
            leftSum += arr[i]
        }
    }
    return -1

    // const len = arr.length;
    // let sum = 0;
    // let leftsum = 0;
    // for (let i = 0; i < len; i++) {
    //     sum += arr[i];
    // }
    // for (let j = 0; j < len; j++) {
    //     sum -= arr[j];
    //     if (leftsum === sum) {
    //         return j;
    //     }
    //     leftsum += arr[j];
    // }
    // return false;
}

console.log(balancedSum([1, 2, 3, 3]))