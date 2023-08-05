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

//resets dictionary on reset
function resetForm(e){
  unitPairs= {}
  console.log(unitPairs)
}

const stringToFunc ={

  "+" : (a,b) => {
      return a+b},
  "-" : (a,b) => {return a-b},
  "*": (a,b) => {return a*b},
  "/": (a,b) => {return a/b}

};

function populateDropDown(){
  let select = document.querySelector("#select")
  for (let i in stringToFunc){
      let option = document.createElement("option")
      option.setAttribute("id", `option${i}`)
      option.setAttribute("value", i)
      option.textContent = i
      select.appendChild(option)
}
}

function customConversion(e){

  let constant = document.querySelector("#constant").value
  let select = document.querySelector("#select")
  let conversionFunction = stringToFunc[select.value] 
  let valueToConvert=document.querySelector("#inputValue").value 
  let outputValueField = document.querySelector("#outputValue")
  let result = conversionFunction(Number(valueToConvert),Number(constant))

  if (select.value !== "custom" &&  !isNaN(valueToConvert)  && !isNaN(constant) && valueToConvert!= "" && constant!= ""){
      outputValueField.value = result
 }


}

window.onload = populateDropDown()

//This creates the two drop down lists on page load
window.addEventListener("DOMContentLoaded", () => {
  addToDropDown(conversionToMeter, "initialUnit");
  addToDropDown(conversionsFromMeters, "targetUnit");
});