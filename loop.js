"use strict";

// Array of movie objects
const movies = [
  { 
  title: "The Shawshank Redemption", 
  year: 1994,
  author: "Stephen King"
  },
  { 
  title: "The Godfather",
  year: 1972,
  author: "Mario Puzo"
  },
  {
  title: "The Dark Knight", 
  year: 2008,
  author: "Christopher Nolan"
  },
  { 
  title: "12 Angry Men",
  year: 1957, 
  author: "Reginald Rose"
  },
  { 
  title: "Schindler's List",
  year: 1993,
  author: "Thomas Keneally"
  },
  { 
  title: "Pulp Fiction",
  year: 1994,
  author: "Quentin Tarantino"
  }
];

  
  // Set up an index for while loop
  let index = 0;
  
  // Use a while loop to process the array

let amountOfMovies = movies.length;
console.log(`Movies: ${amountOfMovies}`);
  while (index < amountOfMovies) {
    const movie = movies[index];
    if (movie.year < 2000) { // Check if the movie was released before the year 2000
      console.log(`${movie.title} was released in ${movie.year}.`);
    }
    index++; // Increment index to move to the next movie
  }


// Function to check publication century
function checkPublicationCentury(books) {
  // Set up an index for the while loop
  let index = 0;
  // Get the length of the books array
  let amountOfBooks = books.length;
  
  // Loop through the array
  while (index < amountOfBooks) {
    const book = books[index];
    // Check if the book was published in or after the year 2000
    if (book.year >= 2000) {
      console.log(`${book.title} was published in the 21st century.`);
    } else {
      console.log(`${book.title} was not published in the 21st century.`);
    }
    index++; // Increment index to move to the next book
  }
}
