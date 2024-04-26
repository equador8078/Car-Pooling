// Define latitude and longitude coordinates
const latitude = 23.237560;
const longitude = 72.647781;

// Initialize Google Map
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: { lat: latitude, lng: longitude }
    });

    // Add Marker
    const marker = new google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        title: "Current location"
    });

    // Add InfoWindow
    const infoWindow = new google.maps.InfoWindow({
        content: "Current location"
    });

    marker.addListener("click", () => {
        infoWindow.open(map, marker);
    });
}
