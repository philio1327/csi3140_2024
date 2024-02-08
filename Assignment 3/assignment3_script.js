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
document.writeln("<h3>Question 6.18 - Prompts </h3>");
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
document.writeln(`<p>Sum: ${sum}`);
document.writeln(`<p>Average: ${avg}`);
document.writeln(`<p>Product: ${prod}`);
document.writeln(`<p>Smallest Value: ${sm}`);
document.writeln(`<p>Largest Value: ${lg}`);
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

/////////////////////////////////////////////////////////////// 7.9 //////////////////////////////////////////////////////////////////////////////
// a) //
document.writeln("<h3>Question 7.9 - Identify JavaScript Errors </h3>");
document.writeln("<h4>a)</h4>");
document.writeln("<p>if (age >= 65);</p>");
document.writeln("<p class='indented'>document.writeln( 'Age is greater than or equal to 65' );</p>");
document.writeln("<p>else</p>");
document.writeln("<p class='indented'>document.writeln( 'Age is less than 65' );</p>" );
document.writeln("<p><b>Remove the semicolon after the if condition so it reads:</b></p>");

document.writeln("<p>if (age >= 65)</p>");
document.writeln("<p class='indented'>document.writeln( 'Age is greater than or equal to 65' );</p>");
document.writeln("<p>else</p>");
document.writeln("<p class='indented'>document.writeln( 'Age is less than 65' );</p>" );

// b) //
document.writeln("<h4>b)</h4>");
document.writeln("<p>var x=1, total;</p>");
document.writeln("<p>while ( x <= 10 ) </p>");
document.writeln("<p>{</p>");
document.writeln("<p class='indented'> total += x;</p>");
document.writeln("<p class='indented'>++x;</p>");
document.writeln("<p>}</p>");
document.writeln("<p> <b>We should initialize the variable total to a valid value before using it in the while loop</b> </p>");
document.writeln("<p>var x=1;</p>");
document.writeln("<p>var total=0;</p>")
document.writeln("<p>while ( x <= 10 ) </p>");
document.writeln("<p>{</p>");
document.writeln("<p class='indented'> total += x;</p>");
document.writeln("<p class='indented'>++x;</p>");
document.writeln("<p>}</p>");

// c) //
document.writeln("<h4>c)</h4>");
document.writeln("<p>var x=1;</p>");
document.writeln("<p>var total=0;</p>");
document.writeln("<p>While ( x<=100 )</p>");
document.writeln("<p class='indented'>total += x;</p>");
document.writeln("<p class='indented'>++x;</p>");
document.writeln("<p><b>Code is missing curly brackets to denote the while block, and while should be written with a lowercase w</b></p>");
document.writeln("<p>var x=1;</p>");
document.writeln("<p>var total=0;</p>");
document.writeln("<p>while ( x<=100 ){</p>");
document.writeln("<p class='indented'>total += x;</p>");
document.writeln("<p class='indented'>++x;</p>");
document.writeln("<p>}</p>");

// d) //
document.writeln("<h4>d)</h4>");
document.writeln("<p>var y=5;</p>");
document.writeln("<p>while ( y > 0 )</p>");
document.writeln("<p>{</p>");
document.writeln("<p class='indented'>document.writeln( y );</p>");
document.writeln("<p class='indented'>++y;</p>");
document.writeln("<p><b>Issue is no closing bracket for while loop and this yields an infinite loop. We should decrement y so the script terminates.</b></p>");
document.writeln("<p>var y=5;</p>");
document.writeln("<p>while ( y > 0 )</p>");
document.writeln("<p>{</p>");
document.writeln("<p class='indented'>document.writeln( y );</p>");
document.writeln("<p class='indented'>--y;</p>");
document.writeln("<p>}</p>");

/////////////////////////////////////////////////////////////// 7.10 /////////////////////////////////////////////////////////////////////////////
document.writeln("<h3>Question 7.10 - Mystery Script</h3>");
document.writeln("<p>The script below will first print the squares of integers from 1 to 10 inclusive </p>");
document.writeln("<p>Then the value of total will be printed which are the sums of the squares of 1 to 10. </p>");
document.writeln("<p>Note: The Sum of n Squares can be calculated by the formula (1/6)n(n+1)(2n+1) for all integers n </p>");
document.writeln("<img src='screenshot1.png' alt='Screenshot of 7.10 Script' />");

/////////////////////////////////////////////////////////////// 7.18 /////////////////////////////////////////////////////////////////////////////
document.writeln("<h3>Question 7.18 - Mystery Script 2</h3>");
document.writeln("<p>Analyzing the code below line by line, first we initialize row to 10 and column to a default value. </p>");
document.writeln("<p>Next, we check if row is greater than or equal to 1, which it is since row=10. We then set column equal to 1.</p>");
document.writeln("<p>Next, we add a paragraph tag to the HTML document. Then we create another while loop which gets entered since column is less than or equal to 10</p>");
document.writeln("<p>Next we write either a '<' character or a '>' to the document depending on whether the row is an odd or even number.</p>");
document.writeln("<p>It prints '<' if row is odd, otherwise it prints '>' </p>");
document.writeln("<p>The inner while loop gets run 10 times, given that the column variable is incremented by 1 at each iteration</p>");
document.writeln("<p>The first iteration, row=10, column=1, it prints >>>>>>>>>> then we decrement row by 1 and reset the column variable to 1</p>");
document.writeln("<p>The next iteration, row=9, column=1 and it prints <<<<<<<<<< until column reaches a value of 11, then we decrement the row value by 1 and reset column to 1 </p>");
document.writeln("<p>Rinse and repeat by alternating between first and next iteration, with each decreasing row value until row=0</p>");
document.writeln("<p>Once row=0, we exit the outer while loop and the program terminates</p>");
document.writeln("<img src='screenshot2.png' />");

/////////////////////////////////////////////////////////////// 8.4 //////////////////////////////////////////////////////////////////////////////
