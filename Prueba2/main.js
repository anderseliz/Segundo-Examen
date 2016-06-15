var arr1 = [1,2,3,4,5,6,7,8,9];
var arr2 = [];
function clonaArreglo(source){
	var arr = [];
	source.forEach(function(e){
		arr.push(e);
	})
	return arr;
}

var arr2 = clonaArreglo(arr1);

console.log(arr1);
console.log(arr2);