const {checkStock, makeOrder} = require('./store.js');

const order1 = {
    items : [['egg',1],['apple',3]],
    money : 4000
}

const order2 = {
    items : [['egg',3],['apple',4]],
    money : 4500
}

const order3 = {
    items : [['bread',2]],
    money : 5000
}

checkStock(order3)
.then((resolvedOrder)=>{
    return makeOrder(resolvedOrder)
})
.then((successMessage) => {
    console.log(successMessage);
})
.catch((errorMessage) => {
    console.log(errorMessage);
})

