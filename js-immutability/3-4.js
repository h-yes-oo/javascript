var o1 = {name:'kim', score:[1,2]}
//이때, o1 의 score는 배열의 위치를 저장하고 있다
var o2 = Object.assign({},o1)
o2.score.push(3)
console.log(o1,o2, o1===o2, o1.score === o2.score)