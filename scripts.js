let answer = "0";
let display = "0";
let currentOperator = "plus";
let decimalHasBeenAdded = false;

updateDisplay(display);

document.getElementById("clear").addEventListener("click", function() {
    clearOperator(clear);
});

document.getElementById("divide").addEventListener("click", function() {
    divisionOperator(divide);
});

document.getElementById("multiply").addEventListener("click", function() {
    multiplicationOperator(multiply);
});

document.getElementById("minus").addEventListener("click", function() {
    minusOperator(minus);
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
    plusOperator(plus);
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
    handleNumericClick(equals);
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

function handleNumericClick(value) {
    updateDisplay(value);
}

function updateDisplay(value) {
    document.getElementById("answer").innerHTML = value;
}

function clearOperator() {
    updateDisplay(0);
}