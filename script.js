let calculator = document.getElementById("unitCalculator");
let inputBox = document.getElementById("input"); //text-field
let solution = document.getElementById("solution");
const flip = document.getElementById("switch");
let result = document.getElementById("target");
let targetLength = document.getElementById("target");

const conversionToMeter = {
  m: 1,
  cm: 0.01,
  mm: 0.001,
  km: 1000,
  in: 0.0254,
  ft: 0.3048,
  yd: 0.9144,
  mi: 1609.34,
};

const conversionsFromMeters = {
  m: 1,
  cm: 100,
  mm: 1000,
  km: 0.001,
  in: 39.3701,
  ft: 3.28084,
  yd: 1.09361,
  mi: 0.000621371,
};

const conversionToKg = {
  g: 0.001,
  mg: 0.000001,
  t: 1000,
  lb: 0.453592,
  oz: 0.0283495,
  st: 6.35029,
  kg: 1,
};

const conversionFromKg = {
  g: 1000,
  mg: 1000000,
  t: 0.001,
  lb: 2.20462,
  oz: 35.27396,
  st: 0.157473,
  kg: 1,
};

const conversionToBit = {
  b: 1,
  B: 8,
  Kb: 1000,
  KB: 8000,
  Mb: 1e6,
  MB: 8e6,
  Gb: 1e9,
  GB: 8e9,
};

const conversionFromBit = {
  b: 1,
  B: 1 / 8,
  Kb: 1 / 1000,
  KB: 1 / 8000,
  Mb: 1 / 1e6,
  MB: 1 / 8e6,
  Gb: 1 / 1e9,
  GB: 1 / 8e9,
};

const KmToAstronomyUnits = {
  "km": 1,
  "µm": 1e+9,
  "nm": 1e+12,
  "pm": 1e+15,
  "AU": 1 / 149597870.7,
  "ly": 1 / 9460730472580.8,
  "pc": 1 / 3.0856775814913673e+13,
  "Mm": 1 / 1000,
  "Gm": 1 / 1e+6
};
const AstronomyUnitsToKm = {
  "km": 1,
  "µm": 1e-9,
  "nm": 1e-12,
  "pm": 1e-15,
  "AU": 149597870.7,
  "ly": 9460730472580.8,
  "pc": 3.0856775814913673e+13,
  "Mm": 1000,
  "Gm": 1e+6
};

//Creates the dropdown list based on the keys of input dictionary
function addToDropDown(inputDict, dropType) {
  let select = document.getElementById(dropType);
  for (let i in inputDict) {
    option = document.createElement("option");
    option.setAttribute("value", i);
    option.textContent = i;
    select.appendChild(option);
  }
}

let lengthPairs = {};
let massPairs = {};
let bitPairs = {}
let AUPairs ={}

function setUnitDict(e) {
  // Setting dictionary pairs based on selected units from each drop down box
  if (e.target.id == "initialUnit") {
    let key = (lengthPairs["in"] = e.target.value);
  } else if (e.target.id == "targetUnit") {
    let value = (lengthPairs["out"] = e.target.value);
  } else if (e.target.id == "initialMass") {
    let key = (massPairs["in"] = e.target.value);
  } else if (e.target.id == "targetMass") {
    let value = (massPairs["out"] = e.target.value);
  } else if (e.target.id == "initialBit"){
    let key = (bitPairs["in"] = e.target.value);
  }
  else if (e.target.id == "targetBit"){
    let value = (bitPairs["out"] = e.target.value);
  }
 else if (e.target.id == "initialAU"){
  let key = (AUPairs["in"] = e.target.value);
}
else if (e.target.id == "targetAU"){
  let value = (AUPairs["out"] = e.target.value);
}

  doConversion()
  
}

function doConversion(){

  if (
    document.getElementById("input").value.length != 0 &&
    lengthPairs.in != null &&
    lengthPairs.out != null
  ) {
    // conversionLength(document.getElementById("input").value)
    conversionGeneral(
      document.getElementById("input").value,
      document.getElementById("target"),
      conversionToMeter,
      conversionsFromMeters,
      lengthPairs
    );
  }

  if (
    document.getElementById("inputM").value.length != 0 &&
    massPairs.in != null &&
    massPairs.out != null
  ) {
    conversionGeneral(
      document.getElementById("inputM").value,
      document.getElementById("targetM"),
      conversionToKg,
      conversionFromKg,
      massPairs
    );
  }
  if (document.getElementById("inputB").value.length != 0 &&
  bitPairs.in != null &&
  bitPairs.out != null
  ){
    conversionGeneral(
      document.getElementById("inputB").value,
      document.getElementById("targetB"),
      conversionToBit,
      conversionFromBit,
      bitPairs
    )
  }
  if (document.getElementById("inputKm").value.length != 0 &&
  AUPairs.in != null &&
  AUPairs.out != null
  ){
    conversionGeneral(
      document.getElementById("inputKm").value,
      document.getElementById("targetKm"),
      AstronomyUnitsToKm,
      KmToAstronomyUnits,
      AUPairs
    )
  }




}


//search for e.target.value in dict

function conversionGeneral(num, resultTextField, inDict, outDict, pairsDict) {
  console.log(pairsDict);
  let x = inDict[pairsDict["in"]];
  let y = outDict[pairsDict["out"]];
  let result = num * x * y;
  result = parseFloat(result.toFixed(8));
  resultTextField.value = result;
}




//This function only allows numbers to be written in the text field
function onUserInput(e) {
  e.target.value = e.target.value.replace(/[^0-9.]/g, "");
  //[^0-9] means any character that is not a digit from 0 to 9, g globally and not just the first instance.

  doConversion()



}







//resets dictionary on reset
function resetForm(e) {
  massPairs = {};
  lengthPairs = {};
}

const stringToFunc = {
  "+": (a, b) => {
    return a + b;
  },
  "-": (a, b) => {
    return a - b;
  },
  "*": (a, b) => {
    return a * b;
  },
  "/": (a, b) => {
    return a / b;
  },
};

function populateDropDown() {
  let select = document.querySelector("#select");
  for (let i in stringToFunc) {
    let option = document.createElement("option");
    option.setAttribute("id", `option${i}`);
    option.setAttribute("value", i);
    option.textContent = i;
    select.appendChild(option);
  }
}

function customConversion(e) {
  let constant = document.querySelector("#constant").value;
  let select = document.querySelector("#select");
  let conversionFunction = stringToFunc[select.value];
  let valueToConvert = document.querySelector("#inputValue").value;
  let outputValueField = document.querySelector("#outputValue");
  let result = conversionFunction(Number(valueToConvert), Number(constant));

  if (
    select.value !== "custom" &&
    !isNaN(valueToConvert) &&
    !isNaN(constant) &&
    valueToConvert != "" &&
    constant != ""
  ) {
    outputValueField.value = result;
  }
}

window.onload = populateDropDown();

//This creates the two drop down lists on page load
window.addEventListener("DOMContentLoaded", () => {
  addToDropDown(conversionToMeter, "initialUnit");
  addToDropDown(conversionsFromMeters, "targetUnit");
  addToDropDown(conversionToKg, "initialMass");
  addToDropDown(conversionFromKg, "targetMass");
  addToDropDown(conversionToBit, "initialBit");
  addToDropDown(conversionFromBit, "targetBit");
  addToDropDown(AstronomyUnitsToKm, "initialAU")
  addToDropDown(KmToAstronomyUnits, "targetAU")
});
