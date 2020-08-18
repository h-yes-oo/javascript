for (let i=2; i<=9; i++){
    let ar = '';
    for(let j=1; j<=9 ; j++){
        ar +=`${i}*${j}=${i*j} `;
    }
    console.log(ar);
}

let ar2 ='';
for(i=2;i<=9;i++) ar2+=`<${i}단> `;
console.log(ar2);

for (let i=1; i<=9; i++){
    let ar3 = '';
    for(let j=2; j<=9 ; j++){
        ar3 +=`${j}*${i}= ${i*j}, `;
    }
    console.log(ar3);
}