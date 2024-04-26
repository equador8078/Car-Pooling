function validatesignupForm() {
    var fname = document.getElementById('fname').value.trim();
    var lname = document.getElementById('lname').value.trim();
    var email = document.getElementById('gmail-id').value.trim();
    var password = document.getElementById('new-password').value.trim();
    var confirmPassword = document.getElementById('confirm-password').value.trim();

    if (fname === '') {
        alert('Please enter your first name.');
        return false;
    }

    if (lastName.trim() === '') {
        alert('Please enter your last name.');
        return;
    }

    if (email.trim() === '' || !email.includes('@')) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.trim().length < 8) {
        alert('Password must be at least 8 characters long.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }
    return true;
}

// Event listener for form submission
document.getElementById('signup-form').addEventListener('submit', function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Call the validateForm function before submitting
    if (validateForm()) {
        // If all validations pass, submit the form
        this.submit();
    }
});