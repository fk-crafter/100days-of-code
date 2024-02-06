function updateTextInput(val) {
    document.getElementById("passwordLengthDisplay").textContent = val;
}

function generatePassword() {
    let passwordLength = document.getElementById("passwordLength").value;
    let passwordOutput = document.getElementById("passwordOutput");

    if (passwordLength < 4 || passwordLength > 30) {
        alert("Please enter a password length between 4 and 30 characters.");
        return;
    }

    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    passwordOutput.textContent = password;
}
