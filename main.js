// Write a simple calculator program that asks user to enter 2 numbers and operation to perform (use prompt for this)
// As a result, the program must perform this operation on these 2 numbers. The result must be shown in console
// For example, user enters 2 numbers - 25 and 5. And operation - 'division'. The result must be 5.
// NOTE! Since prompt returns a string, you'll have to convert to a number. You should check parseInt() function.

let num1 = prompt("Enter any first number", "");
let num2 = prompt("Enter any second number", "");
let operation = num1 / num2;

if (isNaN(operation)) {
  alert("One of the values is letters!");
}

console.log(parseInt(operation));

