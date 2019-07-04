console.log('задание 6');
var arr = [3,4,7,9,11,14,18,5],
	arr2 = [];
function Array(){
	for(i = 0; i < arr.length; i++){
		if(arr[i] % 2 == 0){
			arr2[i] = arr[i];
		}
	}
	console.log(arr2);
}
Array();