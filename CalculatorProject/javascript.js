const add = function(number1,number2) {
    return number1 + number2;
};
  
const subtract = function(number1,number2) {
    return number1 - number2;
};

const multiply = function(number1,number2) {
    return number1 * number2;
};

const divide = function(number1,number2) {
    return number1 / number2;
};

// Function to operate on numbers
const operate = function(number1,operator,number2) {
    number1 = Number(number1);
    number2 = Number(number2);

    if (operator === "+") {
        return add(number1,number2);
    } else if (operator === "-") {
        return subtract(number1,number2);
    } else if (operator === "*") {
        return multiply(number1,number2);
    } else if (operator === "/") {
        return divide(number1,number2);
    }
};

// NumberCounter is to check what number needs to be stored.
// Total holds all operation values for display.
// Divide by zero holds previous operator.
let buttons = document.getElementsByTagName("button");
let number1 = '';
let number2 = '';
let numberCounter = 0;
let operator = '';
let operationValue = 0;
let total = 0;
let divideByZero = ``;

// Adds an event listener for all buttons.
for (i=0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        let displayValue = document.querySelector("input");

// Pre-check for dividing by 0 and a display clear if user hits buttons after
    // hitting equal.
        if (displayValue.value == "ERROR DIVIDED BY 0") {
            displayValue.value = ``;
            number1 = '';
            number2 = '';
            operator = '';
            numberCounter = 0;
            operationValue = 0;
            total = 0;
            divideByZero = ``;
        } else if (displayValue.value == total) {
            displayValue.value = ``;
            total = 0;
        };

// Button identifier for ifs
// First if deals with creating numbers
        if (this.id <= 9) {
            displayValue.value += this.id;

            if (numberCounter == 0) {
                number1 += this.id;
            } else if (numberCounter == 1) {
                number2 += this.id;
            };

// Second if deals with recording operators and multi-operation
        } else if (this.id == "+" || this.id == "-" || this.id == "*" || this.id == "/") {
            numberCounter += 1;


        // Checks for dividing by 0
            if (number2 === `0` && divideByZero == `/`) {
                displayValue.value = "ERROR DIVIDED BY 0";
                numberCounter = 0;
                divideByZero = ``;

        // Calculation; Epsilon and rounding used to fix Javascript number problems
            // and to limit floating points.
            } else if (numberCounter == 2 && number2 !== '') {
                operationValue = operate(number1,operator,number2);
                total = operationValue;
                total = Math.round((total + Number.EPSILON) * 1000) / 1000;
                displayValue.value = total;

                number1 = total;
                number2 = '';
                numberCounter = 1;
            };

    // Prevents operator from being displayed after error message and stores
        // a check for dividing by 0 for equals button click.
            if (displayValue.value !== "ERROR DIVIDED BY 0") {
                displayValue.value += ` ${this.id} `;
                divideByZero = this.id;
                operator = this.id;
            }

    // Checks if operator buttons are being mashed before numbers are entered
            if (displayValue.value == ` ${this.id} `) {
                displayValue.value = ``;
                number1 = '';
                number2 = '';
                operator = '';
                numberCounter = 0;
                operationValue = 0;
                total = 0;
                divideByZero = ``;
            }

    // Checks if operator button is being smashed after entering a number
            if (numberCounter >= 2) {
                displayValue.value = ``;
                number1 = '';
                number2 = '';
                operator = '';
                numberCounter = 0;
                operationValue = 0;
                total = 0;
                divideByZero = ``;
            };
    
// Third if Clears all variables and display.
        } else if (this.id == "clear") {
            displayValue.value = ``;
            number1 = '';
            number2 = '';
            operator = '';
            numberCounter = 0;
            operationValue = 0;
            total = 0;
            divideByZero = ``;
        
// Fourth  if deals with calculating after clicking equal button.
        } else if (this.id == "=") {
            numberCounter = 2;
            
    // Checks for empty operation variables and will clear everything if the 
            // user attempts.
            if (number1 === '' || operator === '' || number2 === '') {
                displayValue.value = ``;
                number1 = '';
                number2 = '';
                operator = '';
                numberCounter = 0;
                operationValue = 0;
                total = 0;
                divideByZero = ``;
    
    // Divide by 0 check
            } else if (number2 === `0` && divideByZero == `/`) {
                displayValue.value = "ERROR DIVIDED BY 0";
                numberCounter = 0;
                divideByZero = ``;

    // Final operation calculator and resets most variables.
    // Total and Display are reset in first if of event listener function.
            } else if (numberCounter == 2) {

                operationValue = operate(number1,operator,number2);
                total = operationValue;
                total = Math.round((total + Number.EPSILON) * 1000) / 1000;
                displayValue.value = total;

                number1 = '';
                number2 = '';
                operator = '';
                numberCounter = 0;
                operationValue = 0;
                divideByZero = ``;
            };

        };
    });
};