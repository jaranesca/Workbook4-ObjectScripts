"use strict";

let book = {
    title:'My book',
    price: 10.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
        console.log(combinedvalue);
    }
}

let book2 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
        console.log("The output is " + combinedvalue);
    }
}

let book3 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
       return combinedvalue;
    }
}

let book4 = {
    title:'My book',
    price: 15.00,
    quantity: 5,
    totalValue: function() {
        let combinedvalue = this.price * this.quantity;
       return combinedvalue;
    }
}
book2.totalValue();
book.totalValue();

let book1total = book3.totalValue();
let book1tota2 = book4.totalValue();
console.log(book1total+ book1tota2);