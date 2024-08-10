let passwordBox = document.getElementById('password');

const length = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!#$%&()*+,-./:;<=>?@[\]^_{|}~";

const allChars = upperCase + lowerCase + numbers + symbols;

function createPassword () {
    let password = "";
    // Ensure at least one character from each set is included
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    
    // Fill the remaining length of the password
    while( length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    // Shuffle the password to avoid predictable patterns
    password = password.split('').sort(() => 0.5 - Math.random()).join('');
    //This step takes the string, splits it into an array of characters, sorts it randomly, and then joins it back into a string.

    passwordBox.value = password;
    
}

function copyPassword() {
    passwordBox.select();   //Select the Password: Highlight the text in the passwordBox
    document.execCommand("copy");   //Copy the Password: Copy the selected text to the clipboard
}