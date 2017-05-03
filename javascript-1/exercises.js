function multiplyByTen(num) {
  var product = num * 10;
  return product;
}

function subtractFive(num) {
  var subtract = num - 5;
  return subtract;
}

function areSameLength(str1, str2) {
  var length1 = str1.length;
  var length2 = str2.length;

  if (length1 === length2) {
    return true;
  }
  else {
    return false;
  }
}

function areEqual(x, y) {
  if (x === y) {
    return true;
  }
    return false;
}

function lessThanNinety(num) {
  if (num < 90) {
    return true;
  }
    return false;
}

function greaterThanFifty(num) {
  if (num > 50) {
    return true;
  }
    return false;
}

function add(x, y) {
  var addition = x + y;
  return addition;
}

function subtract(x, y) {
  var subtract = x - y;
  return subtract;
}

function divide(x, y) {
  var division = x/y;
  return division;
}

function multiply(x, y) {
  var multiply = x * y;
  return multiply;
}

function getRemainder(x, y) {
  var remainder = x % y;
  return remainder;
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
}
  return false;
}

function isOdd(num) {
  if (num % 2 === 1) {
    return true;
  }
    return false;
}

function square(num) {
  return Math.pow(num, 2);
}

function cube(num) {
  return Math.pow(num, 3);
}

function raiseToPower(num, exponent) {
  return Math.pow(num, exponent);
}

function roundNumber(num) {
  return Math.round(num);
}

function roundUp(num) {
  return Math.ceil(num);
}

function addExclamationPoint(str) {
  return str + '!';
}

function combineNames(firstName, lastName) {
  return firstName + ' ' + lastName;
}

function getGreeting(name) {
  return 'Hello' + ' ' + name + '!';
}

function getRectangleArea(length, width) {
  return length * width;
}

function getTriangleArea(base, height) {
  return base * (height / 2);
}

function getCircleArea(radius) {
  return Math.round(Math.PI * Math.pow(radius, 2));
}

function getRectangularPrismVolume(length, width, height) {
  return length * width * height;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  multiplyByTen: multiplyByTen,
  subtractFive: subtractFive,
  areSameLength: areSameLength,
  areEqual: areEqual,
  lessThanNinety: lessThanNinety,
  greaterThanFifty: greaterThanFifty,
  add: add,
  subtract: subtract,
  divide: divide,
  multiply: multiply,
  getRemainder: getRemainder,
  isEven: isEven,
  isOdd: isOdd,
  square: square,
  cube: cube,
  raiseToPower: raiseToPower,
  roundNumber: roundNumber,
  roundUp: roundUp,
  addExclamationPoint: addExclamationPoint,
  combineNames: combineNames,
  getGreeting: getGreeting,
  getRectangleArea: getRectangleArea,
  getTriangleArea: getTriangleArea,
  getCircleArea: getCircleArea,
  getRectangularPrismVolume: getRectangularPrismVolume
};
