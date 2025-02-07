let resultField = document.getElementById("result");

function appendCharacter(char) {
    resultField.value += char;
}

function clearDisplay() {
    resultField.value = "";
}

function deleteLast() {
    resultField.value = resultField.value.slice(0, -1);
}

function calculateResult() {
    try {
        resultField.value = eval(resultField.value);
    } catch (error) {
        alert("Invalid input");
        clearDisplay();
    }
}
