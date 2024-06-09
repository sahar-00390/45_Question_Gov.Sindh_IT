"use strict";
// \t  add 4 spaces
//  \n  add extra line
Object.defineProperty(exports, "__esModule", { value: true });
let personName = "Sahar Mughal";
console.log(personName); // simple print
// print with spaces
let personName1 = `\t\n${personName}\t\n`;
console.log(personName1);
let personName2 = personName.trim();
console.log(personName2);
