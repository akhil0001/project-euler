// n! means n × (n − 1) × ... × 3 × 2 × 1

// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

// Find the sum of the digits in the number 100!

const { pipe } = require('./utils');

const bigIntFactorial = (num) => num === 0n ? 1n : BigInt(num) * BigInt(bigIntFactorial(BigInt(num) - 1n));

const bigIntSumOfDigits = (num) => BigInt(num) === 0n ? 0n : (BigInt(num) % 10n) + BigInt(bigIntSumOfDigits((BigInt(num) / 10n)));


const sumOfDigitsOfFactorial = pipe(bigIntFactorial, bigIntSumOfDigits);

console.log(sumOfDigitsOfFactorial(100)); // 648n which is same as 648