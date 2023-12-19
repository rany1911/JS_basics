//sum of object propertys
let salaries = {
    "Mary": 1500,
    "John": 1400,
    "David": 1550,
    "Kate": 1300
}

function sumSalaries(salaries) {
    let sum = 0;

    for (let value of Object.values(salaries)) {
        sum += value;
    }

    return sum;
}

console.log(sumSalaries(salaries));

//counting the number of properties of an object
function count(salaries) {
    return Object.keys(salaries).length;
  }
  
  console.log(count(salaries));