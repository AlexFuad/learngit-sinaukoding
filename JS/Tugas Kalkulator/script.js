const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearSign = document.querySelector(".all-clear");
const percentageSign = document.querySelector(".percentage");
const decimalSign = document.querySelector(".decimal");
const calculatorScreen = document.querySelector(".calculator-screen");

let previousNumber = "";
let calculationOperator = "";
let currentNumber = "0";

const updateScreen = (number) => {
  calculatorScreen.value = number;
};

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
   });

const inputOperator = (operator) => {
  if (calculationOperator === "") {
    previousNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "0";
};

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value);
    updateScreen(previousNumber + event.target.value);
  });
});

const calculate = () => {
  let result = "";
  switch (calculationOperator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "*":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    case "%":
      result = parseFloat(previousNumber) % parseFloat(currentNumber);
      break;
    default:
      return;
  }
  currentNumber = result.toString();
  calculationOperator = "";
};

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

const clearAll = () => {
  previousNumber = "";
  calculationOperator = "";
  currentNumber = "0";
};

clearSign.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

percentageSign.addEventListener("click", () => {
  currentNumber = (parseFloat(currentNumber) / 100).toString();
  updateScreen(currentNumber);
});

const inputDecimal = (dot) => {
  if (!currentNumber.includes(dot)) {
    currentNumber += dot;
  }
};

decimalSign.addEventListener("click", (event) => {
  inputDecimal(event.target.value);
  updateScreen(currentNumber);
});