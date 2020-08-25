// 원시값은 객체보다 가벼운 장점이 있는데, 이 점을 살리면서 작업이 수월하도록 원시값 메서드를 사용할 수 있다
// 원시값이 메서드나 프로퍼티에 접근하려 할 때, "object wrapper"라는 특수 객체가 생성됨
/* 원시값의 종류
1. number
2. string
3. boolean
4. null
5. undefined
6. symbol
7. bigint
*/

//task 1
let str = "Hello";
str.test = 5;
console.log(str.test);