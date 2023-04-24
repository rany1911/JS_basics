// summary
let a = +prompt('Enter the first number');
let b = +prompt('Enter the second number');

let sum = a + b;

alert(sum);

// enter a number
function readNumber() {
    let n;

    do {
        n = prompt("Enter the number");
    } while (!isFinite(n));

    if (n === null || n === '') {
        return null;
    }

    return +n;
}

alert(`The number is: ${readNumber()}`);

// random from min to max
let min = +prompt("Enter the minimal number");
let max = +prompt("Enter the maximal number");

function random(min, max) {
    return Math.random() * (max - min) + min;
}

alert(`Random number: ${random(min, max)}`);

// random integer from min to max
let minInt = +prompt("Enter the minimal number");
let maxInt = +prompt("Enter the maximal number");

function randomInt(minInt, maxInt) {
    let r = Math.random() * (maxInt + 1 - minInt) + minInt;
    return Math.floor(r)
}

alert(`Random number: ${randomInt(minInt, maxInt)}`);