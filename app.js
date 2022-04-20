"use strict";
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
let buttonCe = document.getElementById("bt-ce");
let buttonCancel = document.getElementById("bt-cancel");
let buttonPlus = document.getElementById("bt-plus");
let buttonMinus = document.getElementById("bt-minus");
let buttonSum = document.getElementById("bt-sum");
let buttonDivide = document.getElementById("bt-divide");
let buttonMultiple = document.getElementById("bt-multiple");
let displayBox = document.getElementById("display-box");
let sum = 0;
let currentNumber = "";
function currentInfo() {
    fillBox(currentNumber);
}
button1 === null || button1 === void 0 ? void 0 : button1.addEventListener("click", clickButton1);
function clickButton1() {
    currentNumber = currentNumber + 1;
    currentInfo();
}
function displayResult(gggg) {
    // @ts-ignore
    displayBox.innerHTML = gggg;
}
function fillBox(aaaa) {
    //@ts-ignore
    displayBox === null || displayBox === void 0 ? void 0 : displayBox.innerHTML = aaaa;
}
button2 === null || button2 === void 0 ? void 0 : button2.addEventListener("click", clickButton2);
function clickButton2() {
    currentNumber = currentNumber + 2;
    currentInfo();
}
button3 === null || button3 === void 0 ? void 0 : button3.addEventListener("click", clickButton3);
function clickButton3() {
    currentNumber = currentNumber + 3;
    currentInfo();
}
button4 === null || button4 === void 0 ? void 0 : button4.addEventListener("click", clickButton4);
function clickButton4() {
    currentNumber = currentNumber + 4;
    currentInfo();
}
button5 === null || button5 === void 0 ? void 0 : button5.addEventListener("click", clickButton5);
function clickButton5() {
    currentNumber = currentNumber + 5;
    currentInfo();
}
button6 === null || button6 === void 0 ? void 0 : button6.addEventListener("click", clickButton6);
function clickButton6() {
    currentNumber = currentNumber + 6;
    currentInfo();
}
button7 === null || button7 === void 0 ? void 0 : button7.addEventListener("click", clickButton7);
function clickButton7() {
    currentNumber = currentNumber + 7;
    currentInfo();
}
button8 === null || button8 === void 0 ? void 0 : button8.addEventListener("click", clickButton8);
function clickButton8() {
    currentNumber = currentNumber + 8;
    currentInfo();
}
button9 === null || button9 === void 0 ? void 0 : button9.addEventListener("click", clickButton9);
function clickButton9() {
    currentNumber = currentNumber + 9;
    currentInfo();
}
button0 === null || button0 === void 0 ? void 0 : button0.addEventListener("click", clickButton0);
function clickButton0() {
    currentNumber = currentNumber + 0;
    currentInfo();
}
buttonCe === null || buttonCe === void 0 ? void 0 : buttonCe.addEventListener("click", clickButtonCe);
function clickButtonCe() {
    currentNumber = "";
    displayResult(0);
}
buttonCancel === null || buttonCancel === void 0 ? void 0 : buttonCancel.addEventListener("click", clickButtonCancel);
function clickButtonCancel() {
    currentNumber = "";
    displayResult(0);
}
