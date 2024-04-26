// Add an event listener to the form submission
document.getElementById("detail").addEventListener("submit", function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the form data
    const formData = {
        firstName: document.getElementById("fname").value,
        lastName: document.getElementById("lname").value,
        vehicleName: document.getElementById("vehicle").value,
        vehicleNumber: document.getElementById("vehicle-number").value
    };

    // Update the driver-details div on the same page
    const driverDetailsElement = document.getElementById("driver-details");
    driverDetailsElement.innerHTML = `
        <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
        <p><strong>Vehicle Name:</strong> ${formData.vehicleName}</p>
        <p><strong>Vehicle Number:</strong> ${formData.vehicleNumber}</p>
    `;
});