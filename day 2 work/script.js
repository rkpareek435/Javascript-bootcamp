/* Assignment 1:
Write a JavaScript function that takes a number as a parameter and prints whether it's positive, negative, or zero. */

// Solution:

function number(num) {
    if (num > 0) {
        console.log("The number is positive");
    }
    else if (num == 0) {
        console.log("The number is zero");
    }
    else {
        console.log("The number is negative");
    }
}
number(0)

/* Assignment 2:
Write a JavaScript function that takes a positive integer as a parameter and calculates its factorial using a for loop. The factorial of a number N is the product of all positive integers less than or equal to N. */

// Solution:

function factorialOfNumber(n) {
    if (n < 0 || n === 0) {
        console.log('n must be a positive integer');
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(factorialOfNumber(5));

/* Assignment 3:
Write a JavaScript function that takes two numbers as parameters and returns the larger one. */

// Solution:

function largest(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(largest(10, 20));

/* Assignment 4:
Write a JavaScript function that takes a string as a parameter and determines whether it's a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward (ignoring spaces, punctuation, and capitalization). */

// Solution:


function codeCaro(str) {
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanStr.split('').reverse().join('');
    return cleanStr === reversedStr;
}
console.log(codeCaro("racecar"));           
console.log(codeCaro("A man, a plan, a canal, Panama")); 
console.log(codeCaro("hello"));             
console.log(codeCaro("level"));             
console.log(codeCaro("Step on no pets"));   


/* Assignment 5:
Write a JavaScript function that takes a positive integer as a parameter and prints all the prime numbers less than or equal to that integer. A prime number is a natural number greater than 1 that is not a product of two smaller natural numbers. */

// Solution:

function printPrime() {
    const lowerNumber = 1;
    const higherNumber = 11;

    console.log(`The prime numbers between ${lowerNumber} and ${higherNumber} are:`);

    for (let i = lowerNumber; i <= higherNumber; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {
                flag = 1;
                break;
            }
        }
        if (i > 1 && flag == 0) {
            console.log(i);
        }
    }
}
printPrime()

/* Assignment 6:
Write a JavaScript function that simulates a simple calculator. The function should take two numbers and an operator (+, -, *, or /) as parameters and perform the corresponding operation. */

// Solution:

function calculate(number1, operator, number2) {

    let result;
    if (operator == '+') {
        result = number1 + number2;
    }
    else if (operator == '-') {
        result = number1 - number2;
    }
    else if (operator == '*') {
        result = number1 * number2;
    }
    else {
        result = number1 / number2;
    }
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}
const number1 = 200;
const operator = "/"; // operator must be a string
const number2 = 300;
calculate(number1, operator, number2);

/* Assignment 7:
Write a JavaScript function that takes a string as a parameter and counts the number of vowels (a, e, i, o, u) in the string. */

// Solution:

function countVowels(str) {
    const vowels = ["a", "e", "i", "o", "u"];
    let count = 0;

    for (const characters of str) {
        if (vowels.includes(characters.toLowerCase())) {
            count++;
        }
    }

    return count;
}
console.log(countVowels("hello world"));

/* Assignment 8:
Write a JavaScript function that takes a positive integer as a parameter and checks if it's a perfect number. A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself. */

// Solution:



function isPerfectNumber(num) {
    if (num <= 0) {
    return false;
    }

    let sum = 0;
    for (let i = 1; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
        sum += i;
    }
    }

    return sum === num;
}  
console.log(isPerfectNumber(6));    // Output: true (6 = 1 + 2 + 3)
console.log(isPerfectNumber(28));   // Output: true (28 = 1 + 2 + 4 + 7 + 14)
console.log(isPerfectNumber(12));   // Output: false (12 != 1 + 2 + 3 + 4 + 6)
console.log(isPerfectNumber(496));  // Output: true (496 = 1 + 2 + 4 + 8 + 16 + 31 + 62 + 124 + 248)


/* Assignment 9:
Write a JavaScript function that takes a number as a parameter and prints the Fibonacci series up to that number. The Fibonacci series is a sequence of numbers in which each number is the sum of the two preceding ones. */

// Solution:

// program to generate fibonacci series up to n terms

function fibonacci(number) {
    let n1 = 0;
    let n2 = 1;
    let nextTerm;

    console.log('Fibonacci Series:');

    for (let i = 1; i <= number; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}
fibonacci(10)

/* Assignment 10:
Write a JavaScript function that takes a positive integer as a parameter and prints its multiplication table up to 10. */

// Solution:

function multiplication(num) {
    for (let i = 1; i <= 10; i++) {
        let result = i * num;
        console.log(`${num} * ${i} = ${result}`);
    }
}
multiplication(10)
