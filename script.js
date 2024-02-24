const textBox = document.getElementById("textBox");
const cToF = document.getElementById("c-f");
const fToC = document.getElementById("f-c");
const subBtn = document.getElementById("subBtn");
const result = document.getElementById("result");

let temp;

function convert() {
  if (cToF.checked) {
    temp = Number(textBox.value);
    temp = temp * (9 / 5) + 32;
    result.textContent = temp.toFixed(1) + "°F";
  } else if (fToC.checked) {
    temp = Number(textBox.value);
    temp = (temp - 32) * (5 / 9);
    result.textContent = temp.toFixed(1) + "°C";
  } else {
    result.textContent = `Select a unit`;
  }
}
