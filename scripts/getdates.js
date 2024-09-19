const year = new Date().getFullYear();

const lastModified = document.lastModified;


document.querySelector('footer p:first-of-type').textContent += ` ©${year}`;


document.querySelector('footer p:last-of-type').textContent = `Last Modification: ${lastModified}`;
