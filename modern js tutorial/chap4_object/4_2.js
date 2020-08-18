let user = {
    name: "John",
    age: 30
};

let clone = Object.assign({}, user);

console.log(clone);
console.log(user);
console.log(clone == user);
