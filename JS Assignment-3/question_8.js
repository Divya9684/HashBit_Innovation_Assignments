function repeatedSumOfDigits(num) {
    let digits = num.toString().split('').map(Number);

    let sum = digits.reduce((acc, digit) => acc + digit, 0);

    if (sum < 10) {
        return sum;
    }

    return repeatedSumOfDigits(sum);
}

let number = 456;
let result = repeatedSumOfDigits(number);

console.log(`The repeated sum of digits of ${number} is ${result}`);
