'use strict';

const addTax = (rate, value) => value + rate * value;
console.log(addTax(0.1, 200));

function addTax2(rate) {
  return function(value) {
    return value + value * rate;
  }
};

const addVAT = addTax2(0.23);

console.log(addVAT(100));
