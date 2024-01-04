// Get display from html, will update with a number when press function called
let display = document.querySelector("#display");
// Make empty place holders
let num1 = "";
let num2 = "";
let operator = "";

// When this function is called, will add numbers to display
function press(num) {
  num1 += num;
  display.innerText = num1;
}

// when called the operator would be stored and num2 would get the first numbers before the operator was called.
function setOP(op) {
  operator = op;
  num2 = num1;
  num1 = "";
}

// When called it will reset all numbers and operator to empty strings and display 0
function clr() {
  num1 = "";
  num2 = "";
  operator = "";
  display.innerText = 0;
}

// When called the function will get the result of the 2 numbers
function calculate() {
  let a = parseFloat(num2);
  let b = parseFloat(num1);
  let result = 0;
  if (operator === "+") {
    result = a + b;
    num1 = result;
    operator = "";
    display.innerText = result;
  } else if (operator === "-") {
    result = a - b;
    num1 = result;
    operator = "";
    display.innerText = result;
  } else if (operator === "*") {
    result = a * b;
    num1 = result;
    operator = "";
    display.innerText = result;
  } else if (operator === "/") {
    result = a / b;
    num1 = result;
    operator = "";
    display.innerText = result;
  }
}
