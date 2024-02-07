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
