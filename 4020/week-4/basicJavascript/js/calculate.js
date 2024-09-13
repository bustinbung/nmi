//////////////////////
/* global variables */
//////////////////////
// stores inputs from user
let values = [];
let currentFunction = '';
// used to clear screen after selecting function
let clearOnInput = false;

// buttons
const addButton = document.querySelector("#add");
const subButton = document.querySelector("#sub");
const multButton = document.querySelector("#mult");
const divButton = document.querySelector("#div");
const eqButton = document.querySelector("#calcEq");
const clearButton = document.querySelector("#calcClear");

// button classes
const numButtons = document.querySelectorAll(".number");
const funcButtons = document.querySelectorAll(".function");

// screen
const output = document.querySelector("#calcScreen");

/////////////////////////
/* screen interactions */
/////////////////////////
function clearScreen() {
    output.value = '';
}

function clearAll() {
    output.value = '';
    values = [];
}

function printToScreen(number) {
    // max display size of 13 chars
    if (output.value.length >= 13) {
        return new Error("display limit reached");
    }

    output.value += number.toString();
}

// save current screen value to values array
function save() {
    values.push(output.value);
}

//////////////////////
/* button functions */
//////////////////////
function setFunction(buttonFunction) {
    if (output.value == '') {
        return;
    }

    save();

    currentFunction = buttonFunction;
    setFunctionButtonStyle(buttonFunction);
    clearOnInput = true;
}

function setFunctionButtonStyle(buttonFunction) {
    funcButtons.forEach((button) => {
        // skip if button is currently selected button
        if (button.id == buttonFunction) {
            button.classList.add('active');
            return;
        }

        button.classList.remove('active');
    }) 
}

function compute() {
    clearScreen();

    const currentLength = values.length;
    let result;
    switch(currentFunction) {
        case "add":
            result = Number(values[currentLength - 2]) + Number(values[currentLength - 1]);
            break;
        case "sub":
            result = Number(values[currentLength - 2]) - Number(values[currentLength - 1]);
            break;
        case "mult":
            result = Number(values[currentLength - 2]) * Number(values[currentLength - 1]);
            break;
        case "div":
            result = Number(values[currentLength - 2]) / Number(values[currentLength - 1]);
            break;
    }

    // round result to 4 decimals
    // Number.EPSILON used to account for floating point precision errors
    // see: https://stackoverflow.com/a/11832950
    result = Math.round((result + Number.EPSILON) * 10000) / 10000

    printToScreen(result);
    save();
}

/////////////////////////
/* button assignments */
/////////////////////////
// same function for all number buttons
numButtons.forEach((button) => {
    button.addEventListener('click', () => {
        // clear screen if clear flag is set
        if (clearOnInput == true) {
            clearScreen();
            setFunctionButtonStyle('none');
            clearOnInput = false;
        }

        // don't add 0 to screen if blank
        if (output.value == '' && button.innerHTML == 0) {
            return;
        }

        // enable equals if function is set
        if (currentFunction != '') {
            eqButton.disabled = false;
        }

        printToScreen(button.innerHTML);
    })
})

// function buttons
funcButtons.forEach((button) => {
    button.addEventListener(('click'), () => {
        setFunction(button.id);
    })
})

// clear button
clearButton.onclick = () => {
    clearScreen();
}

// equals button
eqButton.onclick = () => {
    save();
    compute();
    clearOnInput = true;
    eqButton.disabled = true;
}

document.querySelectorAll('.number, #calcClear, #calcEq').forEach((button) => {
    button.addEventListener('mousedown', (event) => {
        button.classList.add('active');
    })

    button.addEventListener('mouseup', (event) => {
        button.classList.remove('active');
    })
})