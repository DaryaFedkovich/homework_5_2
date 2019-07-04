console.log('задание 8');
function ArrayFibonachy(){//0-1000	
	var arr = [0,1];
	for(i = 2; i < 1000; i++){	
		arr[i] = arr[i - 1] + arr[i - 2]; 
		if(arr[i] > 1000){
			break;
		}
	}

	console.log(arr);
}
ArrayFibonachy();