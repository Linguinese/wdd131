// Set current year in footer
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();

// Set last modified date
const lastModifiedSpan = document.getElementById('lastModified');
lastModifiedSpan.textContent = document.lastModified;
