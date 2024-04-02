//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// University of Ottawa                                                                                                                         //
// Assignment 8 - Javascript File                                                                                                               //
// Authors: Philip Anderegg & Benjamin Flynn                                                                                                    //
// Student Numbers: 8191716 & 300106230                                                                                                         //
// Course Name: www Structures, Techniques & Standards                                                                                          //
// Course Code: CSI 3140                                                                                                                        //
// Professor: Iluju Kiringa                                                                                                                     //
// Due Date: April 7th, 2024                                                                                                                //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Questions: 19.4, 19.7
/////////////////////////////////////////////////////////////// 19.7 /////////////////////////////////////////////////////////////////////////////
window.onload = function() {
    // Make an AJAX request to fetch the contents of states.php
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Split the response by newline character to get individual lines
            var lines = this.responseText.split('\n');
            
            // Display each line as a paragraph element
            var contentContainer = document.getElementById("content-container");
            lines.forEach(function(line) {
                var paragraph = document.createElement("p");
                paragraph.textContent = line;
                contentContainer.appendChild(paragraph);
            });
        }
    };
    xhttp.open("GET", "states.php", true);
    xhttp.send();
};