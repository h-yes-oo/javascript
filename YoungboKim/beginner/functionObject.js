var obj = new Function("book", "return book + ' is a book';");
console.log(obj("hihi"));

var ftnWithTwo = new Function("one","two","return one + two;");
console.log(ftnWithTwo(3,100));