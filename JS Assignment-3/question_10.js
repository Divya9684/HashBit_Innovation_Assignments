function reverseString(input) {
    return input.split('').reverse().join('');
}

let input = "Hello";
let reversed = reverseString(input);

console.log(`Input: ${input}`);
console.log(`Reversed: ${reversed}`);
