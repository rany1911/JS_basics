// if instead of switch
let browser = prompt("Change your browser", '');

if (browser == "Edge") {
    alert("You've got the Edge!");
} else if (browser == "Chrome" || browser == "Firefox" || browser == "Safari" || browser == "Opera") {
    alert("Okay we support these browsers too");
} else {
    alert("We hope that this page looks ok!")
}

// switch instead of if
const number = +prompt("Enter an number between 0 and 3", '');

switch (number) {
    case 0:
        alert("You entered 0");
        break;
    case 1:
        alert("You entered 1");
        break;
    case 2:
    case 3:
        alert("You entered 2 or 3");
        break;
    default:
        alert("This number is grater than we need")
}