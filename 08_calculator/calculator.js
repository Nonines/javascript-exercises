const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
  let total = 0;
  for (let num of arr) {
    total += num;
  }
  return total;
};

const multiply = function(args) {
  let total = 1;
  for (let arg of args) {
    total *= arg;
  }
  return total;
};

const power = function(num, power) {
  return num ** power;
};

const factorial = function(num) {
  fact = 1;
  for (i=num; i>0; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
