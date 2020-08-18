var data = 10;
function outer(){ 
    function inner(){
        this.data = 20; data = 30;
        console.log("1. data= " + data);
        console.log("2. this.data = " + this.data);
        console.log("3. window.data = " + window.data);
    }
    inner();
}
outer();

/*
1. data= 30
2. this.data = 30
3. window.data = 30
*/

//중첩 함수에서 this는 전역 객체를 가르친다