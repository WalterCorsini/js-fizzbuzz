// test
// alert("ciao");
"use strict";

// search container and save in variable
const containerElem = document.querySelector(".container")


// declaration result variable
let result;

// LOGIC
// start FOR
for(let i = 1; i <= 100; i++){
    // create element
    const divElem = document.createElement("div");
    divElem.classList.add("box");

    // divisible by 3 and 5
    if(i % 3 == 0 && i % 5 == 0){
        result = "fizzbuzz";
        divElem.classList.add("fizz-buzz");

    // divisible by 3 and 5
    } else if (i % 3 == 0){
        result = "fizz";
        divElem.classList.add("fizz");

    // if divisible by 3 and 5
    } else if(i % 5 == 0){
        result = "buzz";
        divElem.classList.add("buzz");
    
    // else
    } else{
        result = i;
    }

// OUTPUT
    divElem.innerHTML = result;
    containerElem.append(divElem);
}