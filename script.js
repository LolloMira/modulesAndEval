
// const fs = require('fs');

// fs.readFile


// function executeConf(jsonArray) {
//     for (const element of jsonArray) {
//         let array = element.input;
//         eval(element.code);
//     }
// }

// const value = 5;

// function myLog(variableToLog, someCode) {
//     eval(someCode);
//     console.log(variableToLog);
    
// }

// myLog(value, "variableToLog = '6pippo'; console.log('Ti ho fregato')");

function helper2() {
    
}




const pippo = require("./myMath")


const helper = require("./caseHelper")

console.log(pippo.sum(3, 4));

console.log(pippo.pow(3, 2));

console.log(Math.pow(3, 2));

console.log(helper.splitCamelCase("laCasaRosa"));