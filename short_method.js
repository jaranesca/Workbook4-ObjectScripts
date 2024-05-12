"use strict";

let sortedStudentlist = students.sort((a,b) => a.name.localeCompare(b.name));
   console.log(sortedStudentlist);

   let numbers = [10,2,4];
    numbers.sort(function(a, b){
        if (a < b) return -1; // right order
        else if (a == b) return 0;
        else return 1; // swap, wrong order
       });
    console.log(numbers);
    //scenario when you have need to sort an array of objects based on a string property (text)
   let sortedStudentlist = students.sort((a,b) => a.name.localeCompare(b.name));

    //scenario when you have need to sort an array of objects based on a integer property (text
   let sortbyPageWorkingon = student.sort((a,b) => a.currentlyWorkingOn - b.currentlyWorkingOn);
   console.log(sortedStudentlist);