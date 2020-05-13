function numberGame(x, y) {
	var numArray = [];
	if (x > y) {
		for (i=y+1; i<x; i++) {
			if (i%2 == 0) {
				numArray.push(i);
			}
		}
	} else {
		for (i=x+1; i<y; i++) {
			if (i%2 != 0) {
				numArray.push(i);
			}
		}
	}
	return numArray;
}