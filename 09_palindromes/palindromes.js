const palindromes = function (str) {
    
const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();


for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
    if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
        return false;
    }
}
return true;

};

// Do not edit below this line
module.exports = palindromes;
