// operations
let styles = ['jazz', 'blues'];
styles.push('rock and roll');
styles[Math.floor((styles.length - 1) / 2)] = 'classic';
alert(styles.shift());
styles.unshift('rap', 'reggae');
alert(styles);

// summary of elements
function sumInput() {
    let arr = [];
    let n;

    for (; ;) {
        n = prompt('Enter the number');

        if (n === null || n === '' || !isFinite(n)) break;

        arr.push(+n);
    }

    let sum = 0;

    for (let element of arr) {
        sum += element;
    }
    return sum;
}

alert(sumInput());

// max subarray summary
function getMaxSubSum() {
    let newArr = [];
    let sum = 0;
    let maxSum = 0;

    for (; ;) {
        let i = prompt('Enter a new element (number)');

        if (i === null || i === '' || !isFinite(i)) break;

        newArr.push(+i);
    }

    for (i in newArr) {
        sum += newArr[i];

        sum = Math.max(sum, 0);
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}

alert(getMaxSubSum());