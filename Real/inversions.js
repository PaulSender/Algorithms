   // var len = arr.length
    // if(len < 3) {
    //     return 0;
    // }
    // var count = 0;
    // for(var i = 0; i < len - 2; i++) {
    //     for(var j = i+1; j < len - 1; j++) {
    //         for(var k = j+1; k < len; k++) {
    //             if((i < j && j < k) && (arr[i] > arr[j] && arr[j] > arr[k])) {
    //                 count++
    //             }
    //         }
    //     }
    // }
    // return count
function maxInversions(arr) {
    var len = arr.length
    if(len < 3) {
        return 0
    }
    var count = 0
    for (var i = 0; i < len - 1; i++) {
        var lessThan = 0
        for(var j = i+1; j < len; j++) {
            if(arr[i] > arr[j]) {
                lessThan++
            }
        }
        var greaterThan = 0
        for(var j = i-1; j >= 0; j--) {
            if(arr[i] < arr[j]) {
                greaterThan++
            }
        }
        count += lessThan * greaterThan
    }
    return count
}

console.log(maxInversions([4, 1, 3, 2, 5]))