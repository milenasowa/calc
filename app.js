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
let historyBox = document.getElementById("history-box");
let currentNumber = "";
let currentNumber2 = "";
let sum = "";
//@ts-ignore
let sign = "";
button1 === null || button1 === void 0 ? void 0 : button1.addEventListener("click", clickButton1);
function clickButton1() {
    debugger;
    if (sign === "") {
        currentNumber = currentNumber + 1;
        fillBox(currentNumber);
    }
    else {
        currentNumber2 = currentNumber2 + 1;
        fillBox(currentNumber2);
    }
}
function displayResult(gggg) {
    // @ts-ignore
    displayBox.innerHTML = gggg;
}
function fillBox(aaaa) {
    //@ts-ignore
    displayBox === null || displayBox === void 0 ? void 0 : displayBox.innerHTML = aaaa;
    historyDisplay(currentNumber + sign + currentNumber2);
}
function historyDisplay(sum) {
    // @ts-ignore
    historyBox === null || historyBox === void 0 ? void 0 : historyBox.innerHTML = sum;
}
button2 === null || button2 === void 0 ? void 0 : button2.addEventListener("click", clickButton2);
function clickButton2() {
    //@ts-ignore
    if (sign === "") {
        currentNumber = currentNumber + 2;
        fillBox(currentNumber);
    }
    else {
        currentNumber2 = currentNumber2 + 2;
        fillBox(currentNumber2);
    }
    // let test = eval("111+10")
    // console.log(test)
}
button3 === null || button3 === void 0 ? void 0 : button3.addEventListener("click", clickButton3);
function clickButton3() {
    if (sign === "") {
        currentNumber = currentNumber + 3;
        fillBox(currentNumber);
    }
    else {
        currentNumber2 = currentNumber2 + 3;
        fillBox(currentNumber2);
    }
    // 1. jezeli jest sign === null to dodawaj do current number, else do current number 2.
    // w elsach funkcja odpowieadajaca za zaki ma byc przypisana do sign,. 
    //  gdy zostanie wywolana metoda rowna sie ma byc wywolana current number
}
button4 === null || button4 === void 0 ? void 0 : button4.addEventListener("click", clickButton4);
function clickButton4() {
    if (sign === "") {
        currentNumber = currentNumber + 4;
        fillBox(currentNumber);
    }
    else {
        currentNumber2 = currentNumber2 + 4;
        fillBox(currentNumber2);
    }
}
button5 === null || button5 === void 0 ? void 0 : button5.addEventListener("click", clickButton5);
function clickButton5() {
    if (sign === "") {
        currentNumber = currentNumber + 5;
        fillBox(currentNumber);
    }
    else {
        currentNumber2 = currentNumber2 + 5;
        fillBox(currentNumber2);
    }
}
button6 === null || button6 === void 0 ? void 0 : button6.addEventListener("click", clickButton6);
function clickButton6() {
    if (sign === "") {
        currentNumber = currentNumber + 6;
        fillBox(currentNumber);
    }
    else {
        currentNumber2 = currentNumber2 + 6;
        fillBox(currentNumber2);
    }
}
button7 === null || button7 === void 0 ? void 0 : button7.addEventListener("click", clickButton7);
function clickButton7() {
    if (sign === "") {
        currentNumber = currentNumber + 7;
        fillBox(currentNumber);
    }
    else {
        currentNumber2 = currentNumber2 + 7;
        fillBox(currentNumber2);
    }
}
button8 === null || button8 === void 0 ? void 0 : button8.addEventListener("click", clickButton8);
function clickButton8() {
    if (sign === "") {
        currentNumber = currentNumber + 8;
        fillBox(currentNumber);
    }
    else {
        currentNumber2 = currentNumber2 + 8;
        fillBox(currentNumber2);
    }
}
button9 === null || button9 === void 0 ? void 0 : button9.addEventListener("click", clickButton9);
function clickButton9() {
    if (sign === "") {
        currentNumber = currentNumber + 9;
        fillBox(currentNumber);
    }
    else {
        currentNumber2 = currentNumber2 + 9;
        fillBox(currentNumber2);
    }
}
button0 === null || button0 === void 0 ? void 0 : button0.addEventListener("click", clickButton0);
function clickButton0() {
    if (sign === "") {
        currentNumber = currentNumber + 0;
        fillBox(currentNumber);
    }
    else {
        currentNumber2 = currentNumber2 + 0;
        fillBox(currentNumber2);
    }
}
buttonCe === null || buttonCe === void 0 ? void 0 : buttonCe.addEventListener("click", clickButtonCe);
function clickButtonCe() {
    currentNumber = "";
    currentNumber2 = "";
    //@ts-ignore
    sign = "";
    displayResult(0);
    historyDisplay("");
}
buttonCancel === null || buttonCancel === void 0 ? void 0 : buttonCancel.addEventListener("click", clickButtonCancel);
function clickButtonCancel() {
    currentNumber = "";
    currentNumber2 = "";
    //@ts-ignore
    sign = "";
    displayResult(0);
    historyDisplay("");
}
buttonPlus === null || buttonPlus === void 0 ? void 0 : buttonPlus.addEventListener("click", clickButtonPlus);
function clickButtonPlus() {
    if (sign === "") {
        sign = "+";
    }
    else {
        currentNumber = eval(sum);
        sign = "+";
        currentNumber2 = "";
    }
}
buttonMinus === null || buttonMinus === void 0 ? void 0 : buttonMinus.addEventListener("click", clickButtonMinus);
function clickButtonMinus() {
    if (sign === "") {
        sign = "-";
    }
    else {
        currentNumber = eval(sum);
        sign = "-";
        currentNumber2 = "";
    }
}
buttonDivide === null || buttonDivide === void 0 ? void 0 : buttonDivide.addEventListener("click", clickButtonDivide);
function clickButtonDivide() {
    if (sign === "") {
        sign = "";
    }
    else {
        currentNumber = eval(sum);
        sign = "/";
        currentNumber2 = "";
    }
}
buttonMultiple === null || buttonMultiple === void 0 ? void 0 : buttonMultiple.addEventListener("click", clickButtonMultiple);
function clickButtonMultiple() {
    if (sign === "") {
        sign = "";
    }
    else {
        currentNumber = eval(sum);
        sign = "*";
        currentNumber2 = "";
    }
}
buttonSum === null || buttonSum === void 0 ? void 0 : buttonSum.addEventListener("click", clickButtonSum);
function clickButtonSum() {
    debugger;
    sum = currentNumber + sign + currentNumber2;
    let equal = eval(sum);
    fillBox(equal);
}
