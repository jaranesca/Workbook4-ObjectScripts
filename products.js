"use strict";

let products = [
    {
        name: 'Globe Noir',
        description: 'A beautiful black globe.',
        cost: 199.99
    },
    {
        name: 'Ancient Globe',
        description: 'A beautiful ancient globe.',
        cost: 199.99
    },
    {
        name:'Brown Tone Globe',
        description: 'A beautiful brown globe.',
        cost: 199.99
    }
];

console.log(`The ${products[2].name} is ${products[2].description} which cost $${products[2].cost}`)


let book = {
    title: "Eat that Frog",
    price: 19.95,
    displayInformation: function() {
        return `Title: ${this.title} and price ${this.price}`
    }
}

console.log(book.displayInformation());

let person = {
    firstname: 'Jaranesca',
    lastname: 'Braker',
    fullname: function() {
        //this outputs it
        console.log(`${this.firstname} ${this.lastname}`)
    }
    
}
person.fullname();

console.log("Hi from person 1 the fullname is " + person.fullname())

let person2 = {
    firstname: 'Jaranesca',
    lastname: 'Braker',
    fullname: function() {
        //this outputs it
        return `${this.firstname} ${this.lastname}`;
    }
    
}

let savedTheFullName = person2.fullname();
console.log("Hi from person 1 the fullname is " + savedTheFullName)


