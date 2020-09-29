var p1 = 1
var p2 = 1
// p1 과 p2는 value 중 같은 1을 가리킴
console.log(p1,p2,p1 === p2) //true

var o1 = {name:'kim'}
var o2 = {name:'kim'}
//o1과 o2는 서로 다른 값을 가리킴
console.log(o1,o2,o1 === o2) //false