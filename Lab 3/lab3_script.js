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
// Questions 7.16, 8.11
/////////////////////////////////////////////////////////////// 7.16 /////////////////////////////////////////////////////////////////////////////
document.writeln("<h3>Question 7.16 - HTML Table</h3>")
document.writeln("<table>");
document.writeln("<tr>");
document.writeln("<th>N</th>");
document.writeln("<th>10*N</th>");
document.writeln("<th>100*N</th>");
document.writeln("<th>1000*N</th>");
document.writeln("</tr>");
// Could do cell values with an outer for loop
for (let i=1; i<7; i++){
    document.writeln(`<tr>`);
    document.writeln(`<td>${i}</td>`);
    document.writeln(`<td>${10*i}</td>`);
    document.writeln(`<td>${100*i}</td>`);
    document.writeln(`<td>${1000*i}</td>`);
    document.writeln("</tr>");
}
document.writeln("</table>");
/////////////////////////////////////////////////////////////// 8.11 /////////////////////////////////////////////////////////////////////////////
document.writeln("<h3>Question 8.11 - Retail Prices</h3>");
const retailPrices = {
    1: 2.98,
    2: 4.50,
    3: 9.98,
    4: 4.49,
    5: 6.87
}

function calculateTotal(productNumber, quantity) {
    if (retailPrices.hasOwnProperty(productNumber)) {
        const price = retailPrices[productNumber];
        const total = price * quantity;
        return total.toFixed(2); // Round to 2 decimal places
    } else {
        return "Invalid product number";
    }
}
let products = [1,2,3,4,5];
let quantityArray = [0, 0, 0, 0, 0]; 
let totalArray = [0, 0, 0, 0, 0];
while (true) {
    let productNumber = prompt("Enter the product number (1-5), or type 'exit' to quit:");
    if (productNumber.toLowerCase() === "exit") {
        break; // Exit the loop if 'exit' is entered
    }
    productNumber = parseInt(productNumber); 
    let quantity = parseInt(prompt("Enter the quantity sold for one day:"));
    if (productNumber >0 && productNumber <= products.length) {
        quantityArray[productNumber-1] = parseInt(quantityArray[productNumber-1]) + parseInt(quantity);
    }

    // Calculate and display total retail value
    const totalRetailValue = calculateTotal(productNumber, quantity);
    if (productNumber >0 && productNumber <= products.length){
        totalArray[productNumber-1] = (parseFloat(totalArray[productNumber-1]) + parseFloat(totalRetailValue)).toFixed(2);
    }
    alert(`Total retail value for product ${productNumber}: $${totalRetailValue}`);
}
document.writeln("<p>Quantity Table</p>");
document.writeln("<table>");
document.writeln("<tr>");
document.writeln("<th>Product Number</th>");
document.writeln("<th>Quantity Sold</th>");
document.writeln("<th>Total Value</th>");
document.writeln("</tr>");
let numProducts = 0;
let valProducts = 0.00;
for (let i=0; i<products.length; i++){
    document.writeln("<tr>");
    document.writeln(`<td>${products[i]}</td>`);
    document.writeln(`<td>${quantityArray[i]}</td>`);
    document.writeln(`<td>${totalArray[i]}</td>`);
    document.writeln("</tr>")
    numProducts += parseInt(quantityArray[i]);
    valProducts = (parseFloat(valProducts) + parseFloat(totalArray[i])).toFixed(2);
}
document.writeln(`<tr>`);
document.writeln("<td><b>Totals:</b></td>");
document.writeln(`<td>${numProducts}</td>`);
document.writeln(`<td>${valProducts}</td>`);
document.writeln("</table>");