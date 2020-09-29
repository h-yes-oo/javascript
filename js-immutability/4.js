function fn(person){
    person.name = 'lee';
}

var o1 = {name:'kim'}
var o2 = Object.assign({},o1);
fn(o2);
console.log(o1,o2); //{name:'lee'}

function fnn(person){
    person = Object.assign({},person);
    person.name = 'lee';
    return person
}
var o2 = {name:'kim'};
var o3 = fnn(o2);
console.log(o2,o3);