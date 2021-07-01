function getTotal(one){
  return one + arguments[1] + arguments[2];
}

var result = getTotal(0,2,0);
console.log(result);

function getSum(){
  return Array.prototype.reduce.call(
    arguments, 
    function(acc, v) {
      return acc + v;
    }, 
    0
  );
}

var result = getSum.apply(this, [10,20,30,40,50]);
console.log(result);