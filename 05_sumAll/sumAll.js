const sumAll = function(numA, numB) {

    if (typeof numA !== "number" || typeof numB !== "number") {
        return "ERROR";
    } else if (numA < 0 || numB < 0) {
        return "ERROR";
    }

    const numArray = [];
    numArray.push(numA, numB);
    numArray.sort(function(a, b){return a - b});

    let start = numArray[0];
    let end = numArray[1];
    let total = 0;

    for (i = start; i <= end; i++) {
        total += i;
    }

    return total;
};

// Do not edit below this line
module.exports = sumAll;
