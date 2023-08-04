let calculator = document.getElementById("unitCalculator");
let inputBox = document.getElementById("input"); //text-field
let solution = document.getElementById("solution");
const flip = document.getElementById("switch");
let result = document.getElementById("target");

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

let unitPairs = {};
function setUnitDict(e) {
  // Setting dictionary pairs based on selected units from each drop down box
  if (e.target.id == "initialUnit") {
    let key = (unitPairs["in"] = e.target.value);
  } else if (e.target.id == "targetUnit") {
    let value = (unitPairs["out"] = e.target.value);
  }
  
  input = document.getElementById("input").value
  if (input.length != 0 && unitPairs.in != null && unitPairs.out != null) {
     conversion(input)
}}

//search for e.target.value in dict
function conversion(num) {
  console.log(unitPairs);
  let x = conversionToMeter[unitPairs["in"]];
  let y = conversionsFromMeters[unitPairs["out"]];
  result = num * x * y;
  target.value = result

}

//This function only allows numbers to be written in the text field
function onUserInput(e) {
  e.target.value = e.target.value.replace(/[^0-9.]/g, "");
  //[^0-9] means any character that is not a digit from 0 to 9, g globally and not just the first instance.

  //Will not produce a resulted error if not all units are selected
  if (e.target.value.length != 0 && unitPairs.in != null && unitPairs.out != null) {
    input = e.target.value;
    conversion(input)
  }
}

function resetForm(e){
  unitPairs= {}
  console.log(unitPairs)
}

//This creates the two drop down lists
window.addEventListener("DOMContentLoaded", () => {
  addToDropDown(conversionToMeter, "initialUnit");
  addToDropDown(conversionsFromMeters, "targetUnit");
});

