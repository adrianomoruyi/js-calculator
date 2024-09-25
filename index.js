const display = document.getElementById("display");

function appendToDisplay(input) {
    

    if (display.value.indexOf('.') > -1 && input == ('.')) {

    }
    else {
        display.value += input;
    }

}

function clearDisplay () {
    display.value = "";
}

function calculate () {
    try {
        display.value = eval(display.value);
    }
    catch {
        display.error = "Error";
    }
}