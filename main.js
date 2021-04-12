// #### 1. What type? 
// * Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
console.log(3 == '3');  // true
console.log(3 === '3');  // false
// **Questions: Comment your answers in the js file.** 
// * Is there a difference? Why/why not? 
    // Yes, == checks whether the two operands are “equal” using a more relaxed definition of sameness that allows type conversions.
    // === checks whether the two operands are “identical” using a strict definition of sameness

// * Which comparison operator should we generally use? Why?
    // === because, it is more strict.

// * What would happen if we were to use `=`?
    // It will assign it. 


// #### 2. Not
// * Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.
const donuts = 'sweet';
console.log((donuts !== 'sweet') ? true : false);


// #### 3. Short Circuit
// Given the code below, what will print when when we console log `name`? Comment your answer in the js file.
let firstName, givenName;
// givenName = false;
// firstName = false;
firstName = "Stacey";
let name = givenName || firstName || "John";

console.log(name);  // Stacey

  // Since the value of this first operand is truthy, it short-circuits and returns that truthy value (Stacey) without ever evaluating the expression on the right. 
  // If, the value of the first operand was falsy, then || evaluates its second operand and returns the value of that expression.