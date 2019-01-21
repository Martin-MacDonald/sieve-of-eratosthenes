const primeCalculator = require('.');

test(`Expect 30 to return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]`, () => {
  return primeCalculator(30).then((primes) => {
    expect(primes).toHaveLength(10);
    expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]); 
  });
});