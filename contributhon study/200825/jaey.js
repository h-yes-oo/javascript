function fact(n) {
    if(n == 2) {
        return 2;
    } else {
        return n*fact(n-1);
    }
}

console.log(fact(3));

function myConcat(separator){
    var s = "";
    for(let i = 1; i < arguments.length-1; i++) {
        s += arguments[i];
        s += separator;
    }
    s += arguments[arguments.length-1];
    return s;
}

console.log(myConcat("/", "apple", "orange", "peach"));