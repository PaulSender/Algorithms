// if(n === 0 || n === 1) {
//     return 0
// }
// if(n === 2) {
//     return 1
// }
// return getNthFib(n-1) + getNthFib(n-2)

function getNthFib(n) {
	if(n === 0 || n === 1) {
        return 0
    }
    if(n === 2) {
        return 1
    }
    var i = 3
    var map = {
        0: 0, 
        1: 0, 
        2: 1
    }
    while (i < n) {
        map[i] = map[i-1] + map[i-2]
        i++
    }
    return map[i-1] + map[i-2]
}

console.log(getNthFib(6))