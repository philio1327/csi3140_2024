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

// Define retail prices for each product
const retailPrices = {
    1: 2.98,
    2: 4.50,
    3: 9.98,
    4: 4.49,
    5: 6.87
};

// Function to calculate total retail value for a product
function calculateTotal(productNumber, quantity) {
    let price;
    switch (productNumber) {
        case 1:
            price = retailPrices[1];
            break;
        case 2:
            price = retailPrices[2];
            break;
        case 3:
            price = retailPrices[3];
            break;
        case 4:
            price = retailPrices[4];
            break;
        case 5:
            price = retailPrices[5];
            break;
        default:
            return "Invalid product number";
    }
    const total = parseFloat(price) * parseInt(quantity);
    return parseFloat(total).toFixed(2); // Round to 2 decimal places
}

// Initialize arrays to store quantity and total value for each product
let quantityArray = [0, 0, 0, 0, 0];
let totalArray = [0, 0, 0, 0, 0];

// Loop to input product number and quantity
while (true) {
    let productInput = prompt("Enter the product number (1-5), or type 'exit' to quit:");
    if (productInput === null || productInput.toLowerCase() === "exit") {
        break; // Exit the loop if 'exit' is entered or Cancel is clicked
    }
    let productNumber = parseInt(productInput);
    if (productNumber < 1 || productNumber > 5 || isNaN(productNumber)) {
        alert("Invalid product number. Please enter a number between 1 and 5.");
        continue;
    }

    let quantityInput = prompt("Enter the quantity of product sold:");
    if (quantityInput === null) {
        break; // Exit the loop if Cancel is clicked
    }
    let quantity = parseInt(quantityInput);
    if (isNaN(quantity) || quantity <= 0) {
        alert("Invalid quantity. Please enter a positive number.");
        continue;
    }

    // Update quantity and total value arrays
    let index = productNumber - 1;
    quantityArray[index] += parseInt(quantity);
    totalArray[index] = (parseFloat(totalArray[index]) + parseFloat(calculateTotal(productNumber, quantity))).toFixed(2);
}

// Display quantity table
document.writeln("<h4>Quantity Table</h4>");
document.writeln("<table>");
document.writeln("<tr>");
document.writeln("<th>Product Number</th>");
document.writeln("<th>Quantity Sold</th>");
document.writeln("<th>Total Value</th>");
document.writeln("</tr>");
let totalQuantity = 0;
let totalValue = 0;
for (let i = 0; i < quantityArray.length; i++) {
    let productNumber = i + 1;
    document.writeln("<tr>");
    document.writeln(`<td>${productNumber}</td>`);
    document.writeln(`<td>${quantityArray[i]}</td>`);
    document.writeln(`<td>${totalArray[i]}</td>`);
    document.writeln("</tr>");
    totalQuantity += quantityArray[i];
    totalValue += parseFloat(totalArray[i]);
}
document.writeln("<tr>");
document.writeln("<td><b>Totals:</b></td>");
document.writeln(`<td>${totalQuantity}</td>`);
document.writeln(`<td>${totalValue.toFixed(2)}</td>`);
document.writeln("</tr>");
document.writeln("</table>");
