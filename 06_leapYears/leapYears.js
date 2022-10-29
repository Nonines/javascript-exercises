const leapYears = function(year) {
    if (year % 400 === 0) {
        return true;  // is leap year

    } else if (year % 100 === 0) {
        return false;  // is not leap year

    } else if (year % 4 === 0) {
        return true; // is leap year
    } else {
        return false; // is not leap year
    }
};

// Do not edit below this line
module.exports = leapYears;
