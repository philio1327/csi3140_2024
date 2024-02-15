//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// University of Ottawa                                                                                                                         //
// Assignment 4 - Javascript File                                                                                                               //
// Authors: Philip Anderegg & Benjamin Flynn                                                                                                    //
// Student Numbers: 8191716 & 300106230                                                                                                         //
// Course Name: www Structures, Techniques & Standards                                                                                          //
// Course Code: CSI 3140                                                                                                                        //
// Professor: Iluju Kiringa                                                                                                                     //
// Due Date: February 17th, 2023                                                                                                                //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////// 9.7 //////////////////////////////////////////////////////////////////////////////
// Questions: 9.7, 9.11 a-c, 9.21
function start(){
    let button = document.getElementById("calculateButton");
    button.addEventListener("click", displayArea, false);
}
function displayArea(){
    let inputField = document.getElementById("radius");
    let radius = parseFloat(inputField.value);
    let result = document.getElementById("result");
    if (radius < 0){
        window.alert("Please Input Positive Radius");
        result.innerHTML = "Circle Area is: Negative Radius is Invalid"
    } else {
        result.innerHTML = "Circle Area is: " + circleArea(radius);
    }
}

function circleArea(radius) {
    // Input radius will always be a number because of the input field restriction
    return Math.PI * radius * radius;
}

/////////////////////////////////////////////////////////////// 9.11 /////////////////////////////////////////////////////////////////////////////
// Part a) b) c)//
function start2(){
    // Get all buttons from class randomInteger
    const buttons = document.querySelectorAll(".randomInteger");
    // Loop through each button and attach event listener
    buttons.forEach(button => {
        button.addEventListener("click", handleClick, false);
    }) 
}
function handleClick(event){
    // To get the id of the button that was clicked
    const buttonID = event.target.id;
    // Use a switch case since buttonID is finite
    let result;
    switch(buttonID){
        case "random12":
            result = document.getElementById("result12");
            result.innerHTML = "Integer 1 <u><</u> n <u><</u> 2 : <b>" + randomInteger(1, 2) + "</b>";
            break
        case "random1_100":
            result = document.getElementById("result1_100");
            result.innerHTML = "Integer 1 <u><</u> n <u><</u> 100 : <b>" + randomInteger(1, 100) + "</b>";
            break
        case "random0_9":
            result = document.getElementById("result0_9");
            result.innerHTML = "Integer 0 <u><</u> n <u><</u> 9 : <b>" + randomInteger(0, 9) + "</b>";
            break
        case "random1000_1112":
            result = document.getElementById("result1000_1112");
            result.innerHTML = "Integer 1000 <u><</u> n <u><</u> 1112 : <b>" + randomInteger(1000, 1112) + "</b>";
            break
        case "random-1_1":
            result = document.getElementById("result-1_1");
            result.innerHTML = "Integer -1 <u><</u> n <u><</u> 1 : <b>" + randomInteger(-1, 1) + "</b>";
            break
        case "random-3_11":
            result = document.getElementById("result-3_11");
            result.innerHTML = "Integer -3 <u><</u> n <u><</u> 11 : <b>" + randomInteger(-3, 11) + "</b>";
            break
        default:
            window.alert("Unknown Button Error");
            break
    }

}
function randomInteger(a, b){
    // This includes both end points and assumes a < b
    return a + Math.floor( Math.random() * ( b - a + 1 ) );
}


/////////////////////////////////////////////////////////////// 9.21 /////////////////////////////////////////////////////////////////////////////
function start3(){
    let button = document.getElementById("flip");
    button.addEventListener("click", displayFlip, false);
}
function flipCoin(){
    let randVal = Math.random();
    // if random < 0.5 return true for heads, else return false for tails
    return randVal < 0.5;
}
function displayFlip(){
    let result = document.getElementById("coin");
    let coin1 = flipCoin();
    if (coin1) {
        result.innerHTML = "Coin Flip: <b>Heads</b>";
    } else {
        result.innerHTML = "Coin Flip: <b>Tails</b>";
    }
    
}

window.addEventListener("load", start, false);
window.addEventListener("load", start2, false);
window.addEventListener("load", start3, false);