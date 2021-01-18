//If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

import {
    divide,
    numberify
} from "./utils";

// Find the sum of all the multiples of 3 or 5 below 1000.

// Basic Solution: 
// function isMultipleOfNumber(num: number, target: number): boolean {
//     return (target % num) === 0;
// }

// function main(limit:number): number {
//     let sum = 0;
//     for (let i = 1; i < limit; i++) {
//         if (isMultipleOfNumber(3, i) || isMultipleOfNumber(5, i)) {
//             sum = sum + i;
//         }
//     }
//     return sum;
// }

// console.log(main(1000)); // answer: 233168

// Optimal solution:

function sumOfAllDivisibleBy(num: number, limit: number) {
    const numOfMultiples = numberify(divide(limit, num));
    const sum = numOfMultiples
        .multiply(numOfMultiples
            .add(1)
            .value()
        )
        .multiply(num)
        .divide(2)
        .value()
    return sum;
}

function main(num: number) {
    const limit = num - 1;
    return sumOfAllDivisibleBy(3, limit) + sumOfAllDivisibleBy(5, limit) - sumOfAllDivisibleBy(15, limit);
}

console.log(main(1000)) //233168