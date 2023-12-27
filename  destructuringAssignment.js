//destructuring assignment
let user = {
    name: 'John',
    years: 30
  };

let {name, years: age, isAdmin = false} = user;

console.log(name);
console.log(age);
console.log(isAdmin);

//max salary
let salaries = {
    'Mary': 1500,
    'John': 1400,
    'David': 1550,
    'Kate': 1300
};

function topSalary(salaries) {
    let top = 0;
    let topName = null;

    for (let [employeeName, salary] of Object.entries(salaries)) {
        if (top < salary) {
            top = salary;
            topName = employeeName;
        }
    }

    return topName;
}

console.log(topSalary(salaries));