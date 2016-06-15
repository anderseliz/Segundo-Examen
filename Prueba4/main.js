do{
	var num = prompt("Ingresa un número.");
}while(isNaN(num));

var str = "";
for (var r = 0; r < num; r++){	
	for (var c = 0; c < num; c++){
		if (r == 0 || (r+1) == num){
			str+="*";
		}else if (c == 0 || (c+1) == num){
			str+="*";
		}else{
			str+=" ";
		}
		str+="\t"								// Indentación para formato
	}
	str+="\n";									// Guardamos todo junto en un solo string
}
console.log(str);