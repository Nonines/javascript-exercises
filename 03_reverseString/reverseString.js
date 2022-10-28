const reverseString = function(string) {
    const stringArray = [];

    for (let letter of string) {
        stringArray.push(letter);
    }

    let reversedArray = stringArray.reverse();
    let reversedString = "";

    for (let item of reversedArray) {
        reversedString += item;
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
