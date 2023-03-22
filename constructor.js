// calculator
function Calculator() {
    this.read = function() {
        this.x = +prompt("Enter the first number", "");
        this.y = +prompt("Enter the second number", "");
    },

    this.sum = function() {
        let summary = this.x + this.y;
        return summary;
    },

    this.mul = function() {
        let multiply = this.x * this.y;
        return multiply;
    }
}

let firstObject = new Calculator();
firstObject.read();

alert(firstObject.sum());
alert(firstObject.mul());

let secondObject = new Calculator();
secondObject.read();

alert(secondObject.sum());
alert(secondObject.mul());

// summary
function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt("Enter new value", 0);
        return this.value;
    };
}

let accum = new Accumulator(1);

accum.read();
alert(accum.value);