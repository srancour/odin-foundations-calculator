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

function operate (first, second, operation) {
    first = Number(first);
    second = Number(second);
    if (operation == "+") {
        value = add(first, second);
    } else if (operation == "-") {
        value = subtract(first, second);
    } else if (operation == "*") {
        value = multiply(first, second);
    } else if (operation == "/") {
        value = divide(first, second);
    }
    firstNumber = `${value}`;
    secondNumber = "";
    operator = "";
    showUser = `${value}`;
    return value;
}

function clear () {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    showUser = "0";
}