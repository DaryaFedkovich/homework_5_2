console.log('задание 10');
function Array(arr, i){
	if(i < arr.length){
		console.log(arr[i]);
		return Array(arr, i + 1);
	}
}
var arr = [4,8,9,10,13,0,2,32];
Array(arr, 0);