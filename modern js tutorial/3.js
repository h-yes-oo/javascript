function max(num1, num2, num3){
    let max;
    if(num1 > num2){
        if(num1 > num3) { max = num1;}
        else { max = num3;}
    }
    else{
        if(num2 > num3) {max = num2;}
        else { max = num3;}
    }
    console.log(`max is ${max}`);
}

max(3,5,6);

