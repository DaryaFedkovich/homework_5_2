console.log('задание 4');
var arr = [],
	a = 0;
var n = prompt('введите количество элементов массива');
function Create() { 
	for (i = 0; i < n; i++) { 
		a = Math.random();
	 	arr[i] = Math.trunc(a * 100); 
	} 
	return arr;
}
function Send(){
	Create();
	console.log(arr);
}
Send();