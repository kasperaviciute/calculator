let answer = "0";
let display = "0";
let currentOperator = "";
let evaluation = "0";
let decimalHasBeenAdded = false;
let currentOperatorAdded = false;

updateDisplay(display);

document.getElementById("clear").addEventListener("click", function() {
    clearOperator();
});

document.getElementById("divide").addEventListener("click", function() {
    divisionOperator();
});

document.getElementById("multiply").addEventListener("click", function() {
    multiplicationOperator();
});

document.getElementById("minus").addEventListener("click", function() {
    minusOperator();
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

document.getElementById("plus").addEventListener("click", function() {
    plusOperator();
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
    if (value === 0) {
        answer = 0;
        display = 0;
    } else if (currentOperatorAdded == false) {
        display = parseInt(display + value);
        answer = parseInt(answer + value);
    } else if (currentOperatorAdded == true) {
        display = value;
        currentOperatorAdded = false;
    }
}

function minusOperator() {
    currentOperator = "-";
    operators();
}

function plusOperator() {
    currentOperator = "+";
    operators();
}

function multiplicationOperator() {
    currentOperator = "*";
    operators();
}

function divisionOperator() {
    currentOperator = "/";
    operators();
}

function operators() {
    if (currentOperator === "") {
        currentOperatorAdded = false;
    } else {
        currentOperatorAdded = true;
    }
    console.log(currentOperator);
}

function evaluate() {
    answer = eval(answer + currentOperator + display);
    console.log(answer);
}

function equalsOperator() {
    evaluate();
    updateDisplay(answer);
}

function handleNumericClick(value) {
    addClickedNumberToDisplay(value);
    updateDisplay(display);
}

function updateDisplay(value) {
    document.getElementById("answer").innerHTML = value;
}

function clearOperator() {
    answer = 0;
    display = 0;
    updateDisplay(0);
}

// function addDecimalOnce() {
//     if (display === 0) {
//         display.push(0.);
//     } else() {

//     }
//     updateDisplay();
// }