const palindromes = function (string) {
            const alphanumerical = `abcdefghijklmnopqrstuvwxyz1234567890`;
            
            const cleansedString = string
            .toLowerCase()
            .split('')
            .filter(character => alphanumerical.includes(character))
            .join('');

            const reverseString = cleansedString.split('').reverse().join('');

            return reverseString === cleansedString;
        };
// Do not edit below this line
module.exports = palindromes;
