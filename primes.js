function getPrimes() {
  let arr = [2];
  let isPrime = true;
  for (let i = 3; i < 100000; i++) {
    isPrime = true;
    for (j = 0; j < arr.length; j++) {
      if (i % arr[j] === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      arr.push(i);
    }
  }
  return arr;
}

function getPrimes2() {
  let dirty = [];
  let primes = [2];
  let raw = [];

  for (let i = 3; i < 100000; i++) {
    dirty.push(i);
  }

  while (dirty.length > 0) {
    for (let i = 0; i < dirty.length; i++) {
      if (dirty[i] % primes[primes.length - 1] !== 0) {
        raw.push(dirty[i]);
      }
    }
    dirty = raw;
    let prime = dirty.shift();
    primes.push(prime);
    raw = [];
  }
  return primes;
}

function getPrimes3() {
  let dirty = [];
  let primes = [2];

  for (let i = 3; i < 100000; i++) {
    dirty.push(i);
  }

  while (dirty.length > 0) {
    dirty = dirty.filter(el => el % primes[primes.length - 1] !== 0);
    let prime = dirty.shift();
    primes.push(prime);
  }
  return primes;
}

//console.log(getPrimes());
// console.log(getPrimes3());

module.exports = { getPrimes, getPrimes2, getPrimes3 };
