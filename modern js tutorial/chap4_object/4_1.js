let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

function isEmpty(obj) {
    for (let prop in obj){
        return false;
    }
    return true;
};

function sumSal(salaries) {
    let sum = 0;
    for (let person in salaries){
        sum += salaries[person];
    }
    alert(sum);
}

function multiplyNumeric(obj){
    for (let prop in obj){
        if(typeof obj[prop] == 'number'){
            obj[prop] *= 2; 
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  
  multiplyNumeric(menu);

  console.log(menu);