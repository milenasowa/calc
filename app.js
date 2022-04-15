"use strict";
debugger;
let button1 = document.getElementById("bt-1");
let button2 = document.getElementById("bt-2");
let button3 = document.getElementById("bt-3");
let button4 = document.getElementById("bt-4");
let button5 = document.getElementById("bt-5");
let button6 = document.getElementById("bt-6");
let button7 = document.getElementById("bt-7");
let button8 = document.getElementById("bt-8");
let button9 = document.getElementById("bt-9");
let button0 = document.getElementById("bt-0");
let buttonPlus = document.getElementById("bt-plus");
let buttonMinus = document.getElementById("bt-minus");
let buttonSum = document.getElementById("bt-sum");
let buttonDivide = document.getElementById("bt-divide");
let buttonMultiple = document.getElementById("bt-multiple");
let displayBox = document.getElementById("display-box");
button1 === null || button1 === void 0 ? void 0 : button1.addEventListener("click", clickButton1);
function clickButton1() {
    displayResult(1);
}
function displayResult(gggg) {
    displayBox.innerHTML = gggg;
}
button2 === null || button2 === void 0 ? void 0 : button2.addEventListener("click", clickButton2);
function clickButton2() {
    displayResult(2);
}
button3 === null || button3 === void 0 ? void 0 : button3.addEventListener("click", clickButton3);
function clickButton3() {
    displayResult(3);
}
