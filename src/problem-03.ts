// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function getLargestPrimeFactor(num:number):number {
    
    return getLastDigit(num);
}

function getLastDigit(num:number):number{
    return num%10;
}

function main() {
    const answer = getLargestPrimeFactor(13195);
    console.log(answer);
}

main();
