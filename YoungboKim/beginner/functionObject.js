var obj = new Function("book", "return book + ' is a book';");
console.log(obj("hihi"));

var ftnWithTwo = new Function("one","two","return one + two;");
console.log(ftnWithTwo(3,100));

function getBook(title){
  return title;
}

var result = getBook("js book");
console.log(result);

function add(one, two) {
  return one + two;
}

console.log(add(1));
console.log(add.length);

var getBook = function(title){
  return title;
};
var result = getBook('hihi');
console.log(result);

var someFtn = function inside(value){
  if (value === 102){
    return value;
  };
  console.log(value);
  return inside(value + 1);
};

someFtn(99);