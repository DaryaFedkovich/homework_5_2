console.log('задание 3');
var a = prompt('введите число'),
	b = prompt('введите число');
function min(){
	if(a < b){
		console.log('наименьшее число: ' +a);
	}
	else
		console.log('наименьшее число: ' +b);
}
function max(){
	if(a > b){
		console.log('наибольшее число: ' +a);
	}
	else
		console.log('наибольшее число: ' +b);
}
min();
max();
