console.log(isNaN("ABD")); //true
console.log(isNaN(123)); //false
console.log(isNaN("123")); //false 값이 숫자로 변환되므로 false 반환
console.log(isNaN(null)); //false ; null은 숫자 0 으로 변환 되므로

console.log(isFinite("ABD")); //false
console.log(isFinite(123)); //treu
console.log(isFinite("123")); //true 값이 숫자로 변환되므로 true 반환
console.log(isFinite(null)); //true ; null은 숫자 0 으로 변환 되므로