// ? or ||
function checkAge(age) {
    return (age > 18) ? true : confirm("Did parets aprove?");
}

function checkAge(age) {
    return (age > 18) || confirm("Did parets aprove?");
}

// min(a, b)
function min(a, b) {
    return (a > b) ? b : a;
}

// pow(x, n)
let result;

function pow(x, n) {
    result = x ** n;
    return result;
}

//arrow function
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Are you agree?",
    () => alert("You agreed"),
    () => alert("You declined")
);