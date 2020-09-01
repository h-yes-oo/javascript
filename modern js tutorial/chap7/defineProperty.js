let user = {
    name: "John",
    toString() {
        return this.name;
    }
};

Object.defineProperty(user,"name",{
    writable: false
});
user.name = "Pete"; //엄격 모드에서 에러 발생
console.log(user);

for (let key in user) console.log(key);

Object.defineProperty(user, "toString", {
    enumerable: false
})

for (let key in user) console.log(key);

let user = { };

// configurable 플래그가 false로 되어 있으면, 해당 프로퍼티는 객체에서 지울 수 없음
// 또한 configurable 플래그를 다시는 수정 불가

Object.defineProperty(user, "name", {
  value: "John",
  writable: false,
  configurable: false
});

// user.name 프로퍼티의 값이나 플래그를 변경할 수 없습니다.
// 아래와 같이 변경하려고 하면 에러가 발생합니다.
//   user.name = "Pete"
//   delete user.name
//   defineProperty(user, "name", { value: "Pete" })
Object.defineProperty(user, "name", {writable: true}); // Error

