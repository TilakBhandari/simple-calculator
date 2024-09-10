const display = document.querySelector(".display");

function appendToDisplay(input) {
  display.innerText += input; //works
}

function clearDisplay() {
  display.innerText = ""; // works
}

function calculate() {
  try {
    display.innerText = eval(display.innerText);
  } catch (error) {
    display.innerText = "ERROR";
  }
}

function backSpace() {
  display.innerText = display.innerText.slice(0, -1); //works
}
