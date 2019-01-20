module.exports = (number) => {
  return new Promise((resolve, reject) => {
    if (isNaN(number)) {
      reject();
    }
    if (!Number.isInteger(number) || number < 2) {
      reject();
    }
    const primes = [2];
    if (number === 2) return primes;
    for (let i = 3; i <= number; i += 2) {
      let prime = true;
      let halfValue = Math.floor(i / 2);
      for (let j = 3; j <= halfValue; j += 2) {
        if (i % j === 0) {
          prime = false;        
          break;
        }
      }
      if (prime) {
        primes.push(i);
      }
    }
    resolve(primes);
    // return primes;
  });
}