const removeFromArray = function(arr, ...args) {
    for (let arg of args) {
        const indexToRemove = arr.indexOf(arg);
        if (indexToRemove > -1) {
            arr.splice(indexToRemove, 1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
