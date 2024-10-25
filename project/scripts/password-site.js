function generatePassword() {
    const length = document.getElementById("length").value;
    const uppercase = document.getElementById("uppercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const special = document.getElementById("special").checked;

    let characters = 'abcdefghijklmnopqrstuvwxyz';
    if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (numbers) characters += '0123456789';
    if (special) characters += '!@#$%^&*()';

    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("passwordDisplay").textContent = password;

}

function copyPassword() {
    const passwordText = document.getElementById("passwordDisplay").textContent;
    navigator.clipboard.writeText(passwordText).then(() => {
        alert("Password copied to clipboard!");
    });
}


