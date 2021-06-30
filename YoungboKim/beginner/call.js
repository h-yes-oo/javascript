var value = {one: 10, two: 20};

function getTotal() {
  return this.one + this.two;
}

var result = getTotal.call(value);
console.log(result)

var string = getTotal.toString();
console.log(string);