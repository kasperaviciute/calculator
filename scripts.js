let answer = "0";
let newNumber = "0";
let operator = "+";
let evaluation = "0";
let decimalHasBeenAdded = false;
let isConstructingNewNumber = true;

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
    equalsOperator();
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
    decimalOperator(decimal);
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
    operator = argument;
    evaluate();
    updateDisplay(true);
    isConstructingNewNumber = true;
}

function evaluate() {
    answer = eval(answer + operator + newNumber);
}

function equalsOperator() {
    evaluate();
    updateDisplay();
}

updateDisplay();

function updateDisplay(showAnswer) {
    let displayValue;
    if (showAnswer) {
        displayValue = answer;
    } else {
        displayValue = display;
    }
    document.getElementById("answer").innerHTML = displayValue;
}

function clearOperator() {
    answer = 0;
    newNumber = 0;
    operator = "+";
    updateDisplay();
}

// function addDecimalOnce() {
//     if (display === 0) {
//         display.push(0.);
//     } else() {

//     }
//     updateDisplay();
// }