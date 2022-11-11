const palindromes = function (input) {
    const cleanInput = input.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let inputStringArr = [];

    for (let char of cleanInput) {
        inputStringArr.push(char);
    }

    const reverseString = inputStringArr.reverse().join("");

    if (cleanInput === reverseString) {
        return true;
    }
    return false;
};

(palindromes("A car, a man, a maraca."))

// Do not edit below this line
module.exports = palindromes;
