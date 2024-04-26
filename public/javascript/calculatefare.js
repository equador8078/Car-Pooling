function calculateFare(distanceInMeters, ratePer100Meters) {
    // Convert distance to hundreds of meters
    const distanceInHundredsOfMeters = distanceInMeters / 100;

    // Calculate fare
    const fare = distanceInHundredsOfMeters * ratePer100Meters;

    return fare;
}

// Example usage:
const distance = 1500; // meters
const rate = 2; // Rs per 100 meters

const fare = calculateFare(distance, rate);

console.log("Fare for 1500 meters:", fare, "Rs");
