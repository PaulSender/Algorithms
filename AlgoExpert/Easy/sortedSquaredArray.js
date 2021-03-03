function sortedSquaredArray(array) {
	if(array.length === 1) {
		return [array[0] * array[0]]
	}
 	var squared = []
	var pos = array.length - 1
	var s = 0
	var l = array.length - 1
	while(pos >= 0) {
		if(Math.abs(array[s]) <= Math.abs(array[l])) {
			squared[pos] = array[l] * array[l]
			l--
		}
		else {
			squared[pos] = array[s] * array[s]
			s++
		}
		pos--
	}
	return squared
}
