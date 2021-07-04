var list = [12, 34, 56];
for (var k = 0; k < list.length; k++){
  console.log(list[k]);
}

var twodlist = [[12, 34, 56],[1,2,3]]
for (var k = 0; k <twodlist.length; k++){
  var one = twodlist[k];
  for(var m = 0; m < one.length; m++){
    console.log(one[m]);
  }
}