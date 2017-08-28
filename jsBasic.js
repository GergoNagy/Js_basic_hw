// Section 1

// What types are these?

// /* 1.1 */ 1; Number
// /* 1.2 */ "cat"; String
// /* 1.3 */ true; Boolean
// /* 1.4 */ []; Array
// /* 1.5 */ {}; Hash
// /* 1.6 */ 1.1; Number
// /* 1.7 */ var myVariable; Variable


// Section 2

// What is the truthiness/falsiness values of the following values?

// /* 2.1 */ 1; true
// /* 2.2 */ "cat"; true
// /* 2.3 */ true; true
// /* 2.4 */ NaN; false
// /* 2.5 */ []; false
// /* 2.6 */ {}; false
// /* 2.7 */ undefined; false
// /* 2.8 */ ""; false
// /* 2.9 */ 0; false


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number - 3.5
// 3.2 Assign a variable that is a string  - "String"
// 3.3 Assign a variable that is a boolean - var true = 2 === 2;
// 3.4 Assign a variable that is an object - var car = {type:Mustang, year:1985};


// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
var trueOrFalse = function(keyWord){
  if (true === keyWord) {
    console.log("hello");
  } else {
    console.log("bye");
  }
}
trueOrFalse(false);
trueOrFalse(true);

// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var first = animals.shift();
console.log(first);
// 5.2. Assign the last element to a variable
var last = animals.pop();
console.log(last);
// 5.3. Assign the length of an array to a variable
var length = animals.length;
console.log(length);
// 5.4. Add an item to the end of the array
animals.push("dog");
// 5.5. Add an item to the start of the array
animals.unshift("cat");
console.log(animals);
// 5.6. Assign the index of hedgehog to a variable
console.log(animals.indexOf("hedgehog"));


// Section 6

// 6.1 Create an array of 5 vegetables
var vegetables = ["karalabe", "hagyma", "krumpli", "repa", "paradicsom"]
// 6.2 Loop over the array and write to the console using a "while"
var i = 0;
var text = "";
while (i < vegetables[i]) {
  console.log(text+=vegetables + "\n");
  i++
}
// 6.3 Loop again using a "for" with a counter
for (var i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
}
// 6.4 Loop again using a "for of"
for (vegetable of vegetables ){
  console.log(vegetable);
}
// Section 7

var accounts = [50.00, 30.00, 10000.00, 50.76, 1.00];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts
var total = 0;
for (var i in accounts) {
  total += accounts[i]
}
console.log(total);
// 7.2 Find the index of the account with the largest balance
var largest = 0;
for (i = 0; i <= largest; i++) {
  if (accounts[i] > largest) {
    var largest = accounts[i];
  }
}
console.log(largest);

// 7.3 Find the index of the account with the smallest balance
var smallest = 0;
for (i = 0; i <= largest; i++) {
  if (accounts[i] < largest) {
    var smallest = accounts[i];
  }
}
console.log(smallest);
// 7.4 Calculate the average bank account value
var avg = total/accounts.length;
console.log(avg);
