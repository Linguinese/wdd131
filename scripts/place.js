document.addEventListener("DOMContentLoaded", function () {
    const temperature = 15; 
    const windSpeed = 14;  

    function calculateWindChill(temp, windSpeed) {
        return (
            13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)
        ).toFixed(2);
    }

    function displayWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temp, windSpeed);
            document.querySelector(".weather ul").innerHTML += `<li>Wind Chill: ${windChill} °C</li>`;
        } else {
            document.querySelector(".weather ul").innerHTML += `<li>Wind Chill: N/A</li>`;
        }
    }

 
    displayWindChill(temperature, windSpeed);

    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = `Current Year: ${currentYear}`;

    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;
});
