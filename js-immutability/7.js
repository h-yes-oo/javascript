const o1 = {name:'kim'}
Object.freeze(o1)
const o2 = {name:'lee'}
//o1 = o2; //const에 의해 에러 발생
o1.name = 'park' // freeze에 의해 바뀌지 않음
console.log(o1)