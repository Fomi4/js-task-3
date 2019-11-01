// Write a simple calculator program that asks user to enter 2 numbers and operation to perform (use prompt for this)
// As a result, the program must perform this operation on these 2 numbers. The result must be shown in console
// For example, user enters 2 numbers - 25 and 5. And operation - 'division'. The result must be 5.
// NOTE! Since prompt returns a string, you'll have to convert to a number. You should check parseInt() function.

let num1 = parseInt(prompt("Enter any first number:"));
let num2 = parseInt(prompt("Enter any second number:"));
let operation = prompt("Enter operation:");

if (operation == 'plus') {
  console.log(num1 + num2);
} else if (operation == 'minus') {
  console.log(num1 - num2);
} else if (operation == 'div') {
  console.log(num1 / num2);
} else {
  console.log("Unknown operation");
}

