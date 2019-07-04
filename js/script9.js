console.log('задание 9');
function Summa(n){
	for(i = 0; i < n.length; i++){
		var sum = 0;
		sum = sum + parseInt(n[i]);
	}
	n = sum;
	if(sum > 9){
		return Summa(n);
	}
	console.log(n);
}
var n = prompt('ввведите число');
Summa(n);