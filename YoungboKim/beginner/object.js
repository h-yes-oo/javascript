var book = {};
book.title = "js book";
console.log(book);

book["title"] = "this book";
console.log(book);

var varName = "content";
book[varName] = "new content";
console.log(book)