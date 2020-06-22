let answer = 0;
let display = 0;
let currentOperator = "plus";
let decimalHasBeenAdded = false;

updateDisplay(display);

document.getElementById("clear").addEventListener("click", function() {
    clearOperator(clear);
    console.log("clicked");
});

document.getElementById("divide").addEventListener("click", function() {
    divisionOperator(divide);
    console.log("clicked");
});

document.getElementById("multiply").addEventListener("click", function() {
    multiplicationOperator(multiply);
    console.log("clicked");
});

document.getElementById("minus").addEventListener("click", function() {
    minusOperator(minus);
    console.log("clicked");
});

document.getElementById("seven").addEventListener("click", function() {
    handleNumericClick(7);
    console.log("clicked");
});

document.getElementById("eight").addEventListener("click", function() {
    handleNumericClick(8);
    console.log("clicked");
})

document.getElementById("nine").addEventListener("click", function() {
    handleNumericClick(9);
    console.log("clicked");
});

document.getElementById("plus").addEventListener("click", function() {
    plusOperator(plus);
    console.log("clicked");
});

document.getElementById("four").addEventListener("click", function() {
    handleNumericClick(4);
    console.log("clicked");
});

document.getElementById("five").addEventListener("click", function() {
    handleNumericClick(5);
    console.log("clicked");
});

document.getElementById("six").addEventListener("click", function() {
    handleNumericClick(6);
    console.log("clicked");
});

document.getElementById("equals").addEventListener("click", function() {
    handleNumericClick(equals);
    console.log("clicked");
});

document.getElementById("one").addEventListener("click", function() {
    handleNumericClick(1);
    console.log("clicked");
});

document.getElementById("two").addEventListener("click", function() {
    handleNumericClick(2);
    console.log("clicked");
});

document.getElementById("three").addEventListener("click", function() {
    handleNumericClick(3);
    console.log("clicked");
});

document.getElementById("zero").addEventListener("click", function() {
    handleNumericClick(0);
    console.log("clicked");
});

document.getElementById("decimal").addEventListener("click", function() {
    decimalOperator(decimal);
    console.log("clicked");
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