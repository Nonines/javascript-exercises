const findTheOldest = function(peopleObjArr) {
    const date = new Date();
    const arr = peopleObjArr.sort(function (a, b) {

        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = date.getFullYear();
        } else if (b.yearOfDeath === undefined) {
            b.yearOfDeath = date.getFullYear();
        }

        return (a.yearOfDeath - a.yearOfBirth) - (b.yearOfDeath - b.yearOfBirth);
    });
    return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
