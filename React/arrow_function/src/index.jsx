import React from "react";
import { StrictMode } from "react";
import {createRoot} from "react-dom/client"
import App from "./components/App";

createRoot(document.getElementById("root")).render(
    <StrictMode> 
        <App />    
    </StrictMode>
)

var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
numbers.map(function (x) {return x * 2;});
numbers.map(x => x * 2);

////Filter - Create a new array by keeping the items that return true.
numbers.filter(function(num) {return num < 10;});
numbers.filter(num => num < 10);

// Reduce - Accumulate a value by doing something to each item in an array.
numbers.reduce(function (accumulator, currentNumber) {return accumulator + currentNumber;})
numbers.reduce((accumulator, currentValue) => accumulator += currentValue);

//Find - find the first item that matches from an array.
numbers.find(function (num) {return num > 10;})
numbers.find(num => num > 10)

//FindIndex - find the index of the first item that matches.
numbers.findIndex(function (num) {return num > 10;})
numbers.findIndex(num => num > 10);
