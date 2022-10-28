const repeatString = function(string, count) {
    let repeatedString = "";

    if (count < 0) {
        return "ERROR";
    }

    let i = 0;
    while (i < count) {
        repeatedString += string;
        i++;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
