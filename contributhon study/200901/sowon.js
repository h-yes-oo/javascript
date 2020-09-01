class Person{
    //생성자함수 생성
    constructor(name) {
        this.name= name,
        this.enter= new Date()
    }

    //메서드 생성
    display() {
        let enter = this.enter;
        console.log(`${this.name}님 출입시간은 ${enter.getFullYear()}-${enter.getMonth()}-${enter.getDate()} ${enter.getHours()}시 ${enter.getMinutes()}분(시스템시간)입니다`)
    }
};

//인스턴스생성
let lee = new Person("이은재");
let park = new Person("박나래");

lee.display();
park.display();
