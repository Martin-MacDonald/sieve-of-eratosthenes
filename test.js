const primeCalculator = require('.');

test('Expect 10 to return [2, 3, 5, 7]', () => {
  return primeCalculator(10).then((primes) => {
    expect(primes).toHaveLength(4);
    expect(primes).toEqual([2, 3, 5, 7]); 
  });
});

test('Expect 30 to return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]', () => {
  return primeCalculator(30).then((primes) => {
    expect(primes).toHaveLength(10);
    expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]); 
  });
});

test('Expect 100 to return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]', () => {
  return primeCalculator(100).then((primes) => {
    expect(primes).toHaveLength(25);
    expect(primes).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]); 
  });
});