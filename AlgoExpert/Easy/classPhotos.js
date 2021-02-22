// Really bad code


function classPhotos(redShirtHeights, blueShirtHeights) {
    blueShirtHeights = blueShirtHeights.sort((a, b) => a - b)
    redShirtHeights = redShirtHeights.sort((a, b) => a - b)
    var backMap = {}
    if (redShirtHeights[0] === blueShirtHeights[0] && redShirtHeights.length === 1) {
        return false
    }
    backMap.color = redShirtHeights[0] > blueShirtHeights[0] ? 'red' : 'blue'
    for (var i = 0; i < redShirtHeights.length; i++) {
        if (redShirtHeights[i] === blueShirtHeights[i]) {
            return false
        }
        if (redShirtHeights[i] > blueShirtHeights[i] && backMap.color === 'blue') {
            return false
        }
        if (redShirtHeights[i] < blueShirtHeights[i] && backMap.color === 'red') {

            return false
        }
    }
    return true
}

var x = [2, 4, 7, 5, 1]
var y = [3, 5, 6, 8, 2]
console.log(classPhotos(x, y))