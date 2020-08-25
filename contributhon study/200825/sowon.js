let time = 0;
let timer = setInterval(()=>{ time++; console.log(`${time}초`);}, 1000);
setTimeout(() => { clearInterval(timer); console.log('10초 끝')}, 10000);