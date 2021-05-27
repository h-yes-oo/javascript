var haha = "hi" + " nice to meet " + "you";
console.log(haha);

var value = String(123);
console.log(value.length);
console.log(value);
console.log(typeof value);

var obj = new String(123);
console.log(typeof obj);
console.log(obj.valueOf());

var value = "ABC";
for(var i = 0; i < value.length; i++)
	console.log(value[i]);

var long = "  hi hihi  hello    ";
console.log(long.trim().length);