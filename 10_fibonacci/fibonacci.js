const fibonacci = function(n) {
    let a, b, temp;
    const arr = [];

    a = 1;
    b = 1;

    while (arr.length < n) {
        arr.push(a);
        temp = a + b;
        a = b;
        b = temp;
    }

    if (n < 1) {
        return "OOPS";
    }
    return arr[Number(n) - 1];
};

// Do not edit below this line
module.exports = fibonacci;
