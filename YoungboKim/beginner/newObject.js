var newNum = new Number(123);
var newObj = new Object(123);
console.log(typeof newNum);
console.log(typeof newObj);
console.log(newNum);
console.log(newObj);
console.log(newNum + 100);
console.log(newObj + 100);

var obj = Object({name: "JS책"});
console.log(obj);

var obj = {name: "value"}
console.log(obj instanceof Object); //true