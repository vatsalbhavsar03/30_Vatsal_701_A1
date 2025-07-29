function isEvenOrOdd(num) {
  if (typeof num !== 'number') {
    throw new Error('Input must be a number');
  }
  return num % 2 === 0 ? 'even' : 'odd';
}

module.exports = isEvenOrOdd;
