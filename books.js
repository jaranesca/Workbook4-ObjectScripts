"use strict";

let books = [
    {
        title: 'The Thief Lord',
        pages: 345,
        author: 'Cornelia Funke',
        genre: ['Fantasy', 'Adventure'],
        isbn: '978-0545227704'
    },
    {
        title: 'The Go-Giver',
        pages: 123,
        author: 'Bob Burg',
        genre: ['self help','psychology'],  // No genre provided; initialize with empty array
        isbn: ''    // No ISBN provided; initialize with an empty string
    },
    {
        title:"Diary of a Wimpy Kid: Rodrick Rules",
        pages:150,
        author:"Jeff Kinney",
        genre:['Kids', 'Comedy'],
        isbn:'000-0000000000'
    }
];

console.log("The title of the first book is: " + books[0].title)