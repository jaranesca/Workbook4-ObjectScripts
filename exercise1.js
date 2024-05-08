"use strict";

let productInformation= [
    {
        name: 'Product 1',
        description: 'Product Description',
        category:["", "", ""],
        cost: 19.99,
        quantity: 10
    },
    {
        name: 'Product 2',
        description: 'Product Description',
        category:["", "", ""],
        cost: 19.99,
        quantity: 10
    },
    {
        name: 'Product 3',
        description: 'Product Description',
        category:["", "", ""],
        cost: 19.99,
        quantity: 10
    },
    {
        name: 'Charlies Angel Movie',
        description: 'Action Packed',
        category:["Fun", "Adventure", "Action"],
        cost: 19.99,
        quantity: 10
    },
];

console.log(`${productInformation[3].name} is ${productInformation[3].description} that falls in the ${productInformation[3].category[2]} category. It cost $${productInformation[3].cost} but be fast because there are only ${productInformation[3].quantity} left.`);