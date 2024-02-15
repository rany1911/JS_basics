//sum to a given
//cycle
function sumTo(n) {
    let sum = 0;

    for (let i; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumTo(11));

//recursion
function sumTo(n) {
    return (n == 1) ? n : (n + sumTo(n - 1));
}

console.log(sumTo(11));

//geometric progression
function sumTo(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo(11));

//factorial
function factorial(n) {
    return (n == 1) ? n : (n * factorial(n - 1));
}

console.log(factorial(5));

//Fibonacci numbers
function fib(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(fib(7));

function fib(n) {
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }

    return b;
}

console.log(fib(7));

//singly linked list output
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};

function printList(list) {
    let sll = list;

    while (sll) {
        console.log(sll.value);
        sll = sll.next;
    }
}

console.log(printList(list));

function printList(list) {
    console.log(list.value);

    if (list.next) {
        printList(list.next);
    }
}

console.log(printList(list));

//reversed singly linked list output
function printReversedList(list) {
    if (list.next) {
        printReversedList(list.next);
    }

    console.log(list.value);
}

console.log(printReversedList(list));

function printReversedList(list) {
    let arr = [];
    let sll = list;

    while(sll) {
        arr.push(sll.value);
        sll = sll.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
  }
  
  console.log(printReversedList(list));