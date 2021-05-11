var odd = 0;
var even = 0;
for(var i = 1; i < 51; i++){
	if(i%2 == 0) even += i;
	else odd += i;
}
console.log(odd);
console.log(even);