console.log('задание 7');
function Pyramid(n){
	for(i=0;i<n;i++){
		for(j=0;j<i+1;j++){
			document.write(i+1);
		}
		document.write('<br/>');
	}
	if(!parseInt(n)){
		for(i=0;i<9;i++){
			for(j=0;j<i+1;j++){
				document.write(n);
			}
			document.write('<br/>');
		}
	}
}
var n = prompt('введите параметр');
Pyramid(n);