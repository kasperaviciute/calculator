let answer = 0;
let display = 0;
let currentOperator = "plus";
let decimalHasBeenAdded = false;

updateDisplay(display);

document.getElementById("myBtn0").addEventListener("click", function() {
    handleNumericClick(0);
    console.log("clicked");
});

document.getElementById("myBtn1").addEventListener("click", function() {
    handleNumericClick(1);
    console.log("clicked");
});

document.getElementById("myBtn2").addEventListener("click", function() {
    handleNumericClick(2);
    console.log("clicked");
});

document.getElementById("myBtn3").addEventListener("click", function() {
    handleNumericClick(3);
    console.log("clicked");
});

document.getElementById("myBtn4").addEventListener("click", function() {
    handleNumericClick(4);
    console.log("clicked");
})

document.getElementById("myBtn5").addEventListener("click", function() {
    handleNumericClick(5);
    console.log("clicked");
});

document.getElementById("myBtn6").addEventListener("click", function() {
    handleNumericClick(6);
    console.log("clicked");
});

document.getElementById("myBtn7").addEventListener("click", function() {
    handleNumericClick(7);
    console.log("clicked");
});

document.getElementById("myBtn8").addEventListener("click", function() {
    handleNumericClick(8);
    console.log("clicked");
});

document.getElementById("myBtn9").addEventListener("click", function() {
    handleNumericClick(9);
    console.log("clicked");
});

document.getElementById("myBtn9").addEventListener("click", function() {
    handleNumericClick(9);
    console.log("clicked");
});

document.getElementById("myBtnDivide").addEventListener("click", function() {
    divisionOperator(divide);
    console.log("clicked");
});

document.getElementById("myBtnTimes").addEventListener("click", function() {
    timesOperator(times);
    console.log("clicked");
});

document.getElementById("myBtnMinus").addEventListener("click", function() {
    minusOperator(minus);
    console.log("clicked");
});

document.getElementById("myBtnPlus").addEventListener("click", function() {
    plusOperator(plus);
    console.log("clicked");
});

document.getElementById("clearBtn").addEventListener("click", function() {
    handleNumericClick(0);
    console.log("clicked");
});

function handleNumericClick(value) {
    updateDisplay(value);
}

function updateDisplay(value) {
    document.getElementById("answer").innerHTML = value;
}

// function divisionOperator()