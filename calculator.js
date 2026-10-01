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

// this needs to be set to nothing to check if there's anything here because a user could use 0 as their first number and go straight to the operator
let firstNumber = "";
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
        case "x":
            value = multiply(first, second);
            break;
        case "/":
            value = divide(first, second);
            break;
    }
    firstNumber = "";
    secondNumber = "";
    operator = "";
    showUser = `${value}`;
    return;
}

let clearButton = document.getElementById("clear");

function clear () {
    switch (firstNumber) {
        case "":
            showUser = "0";
            break;
        default:
            switch (clearButton.textContent) {
                case "C":
                    showUser = firstNumber + operator;
                    break;
                default:
                    firstNumber = "";
                    operator = "";
                    showUser = "0";
                    break;
            }
            break;
    }
    clearButton.textContent = "AC";
    output.textContent = showUser;
}

clearButton.addEventListener(
    "click", (event) => {
        clear();
        }
);

let numberButtons = [...document.querySelectorAll("button.number")];

let output = document.getElementById("show-user");

numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        let buttonText = event.target.textContent;
        if (clearButton.textContent === "AC") {
            clearButton.textContent = "C";
        };
        switch (showUser) {
            case ("0"):
                switch (buttonText) {
                    case ("."):
                        showUser += buttonText;
                        break;
                    default:
                        showUser = buttonText;
                        break;
                }
                output.textContent = showUser;
                break;
            default:
                if (buttonText == "." && showUser.includes(".")) {

                } else {
                    showUser += buttonText;
                    output.textContent = showUser;
                }
                break;
        }
    });
});

let operatorButtons = [...document.querySelectorAll("button.operator")];

operatorButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        let buttonText = event.target.textContent;
        operator = buttonText;
        log(operator);
        firstNumber = showUser;
        log(firstNumber);
        showUser = firstNumber + operator;
        output.textContent = showUser;
    })
})

let equalsButton = document.getElementById("equals");

equalsButton.addEventListener(
    "click", (event) => {
            switch (showUser.length) {
                // Check if there has been another number put in after the operator
                case (firstNumber.length + operator.length):
                    log("Can't do that");
                    break;
                default:
                    // set secondNumber to everything after the firstNumber and operator
                    secondNumber = showUser.slice(firstNumber.length + operator.length);
                    operate(firstNumber, secondNumber, operator);
                    clearButton.textContent = "AC";
                    output.textContent = showUser;
            } 
        }
);

// log(operate("1", "2", "/"));