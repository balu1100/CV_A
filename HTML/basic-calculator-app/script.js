let currentInput = "";
let currentOperator = "";//To keep track of current Operator;
let firstOperand = "";
let result = document.getElementById("result");
const operators = ['*', '/', '+', '-'];
function clearRes() {
  currentInput = "";
  currentOperator = "";
  firstOperand = "";
  result.value= "";
}

function appendToResult(value) {
  result.value += value;
  currentInput += value;
}


function appendToOp(operator) {
  if (operators.includes(operator)) {
    calculateResult();
  }
  currentOperator = operator;
  firstOperand = currentInput;
  currentInput = "";
  result.value += operator;
}

function calculateResult() {
  if (currentOperator === "" || firstOperand === "") {
    return;
  }

  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(currentInput);

  if (isNaN(num1) || isNaN(num2)) {
    currentInput = "Error. Input must be a number.";
  } else {
    switch (currentOperator) {
      case "+":
        currentInput = (num1 + num2).toString();
        break;
      case "-":
        currentInput = (num1 - num2).toString();
        break;
      case "×":
        currentInput = (num1 * num2).toString();
        break;
      case "÷":
        if (num2 === 0) {
          currentInput = "Error. Dividend cannot be 0.";
        } else {
          currentInput = (num1 / num2).toString();
        }
        break;
      default:
        currentInput = "Error. Enter a valid Input";
    }
  }

  currentOperator = "";
  firstOperand = "";
  result.value = currentInput;
}