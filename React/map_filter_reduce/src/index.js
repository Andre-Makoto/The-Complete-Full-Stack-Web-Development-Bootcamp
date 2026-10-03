var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x){
    return x * 2;
}
const newNumbers = numbers.map(double)
console.log(newNumbers);

numbers.map(x => x * 2);

//Filter - Create a new array by keeping the items that return true.
function getNumber(x){
    return x > 10;
}

numbers.filter(getNumber);

numbers.filter(x => x > 10);
//Reduce - Accumulate a value by doing something to each item in an array.
function Accumulate (accumulator, currentValue){
    return accumulator += currentValue;
}

numbers.reduce(Accumulate);

numbers.reduce((accumulate, currentValue) => accumulate += currentValue);

//Find - find the first item that matches from an array.
function firstEven(num){
    return num = 2;
}

numbers.find(firstEven);

numbers.find((num) => num === 2);

//FindIndex - find the index of the first item that matches.
function indexOf(num){
    return num === 2;
}
numbers.findIndex(indexOf);

numbers.findIndex((num) => num > 10);