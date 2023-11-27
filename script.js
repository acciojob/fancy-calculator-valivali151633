let input1 = parseInt(prompt("Enter the first number:"));
let input2 = parseInt(prompt("Enter the second number:"));

let calc = function(num1, num2) {
  let result = num1 * 2 + num2;
  alert("The final result is: " + String(result));
};

calc(input1, input2);