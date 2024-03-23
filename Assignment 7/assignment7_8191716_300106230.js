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
        const forbiddenEmails = ["forbidden@example.com", "banned@example.com"];
        return forbiddenEmails.includes(email);
    }

    // Function to display error message
    function displayErrorMessage(message) {
        // You can customize how the error message is displayed
        alert(message);
    }

    // Function to handle form submission
    function submitForm(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        const formData = new FormData(event.target);

        // Perform client-side validation
        const name = formData.get('name');
        const email = formData.get('email');
        const comments = formData.get('comments');

        if (!name.trim()) {
            displayErrorMessage('Please enter your name.');
            return;
        }

        if (!comments.trim()) {
            displayErrorMessage('Please enter your comments.');
            return;
        }

        if (!isValidEmail(email)) {
            displayErrorMessage('Please enter a valid email address.');
            return;
        }

        if (isForbiddenEmail(email)) {
            displayErrorMessage('Sorry, your email address is not allowed to post feedback.');
            return;
        }

        // If all validations pass, you can proceed with Ajax submission
        // Here, you can use XMLHttpRequest or fetch API to submit the form data

        // Example using fetch API
        fetch('http://www.deitel.com', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            // Handle response as needed
            if (response.ok) {
                alert('Feedback submitted successfully!');
                // Redirect user to the specified page
                window.location.href = formData.get('redirect');
            } else {
                throw new Error('Failed to submit feedback.');
            }
        })
        .catch(error => {
            // Handle errors
            console.error('Error:', error);
            alert('Failed to submit feedback. Please try again later.');
        });
    }

    // Attach event listener for form submission
    const feedbackForm = document.querySelector('form');
    feedbackForm.addEventListener('submit', submitForm);
});