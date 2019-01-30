
function randomInt(max, min=1) {
	return Math.floor(Math.random() * (max - min) + min)
}

function randomArr(size = 10,max = 100, min = 1) {
	var arr = [];
	for(i = 0; i < size; i++ ){
		arr.push(randomInt(max,min));
	}
	return arr;
}

var arr = randomArr();
console.log(arr);
console.log(arr.length);

function bunble(arr,order="desc") {
	var len = arr.length;
	for(i = 0; i<len; i++) {
		for(j=0;j<len-i;j++) {
			var con = order == 'desc' ? (arr[j+1] > arr[j]) :(arr[j+1] < arr[j]);
			if(con) {
				var tmp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = tmp;
			}
		}
	}
	return arr;
}

//console.log(bunble(arr,"asc"));
console.log(bunble(arr,"desc"));

function quick(arr,left=[],right=[]) {
	var len = arr.length;
	if(!arr || len <= 1) {
		return left.concat(arr).concat(right);
	}
	var flage = arr[0];
	for(i=1;i<len;i++) {
		if(arr[i] > flage) {
			left.push(arr[i]);
		} else {
			right.push(arr[i]);
		}
	}
	return 	quick(left).concat([flage]).concat(quick(right));
}

console.log(quick(arr));
