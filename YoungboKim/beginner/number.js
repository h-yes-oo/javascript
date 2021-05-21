console.log(Number("123") + 500); //623
console.log(Number("ABC")); //NaN

console.log(Number(0x14)); //20
console.log(Number(true)); //1
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);

var obj1 = new Number("123");
console.log(obj1.valueOf()); //123

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

var val = 123;
console.log(val.toExponential()); //1.23e+2

var val2 = 123456;
console.log(val2.toExponential()); //1.23456e+5
console.log(val2.toExponential(3)); //1.235e+5

var val3 = 1234.567;
console.log(val3.toFixed()); //1235
console.log(val3.toFixed(2)); //1234.57
console.log(val3.toFixed(5)); //1234.56700
