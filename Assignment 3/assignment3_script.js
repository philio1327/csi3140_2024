//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// University of Ottawa                                                                                                                         //
// Assignment 3 - Javascript File                                                                                                               //
// Authors: Philip Anderegg & Benjamin Flynn                                                                                                    //
// Student Numbers: 8191716 & 300106230                                                                                                         //
// Course Name: www Structures, Techniques & Standards                                                                                          //
// Course Code: CSI 3140                                                                                                                        //
// Professor: Iluju Kiringa                                                                                                                     //
// Due Date: February 11th, 2023                                                                                                                //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////// 6.18 /////////////////////////////////////////////////////////////////////////////
// Questions: 6.18, 6.20, 6.24, 7.9, 7.10, 7.18, 8.4, 8.5 
let x1, x2, x3;
let xVal, yVal, zVal;
x1 = window.prompt("Enter First Integer: ");
x2 = window.prompt("Enter Second Integer: ");
x3 = window.prompt("Enter Third Integer: ");

xVal = parseInt(x1);
yVal = parseInt(x2);
zVal = parseInt(x3);
let sum, avg, prod, sm, lg;
sum = xVal + yVal + zVal;
avg = sum / 3;
prod = xVal * yVal * zVal;
sm = Math.min(xVal, yVal, zVal);
lg = Math.max(xVal, yVal, zVal);

// Similar to the f-string with {} in Python
window.alert(`Sum: ${sum}\nAverage: ${avg}\nProduct: ${prod}\nSmallest Value: ${sm}\nLargest Value: ${lg}\n`);

/////////////////////////////////////////////////////////////// 6.20 /////////////////////////////////////////////////////////////////////////////
// we can use document.writeln() to write HTML into our document
let val1, val2, val3, val4, val5;
let parseVal1, parseVal2, parseVal3, parseVal4, parseVal5;

val1 = window.prompt("Question 6.20\nEnter First Integer: ");
val2 = window.prompt("Question 6.20\nEnter Second Integer: ");
val3 = window.prompt("Question 6.20\nEnter Third Integer: ");
val4 = window.prompt("Question 6.20\nEnter Fourth Integer: ");
val5 = window.prompt("Question 6.20\nEnter Fifth Integer: ");

parseVal1 = parseInt(val1);
parseVal2 = parseInt(val2);
parseVal3 = parseInt(val3);
parseVal4 = parseInt(val4);
parseVal5 = parseInt(val5);

let minVal, maxVal;
minVal = Math.min(parseVal1, parseVal2, parseVal3, parseVal4, parseVal5);
maxVal = Math.max(parseVal1, parseVal2, parseVal3, parseVal4, parseVal5);

document.writeln("<h3>Question 6.20 - Input Results</h3>");
document.writeln(`<p>Minimum Value: ${minVal}</p>`);
document.writeln(`<p>Maximum Value: ${maxVal}</p>`);

/////////////////////////////////////////////////////////////// 6.24 /////////////////////////////////////////////////////////////////////////////

document.writeln("<h3>Question 6.24 - Squares and Cubes</h3>");
document.writeln("<table>");
document.writeln("<tr>"+
"<th>Number</th>"+
"<th>Square</th>"+
"<th>Cube</th>");
document.writeln("</tr>");
for (let i=0; i<6; i++){
    document.writeln("<tr>"+
    `<td>${i}</td>`+
    `<td>${i*i}</td>`+
    `<td>${i*i*i}</td>`+
    "</tr>");
}

document.writeln("</table>");