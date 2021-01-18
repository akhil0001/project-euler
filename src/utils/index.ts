import { hrtime } from "process";

export const pipe = (...fns: ((...args: unknown[]) => void)[]) => (arg: unknown): unknown => fns.reduce((value, fn) => fn(value), arg);

export const divide = (x: number, y: number): number => Math.floor(x / y);

export const multiply = (...numbers: number[]): number => numbers.reduce(
    (prev, acc) => acc * prev, 1
);

interface INumberify {
    divide: (divisor: number) => INumberify;
    multiply: (...numbers: number[]) => INumberify;
    add: (...numbers: number[]) => INumberify;
    subtract: (...numbers: number[]) => INumberify;
    value: () => number;
}

export function numberify(num: number): INumberify {

    const val = num;

    function divide(divisor: number) {
        const result = Math.floor(val / divisor);
        return numberify(result);
    }

    function value() {
        return val;
    }

    function multiply(...numbers: number[]): INumberify {
        const result = numbers.reduce((prev, acc) => prev * acc, val)
        return numberify(result);
    }

    function add(...numbers: number[]): INumberify {
        const result = numbers.reduce((prev, acc) => prev + acc, val);
        return numberify(result);
    }

    function subtract(...numbers: number[]): INumberify {
        const result = numbers.reduce((prev, acc) => prev - acc, val);
        return numberify(result);
    }

    return {
        divide,
        multiply,
        add,
        subtract,
        value
    };
}

export function isEven(num: number):boolean {
    return num % 2 === 0;
}

export function EuclidPerf(): {start:() => void,end:() => void} {
    let startId = null;
    function start():void {
        startId = hrtime();
    }

    function end():void {
     const timeTaken = hrtime(startId); 
     log(timeTaken)
    }

    function log(timeTaken) {
        if(timeTaken == null) {
            console.log('Timer not started')
        }
        else {
            console.log(`${timeTaken[0]} seconds-${timeTaken[1]} milliseconds`);
        }
    }
    return {
        start,
        end
    }
}