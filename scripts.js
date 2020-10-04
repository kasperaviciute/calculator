let answer = "0";
let newNumber = "0";
let operator = "+";
let evaluation = "0";
let decimalHasBeenAdded = false;
let isConstructingNewNumber = true;
let hasEqualsBeenClicked = false;

document.getElementById("clear").addEventListener("click", function() {
    clearOperator();
});

document.getElementById("plus").addEventListener("click", function() {
    handleOperatorClick("+");
});

document.getElementById("minus").addEventListener("click", function() {
    handleOperatorClick("-");
});

document.getElementById("multiply").addEventListener("click", function() {
    handleOperatorClick("*");
});

document.getElementById("divide").addEventListener("click", function() {
    handleOperatorClick("/");
});

document.getElementById("seven").addEventListener("click", function() {
    handleNumericClick("7");
});

document.getElementById("eight").addEventListener("click", function() {
    handleNumericClick("8");
})

document.getElementById("nine").addEventListener("click", function() {
    handleNumericClick("9");
});

document.getElementById("four").addEventListener("click", function() {
    handleNumericClick("4");
});

document.getElementById("five").addEventListener("click", function() {
    handleNumericClick("5");
});

document.getElementById("six").addEventListener("click", function() {
    handleNumericClick("6");
});

document.getElementById("equals").addEventListener("click", function() {
    handleEqualsClick();
});

document.getElementById("one").addEventListener("click", function() {
    handleNumericClick("1");
});

document.getElementById("two").addEventListener("click", function() {
    handleNumericClick("2");
});

document.getElementById("three").addEventListener("click", function() {
    handleNumericClick("3");
});

document.getElementById("zero").addEventListener("click", function() {
    handleNumericClick("0");
});

document.getElementById("decimal").addEventListener("click", function() {
    handleDecimalClick();
});


function addClickedNumberToDisplay(value) {
    if (isConstructingNewNumber == false) {
        if (newNumber === "0") {
            newNumber = value;
        } else {
            newNumber = newNumber + value;
        }
    } else if (isConstructingNewNumber == true) {
        newNumber = value;
        isConstructingNewNumber = false;
    }
}

function handleNumericClick(value) {
    addClickedNumberToDisplay(value);
    updateDisplay();
}

function handleOperatorClick(argument) {
    if (hasEqualsBeenClicked == false) {
        evaluate();
        newNumber = "0";
    }
    else {
        hasEqualsBeenClicked = false;
    }
    operator = argument;
    updateDisplay(true);
    isConstructingNewNumber = true;
    decimalHasBeenAdded = false;
}

function handleEqualsClick() {
    evaluate();
    updateDisplay(true);
    hasEqualsBeenClicked = true;
    decimalHasBeenAdded = false;
}

function evaluate() {
    console.log(answer, operator, newNumber);
    answer = eval(answer + operator + newNumber).toString();
}

updateDisplay();

function handleDecimalClick(){
    if (decimalHasBeenAdded == false) {
        newNumber = newNumber + ".";
        decimalHasBeenAdded = true;
        isConstructingNewNumber = false;
        if (isConstructingNewNumber == true && newNumber === "0") {
            newNumber = "0.";
            isConstructingNewNumber = false;
            decimalHasBeenAdded = true;
        }
    }
    updateDisplay();
}

// function updateDisplay(showAnswer) {
//     let displayValue;
//     if (showAnswer) {
//         displayValue = answer;
//     } else {
//         displayValue = newNumber;
//     }
//     document.getElementById("answer").innerHTML = displayValue;
// }

function updateDisplay(showAnswer) {
    document.getElementById("answer").innerHTML = showAnswer ? answer : newNumber;
  }

function clearOperator() {
    answer = "0";
    newNumber = "0";
    operator = "+";
    decimalHasBeenAdded = false;
    hasEqualsBeenClicked = false;
    updateDisplay();
}

