//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// University of Ottawa                                                                                                                         //
// Assignment 5 - Javascript File                                                                                                               //
// Authors: Philip Anderegg & Benjamin Flynn                                                                                                    //
// Student Numbers: 8191716 & 300106230                                                                                                         //
// Course Name: www Structures, Techniques & Standards                                                                                          //
// Course Code: CSI 3140                                                                                                                        //
// Professor: Iluju Kiringa                                                                                                                     //
// Due Date: March 11th, 2024                                                                                                                //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Questions: 12.3, 14.5, 14.7, 14.8, 14.11, 14.14
// See HTML and CSS for answers to 12.3, 14.5, 14.7
/////////////////////////////////////////////////////////////// 14.8 /////////////////////////////////////////////////////////////////////////////
let canvas2 = document.getElementById("canvas2");
let context = canvas2.getContext("2d");

// Draw Triangle shape

context.beginPath();
context.moveTo(75, 40);
context.lineTo(225, 40);
context.lineTo(150, 100);
context.lineTo(75, 40);
context.lineWidth = 1;
context.lineCap = "square";
context.strokeStyle = "black";
context.stroke();

// Create linear gradients for each segment
let gradient1 = context.createLinearGradient(75, 40, 225, 40); // Gradient for first segment
gradient1.addColorStop(0, "blue"); // Start color
gradient1.addColorStop(0.5, "red"); // Mid color
gradient1.addColorStop(1, "black"); // End color

// Fill each segment with the respective gradient

context.fillStyle = gradient1;
context.fill();

/////////////////////////////////////////////////////////////// 14.11 ////////////////////////////////////////////////////////////////////////////
let canvas3 = document.getElementById("canvas3");
let context3 = canvas3.getContext("2d");
canvas3.width = 400; // have to tell JS that the width and height are in fact 400
canvas3.height = 400;
const colors = ["red", "yellow", "purple", "lightcoral", "aqua", "green", "blue", "black"];
// Draw 8 concentric circles
for (let i=0; i<8; i++){
    context3.beginPath();
    context3.arc(200, 200, 50 - 5*i, 0, Math.PI * 2); // must color backwards, i.e. biggest circle first otherwise only last circle is shown
    context3.fillStyle = colors[7-i];
    context3.fill();
}

/////////////////////////////////////////////////////////////// 14.14 ////////////////////////////////////////////////////////////////////////////
let canvas4 = document.getElementById("canvas4");
let context4 = canvas4.getContext("2d");

canvas4.width = 500; // Must respecify in JS so circle is drawn properly
canvas4.height = 500; 

// Set initial center of circle
let x = 250;
let y = 50;
let radius = 50;

// 4 Points of Diamond Path
const points = [
    {x: 250, y: 50},
    {x: 450, y: 250},
    {x: 250, y: 450},
    {x: 50, y: 250}
];

let currentPointIndex = 0; // Start from (250, 50)

function draw(){
    // Clear canvas
    context4.clearRect(0, 0, canvas4.width, canvas4.height);
    // draw circle at initial location
    context4.beginPath();
    context4.arc(x, y, radius, 0, Math.PI * 2);
    context4.fillStyle = "black";
    context4.fill();

    // Move the circle towards the next point
    const nextPoint = points[currentPointIndex];
    const dx = nextPoint.x - x;
    const dy = nextPoint.y - y;
    const distanceToNextPoint = Math.sqrt(dx * dx + dy * dy);
    const speed = 2; // Adjust speed as needed
    if (distanceToNextPoint > speed) {
        // Move towards the next point
        x += dx / distanceToNextPoint * speed;
        y += dy / distanceToNextPoint * speed;
    } else {
        // If reached the next point, move to the next one
    currentPointIndex = (currentPointIndex + 1) % points.length;
    }
    // Request next frame
    requestAnimationFrame(draw);
}
draw();



