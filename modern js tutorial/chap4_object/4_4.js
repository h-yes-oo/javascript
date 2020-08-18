// 메서드와 'this'
// 체이닝
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep(){
        console.log(this.step);
        return this;
    } 
}

ladder.up().up().up().showStep();