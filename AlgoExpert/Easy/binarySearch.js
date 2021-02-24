function binarySearch(array, target) {
    if (target === array[array.length / 2]) {
        return array.length / 2
    }
    console.log(parseInt(array.length / 2));
    var start = target > array[parseInt(array.length / 2)] ? parseInt(array.length / 2) : 0
    var end = target > array[parseInt(array.length / 2)] ? array.length : parseInt(array.length / 2)
    for (var i = start; i < end; i++) {
        if (array[i] === target) {
            return i
        }
    }
    return -1
}

console.log(binarySearch([0, 1, 21, 33, 45, 45, 61, 71, 72, 73, 355], 355))