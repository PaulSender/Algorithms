function findThreeLargestNumbers(array) {
    var one = Number.MIN_VALUE
    var two = Number.MIN_VALUE
    var three = Number.MIN_VALUE
    for (var i = 0; i < array.length-2; i++) {
        if(array[i] > one) {
            one = array[i]
        }
        for(var j = i+1; j < array.length-1; j++) {
            if(array[j] > two && array[j] <= one) {
                two = array[j]
            }
            for(var k = j+1; k < array.length; k++) {
                if(array[k] > three && array[k] <= two) {
                    three = array[k]
                }
            }
        }
    }
    return [three ,two, one]
}


    console.log(findThreeLargestNumbers([141, 1, 17, -7, -17, -27, 18, 541, 8, 7, 7]))