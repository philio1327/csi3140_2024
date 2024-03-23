//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// University of Ottawa                                                                                                                         //
// Assignment 7 - Javascript File                                                                                                               //
// Authors: Philip Anderegg & Benjamin Flynn                                                                                                    //
// Student Numbers: 8191716 & 300106230                                                                                                         //
// Course Name: www Structures, Techniques & Standards                                                                                          //
// Course Code: CSI 3140                                                                                                                        //
// Professor: Iluju Kiringa                                                                                                                     //
// Due Date: March 23rd, 2024                                                                                                                //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Questions: 16.7
/////////////////////////////////////////////////////////////// 16.7 /////////////////////////////////////////////////////////////////////////////
function loadXMLDoc(filename) {
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest();
    } else { // For IE5 and IE6
        xhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xhttp.open("GET", filename, false);
    xhttp.send();
    return xhttp.responseXML;
}
document.addEventListener('DOMContentLoaded', function() {
    // Function to validate email format
    function isValidEmail(email) {
        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to check if email is in the forbidden list
    function isForbiddenEmail(email) {
        // Dummy list of forbidden emails (replace with actual list)
        let xmlDoc = loadXMLDoc("blocked_emails.xml");
        let blockedEmails = xmlDoc.getElementsByTagName("email");
        for (let i = 0; i < blockedEmails.length; i++){
            if (blockedEmails[i].childNodes[0].nodeValue === email){
                return true;
            }
        }
        return false;
    }

    // Function to display error message
    function displayErrorMessage(message) {
        // You can customize how the error message is displayed
        alert(message);
    }

    // Function to handle form submission
    function submitForm(event) {
        // Get form data
        const formData = new FormData(event.target);

        // Perform client-side validation
        const name = formData.get('name');
        const email = formData.get('email');
        const comments = formData.get('comments');

        if (!name.trim()) {
            displayErrorMessage('Please enter your name.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        if (!comments.trim()) {
            displayErrorMessage('Please enter your comments.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        if (!isValidEmail(email)) {
            displayErrorMessage('Please enter a valid email address.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        if (isForbiddenEmail(email)) {
            displayErrorMessage('Sorry, your email address is not allowed to post feedback.');
            event.preventDefault(); // Prevent form submission
            return;
        }

        // If all validations pass, construct the message for the alert dialog
        const alertMessage = `Name: ${name}\nEmail: ${email}\nComments: ${comments}`;

        // Show the alert dialog with the form data
        alert(alertMessage);

        // Reload the webpage after the alert dialog is closed
        location.reload();
    }

    // Attach event listener for form submission
    const feedbackForm = document.querySelector('form');
    feedbackForm.addEventListener('submit', submitForm);
});

