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

var num = 123;
console.log(typeof num);
var result = num.toString();
console.log(typeof result);

var instance = new String("123");
var oneProto = instance.__proto__;
console.log(oneProto);

var value = "sports";
console.log(value.charAt(1));
console.log(value[2]);
console.log(value.charAt(12));
console.log(value[12]);

var value = "123123";
console.log(value.indexOf(123));
console.log(value.indexOf(123,2));
console.log(value.indexOf(4));

var value = "123123";
console.log(value.lastIndexOf(123));
console.log(value.lastIndexOf(123,2));
console.log(value.lastIndexOf(4));

var first = new String("hihi");
console.log(typeof first);
var second = first.concat(" nice to meet", " you");
console.log(typeof second);
console.log(second);

var value = "abcabc";
console.log(value.replace("a", "b"));
console.log(value.replace(/a/g,"b"));

function hihi() {
  return "hihi";
}
console.log(value.replace(/a/g, hihi));


console.log(String.fromCharCode(49,65,97,44032)); //1Aa가