let log = console.log;

function add (number1, number2) {
    return number1 + number2;
};
function subtract (number1, number2) {
    return number1 - number2;
};
function multiply (number1, number2) {
    return number1 * number2;
};
function divide (number1, number2) {
    switch (number2){
        case 0:
            log("Can't divide by 0");
            break;
        default:
            return number1 / number2;
    }
};

let firstNumber = "0";
let secondNumber = "";
let operator = "";
let value = "";
let showUser = "0";

function operate (first, second, operation) {
    first = Number(first);
    second = Number(second);
    switch (operation) {
        case "+":
            value = add(first, second);
            break;
        case "-":
            value = subtract(first, second);
            break;
        case "*":
            value = multiply(first, second);
            break;
        case "/":
            value = divide(first, second);
            break;
    }
    firstNumber = `${value}`;
    secondNumber = "";
    operator = "";
    showUser = `${value}`;
    return value;
}

function clear () {
    switch (secondNumber) {
        case "":
            firstNumber = "0";
            operator = "";
            showUser = "0";
            break;
        default:
            firstNumber = "0";
            secondNumber = "";
            operator = "";
            showUser = "0";
            // change clear button to AC instead of C
            break;
    }
}
log(operate("1", "2", "/"));