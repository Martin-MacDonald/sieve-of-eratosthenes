const primeCalculator = require('.');

test(`Expect 30 to return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`, () => {
  primeCalculator(30).then((result) => {
    excpect(result).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
});