
// Create a dictionary
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

  //add "**":"**1/{}",
  const operatorReverse={
    "*":"/",
    "+":"-",
    "/":"*",
    "-":"+",
  }


// [COSMETIC input unit label]  [drop down operator][converter] [COSMETIC output unit label] 

let customResult = inputNumber * dropdown * converter

//map operator:reverse operator



let inputNumber = 
let unitCustom1= x
let unitCustom2= y
let dropdown = ["*","/","**","+","-","sqrt()"]
let converter = x 10


//search through dictionary 1[unit1] x value of name
//search through dictionary2[unit2] x value of name

let input = 5
let dropDownOption="foot"
let unitTarget = "yard"
let resultMultiplier = input*conversionToMeter[dropDownOption] * conversionsFromMeters[unitTarget]
console.log(resultMultiplier)






