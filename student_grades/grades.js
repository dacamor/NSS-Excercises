const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60]


// Basic QuickSort method.  NOT STABLE....obviously
function quickSort(arr, leftPos, rightPos, arrLength) {
	let initialLeftPos = leftPos;
	let initialRightPos = rightPos;
	let direction = true;
	let pivot = rightPos;
	while ((leftPos - rightPos) < 0) {
		if (direction) {
			if (arr[pivot] < arr[leftPos]) {
				quickSort.swap(arr, pivot, leftPos);
				pivot = leftPos;
				rightPos--;
				direction = !direction;
			} else
				leftPos++;
		} else {
			if (arr[pivot] <= arr[rightPos]) {
				rightPos--;
			} else {
				quickSort.swap(arr, pivot, rightPos);
				leftPos++;
				pivot = rightPos;
				direction = !direction;
			}
		}
	}
	if (pivot - 1 > initialLeftPos) {
		quickSort(arr, initialLeftPos, pivot - 1, arrLength);
	}
	if (pivot + 1 < initialRightPos) {
		quickSort(arr, pivot + 1, initialRightPos, arrLength);
	}
}
quickSort.swap = (arr, el1, el2) => {
	let swapedElem = arr[el1];
	arr[el1] = arr[el2];
	arr[el2] = swapedElem;
}
// Basic MergeSort method.  IS STABLE....obviously
var mergeSort = function (array) {
	function merge(arr, aux, lo, mid, hi) {
		var i = lo;
		var j = mid + 1;
		var k = lo;
		while (true) {
			if (arr[i] <= arr[j]) {
				aux[k++] = arr[i++];
				if (i > mid) {
					do
						aux[k++] = arr[j++];
					while (j <= hi);
					break;
				}
			} else {
				aux[k++] = arr[j++];
				if (j > hi) {
					do
						aux[k++] = arr[i++];
					while (i <= mid);
					break;
				}
			}
		}
	}

	function sortarrtoaux(arr, aux, lo, hi) {
		if (hi < lo) return;
		if (hi == lo) {
			aux[lo] = arr[lo];
			return;
		}
		var mid = Math.floor(lo + (hi - lo) / 2);
		sortarrtoarr(arr, aux, lo, mid);
		sortarrtoarr(arr, aux, mid + 1, hi);
		merge(arr, aux, lo, mid, hi);
	}

	function sortarrtoarr(arr, aux, lo, hi) {
		if (hi <= lo) return;
		var mid = Math.floor(lo + (hi - lo) / 2);
		sortarrtoaux(arr, aux, lo, mid);
		sortarrtoaux(arr, aux, mid + 1, hi);
		merge(aux, arr, lo, mid, hi);
	}

	function merge_sort(arr) {
		var aux = arr.slice(0);
		sortarrtoarr(arr, aux, 0, arr.length - 1);
		return arr;
	}

	return merge_sort(array);
}

// Function that sorts grades.  stable is a boolean.  True === stable array sort, False === faster array sort.  scores is the array of grades
const sortGrades = function (stable, scores) {
	const grades = { A: 0, B: 0, C: 0, D: 0, F: 0 }
	let lowestScore = 0
	let highestScore = 0
	let arrIndex = 0
	let mode = {}
	let curScore = scores[0]
	let modeEl = scores[0]
	let minModeEl = scores[0]
	let maxCount = 0
	let minCount = 0


	//Run the stable or unstable sort method
	if (stable) {
		mergeSort(scores)
	} else {
		quickSort(scores, scores[0], scores[(scored.length - 1)], scores.length)
	}

	highestScore = scores[scores.length - 1]
	lowestScore = scores[0]

	while (scores[arrIndex] < 61 && arrIndex < scores.length) {
		grades.F++
		curScore = scores[arrIndex]
		if (mode[curScore] == null)
			mode[curScore] = 1;
		else
			mode[curScore]++;
		if (mode[curScore] > maxCount) {
			modeEl = curScore;
			maxCount = mode[curScore];
		}
		if (mode[curScore] < minCount) {
			minModeEl = curScore
			minCount = mode[curScore]
		}
		arrIndex++
	}
	while (scores[arrIndex] < 71 && arrIndex < scores.length) {
		curScore = scores[arrIndex]
		grades.D++
		if (mode[curScore] == null)
			mode[curScore] = 1;
		else
			mode[curScore]++;
		if (mode[curScore] > maxCount) {
			modeEl = curScore;
			maxCount = mode[curScore];
		}
		if (mode[curScore] < minCount) {
			minModeEl = curScore
			minCount = mode[curScore]
		}
		arrIndex++
	}
	while (scores[arrIndex] < 81 && arrIndex < scores.length) {
		curScore = scores[arrIndex]
		grades.C++
		if (mode[curScore] == null)
			mode[curScore] = 1;
		else
			mode[curScore]++;
		if (mode[curScore] > maxCount) {
			modeEl = curScore;
			maxCount = mode[curScore];
		}
		if (mode[curScore] < minCount) {
			minModeEl = curScore
			minCount = mode[curScore]
		}
		arrIndex++
	}

	while (scores[arrIndex] < 91 && arrIndex < scores.length) {
		curScore = scores[arrIndex]
		grades.B++
		if (mode[curScore] == null)
			mode[curScore] = 1;
		else
			mode[curScore]++;
		if (mode[curScore] > maxCount) {
			modeEl = curScore;
			maxCount = mode[curScore];
		}
		if (mode[curScore] < minCount) {
			minModeEl = curScore
			minCount = mode[curScore]
		}
		arrIndex++
	}
	while (arrIndex < scores.length) {
		curScore = scores[arrIndex]
		grades.A++
		if (mode[curScore] == null)
			mode[curScore] = 1;
		else
			mode[curScore]++;
		if (mode[curScore] > maxCount) {
			modeEl = curScore;
			maxCount = mode[curScore];
		}
		if (mode[curScore] < minCount) {
			minModeEl = curScore
			minCount = mode[curScore]
		}
		arrIndex++

	}


	console.log("most commone grade:",modeEl)
	console.log("least common grade:", minModeEl)
	console.log("array with number of times each letter grade was achieved:", grades)
	console.log("highest score:", highestScore)
	console.log("lowest score:", lowestScore)
}

