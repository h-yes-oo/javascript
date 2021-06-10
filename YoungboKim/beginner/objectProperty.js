var obj = { coco: "so cute" };
var own = obj.hasOwnProperty("coco");
var ownInherited = obj.hasOwnProperty("hasOwnProperty");
console.log(own);
console.log(ownInherited);

var obj = {sports: "축구"};
console.log(obj.propertyIsEnumerable("sports"));

Object.defineProperty(obj, "sports", {
  enumerable: false
});
console.log(obj.propertyIsEnumerable("sports"));

for(var name in obj){
  console.log(name);
}

var numObj = new Number(123);
console.log(Object.prototype.isPrototypeOf(numObj)); 