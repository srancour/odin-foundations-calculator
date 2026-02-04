let log = console.log;

function add (number1, number2) {
    return number1 + number2;
}
function subtract (number1, number2) {
    return number1 - number2;
}
function multiply (number1, number2) {
    return number1 * number2;
}
function divide (number1, number2) {
    return number1 / number2;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let value = "";
let showUser = "0";

function operate (firstNumber, secondNumber, operator) {
    firstNumber = Number(firstNumber);
    secondNumber = Number(secondNumber);
    if (operator == "+") {
        value = add(firstNumber, secondNumber);
    } else if (operator == "-") {
        value = subtract(firstNumber, secondNumber);
    } else if (operator == "*") {
        value = multiply(firstNumber, secondNumber);
    } else if (operator == "/") {
        value = divide(firstNumber, secondNumber);
    }
    firstNumber = `${value}`;
    secondNumber = "";
    operator = "";
    showUser = `${value}`;
}