let calculator = document.getElementById("unitCalculator");
let inputBox = document.getElementById("input"); //text-field
let solution = document.getElementById("solution");
const flip = document.getElementById("switch");
let cm = document.getElementById("cm");
let m = document.getElementById("m");
const conversions = {
  length: {
    meters: 1,
    cent: 100,
  },
};

//This function only allows numbers to be written in the text field

function forceIntegerInput(e) {
  inputBox.value = inputBox.value.replace(/[^0-9.]/g, "");
  //[^0-9] means any character that is not a digit from 0 to 9, g globally and not just the first instance.
  if (inputBox.value.length != 0) {
    if (cm.innerText === "cm:") {
      cmToM();
    } else if (cm.innerText === "m:") {
      mToCM();
    }
  }
  //if you enter anything it will stil
}

function cmToM() {
  //This rounds up to 7 decimal points
  solution.value = parseFloat(inputBox.value / 100).toFixed(7);
}

function mToCM() {
  //This rounds up to 7 decimal points
  solution.value = parseFloat(inputBox.value * 100).toFixed(7);
}

function switchUnits() {
  if (cm.innerText === "m:") {
    cm.innerText = "cm:";
    m.innerText = "m:";
    inputBox.value = "";
    solution.value = "";
  } else if (cm.innerText === "cm:") {
    cm.innerText = "m:";
    m.innerText = "cm:";
    inputBox.value = "";
    solution.value = "";
  }
}

flip.addEventListener("click", switchUnits);
