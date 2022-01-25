const add = function(a,b) {
  return a+b;

};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  let total = 0;
  for (let key in array) {
    total += array[key];
  };
  return total;
	
};

const multiply = function(array) {
  let total = 1;
  for (let key in array) {
    total *= array[key];
  };
  return total;
};

const power = function(a,b) {
	return a**b;
};

const factorial = function(num) {
	let factorial = 1;
  for (i=0;i < num; i++) {
    factorial *= (num-i);
  };
  return factorial;
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
