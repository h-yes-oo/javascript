var obj = new Number();
console.log(typeof obj); //object

var obj1 = new Number("123");
console.log(obj1.valueOf()); //123

var obj2 = new Number("456");
console.log(obj2.valueOf()); //456

var obj3 = 123;
var obj4 = obj1 + 100;
console.log(obj1); //[Number: 123]
console.log(obj3); //123
console.log(obj4); //223
console.log(typeof obj1); //object
console.log(typeof obj3); //number
console.log(typeof obj4); //number

var value = 20;
console.log(20 === value.toString()); //false
//16진수로 번환
console.log(value.toString(16)); //14

console.log(20..toString());

var toLocale = 1234.56;
console.log(toLocale.toLocaleString());
console.log(toLocale.toLocaleString('de-DE'));
console.log(toLocale.toLocaleString('zh-Hans-CN-u-nu-hanidec'));
