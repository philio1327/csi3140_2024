//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// University of Ottawa                                                                                                                         //
// Lab 5 - Javascript File                                                                                                                      //
// Authors: Philip Anderegg & Benjamin Flynn                                                                                                    //
// Student Numbers: 8191716 & 300106230                                                                                                         //
// Course Name: www Structures, Techniques & Standards                                                                                          //
// Course Code: CSI 3140                                                                                                                        //
// Professor: Iluju Kiringa                                                                                                                     //
// Due Date: March 10th, 2023                                                                                                                   //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Questions 12.6, 13.3, 13.4, 13.7, 14.17 
/////////////////////////////////////////////////////////////// 12.6 /////////////////////////////////////////////////////////////////////////////

document.getElementById('customizeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var backgroundColor = document.getElementById('backgroundColor').value;
    var fontStyle = document.getElementById('fontStyle').value;
    
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.fontFamily = fontStyle;
});


function createCanvas() {
    var side = 100;
    var tbody = document.getElementById("tablebody");

    for (var i = 0; i < side; ++i) {
        var row = document.createElement("tr");

        for (var j = 0; j < side; ++j) {
            var cell = document.createElement("td");
            row.appendChild(cell);
        } 
        tbody.appendChild(row);
    }
    
    document.getElementById("canvas-q13").addEventListener("mousemove", processMouseMove, false);
    document.getElementById("eraseAllBtn").addEventListener("click", eraseAll, false);


}


function processMouseMove(e) {
    console.log(e)
    if (e.target.tagName.toLowerCase() == "td") {
        if (e.ctrlKey) {
            e.target.setAttribute("class", "blue");
        } 

        if (e.shiftKey) {
            e.target.setAttribute("class", "red");
        }

        if (e.altKey) {
            e.target.removeAttribute("class"); //13.3
        }
    } 
} 

window.addEventListener("load", createCanvas, false);


function eraseAll() { //13.4
    var cells = document.querySelectorAll("#canvas-q13 td");
    cells.forEach(function(cell) {
        cell.removeAttribute("class");
    });
}


//13.7
const dragImage = document.getElementById('dragImage');
let isDragging = false;
let offsetX, offsetY;

dragImage.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - dragImage.getBoundingClientRect().left;
    offsetY = e.clientY - dragImage.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        dragImage.style.left = e.clientX - offsetX + 'px';
        dragImage.style.top = e.clientY - offsetY + 'px';
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});



//14.17
const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
let isPainting = false;
let isEraser = false;

const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const lineWidth = document.getElementById('lineWidth');

let currentColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
updateColorSwatch();

function updateColorSwatch() {
    const swatch = document.createElement('div');
    swatch.style.width = '50px';
    swatch.style.height = '20px';
    swatch.style.backgroundColor = currentColor;
    document.body.appendChild(swatch);
}

function startPainting(event) {
    isPainting = true;
    draw(event);
}

function stopPainting() {
    isPainting = false;
    ctx.beginPath();
}

function draw(event) {
    if (!isPainting) return;

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    ctx.lineWidth = lineWidth.value;
    ctx.lineCap = 'round';
    ctx.strokeStyle = isEraser ? 'white' : currentColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function toggleEraser() {
    isEraser = !isEraser;
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveDrawing() {
    const image = canvas.toDataURL('image/png').replace('image/png', 'image/octet-stream');
    const link = document.createElement('a');
    link.href = image;
    link.download = 'drawing.png';
    link.click();
}

canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopPainting);
canvas.addEventListener('mouseout', stopPainting);

red.addEventListener('input', () => {
    currentColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    updateColorSwatch();
});

green.addEventListener('input', () => {
    currentColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    updateColorSwatch();
});

blue.addEventListener('input', () => {
    currentColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    updateColorSwatch();
});