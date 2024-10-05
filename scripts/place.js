function calculateWindChill(temperature, windSpeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
}

function displayWindChill() {
    const temperature = 30; 
    const windSpeed = 5; 
    const windchillElement = document.getElementById('windchill');

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChillFactor = calculateWindChill(temperature, windSpeed);
        windchillElement.textContent = `Wind Chill: ${windChillFactor.toFixed(2)}°F`;
    } else {
        windchillElement.textContent = 'Wind Chill: N/A';
    }
}


function updateFooter() {
    const currentYearElement = document.getElementById('current-year');
    const lastModifiedElement = document.getElementById('last-modified');

    currentYearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;
}


window.onload = function() {
    displayWindChill();
    updateFooter();
};
