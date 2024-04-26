function validateForm() {
    var fname = document.getElementById('fname').value.trim();
    var lname = document.getElementById('lname').value.trim();
    var mobile = document.getElementById('mobile').value.trim();
    var email = document.getElementById('email').value.trim();
    var licence = document.getElementById('licence').value.trim();
    var vehicle = document.getElementById('vehicle').value.trim();
    var vehicleNumber = document.getElementById('vehicle-number').value.trim();
    var city = document.getElementById('city').value.trim();

    if (fname === '') {
        alert('Please enter your first name.');
        return false;
    }

    if (lname === '') {
        alert('Please enter your last name.');
        return false;
    }

    if (mobile === '') {
        alert('Please enter your mobile number.');
        return false;
    }

    if (!(/^\d{10}$/.test(mobile))) {
        alert('Please enter a valid 10-digit mobile number.');
        return false;
    }

    if (email === '') {
        alert('Please enter your email address.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (licence === '') {
        alert('Please enter your licence number.');
        return false;
    }

    if (vehicle === '') {
        alert('Please enter your vehicle name and type.');
        return false;
    }

    if (vehicleNumber === '') {
        alert('Please enter your vehicle number.');
        return false;
    }

    if (city === '') {
        alert('Please enter the city you will drive in.');
        return false;
    }

    return true;
}

function validateEmail(email) {
    // Regular expression for email validation
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
