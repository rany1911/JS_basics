// even numbers
let i = 0;

for (i; i < 11; i++) {

    if (i % 2 == 0) {
        alert(i);
    } else {
        continue;
    }
}

// while cycle
while (i < 3) {
    alert(`number ${i}!`);
    i++;
}

// endless cycle while int <= 100 or null or empty string
let newInt;

while (newInt = prompt("Enter an integer grater than 100", '')) {

    if (newInt <= 100) {
    newInt = prompt("Enter an integer grater than 100", '');
    } else {
        break;
    }
}

// prime numbers
let n = 13;

nextInt:
for (i = 2; i <= n; i++) {

    for (let x = 2; x < i; x++) {
        if (i % x == 0) continue nextInt;
    }

    alert(i);
}