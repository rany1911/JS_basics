let login = prompt("Who are you?", '');

if (login === "Admin") {

   let password = prompt("Give me your pass", '');

    if (password === "I'm_in_charge") {
        alert("Nice to see you!");
   } else if (password === '' || password === null) {
        alert("Cancellation");
   } else {
        alert("Wrong pass");
   }
   
} else if (login === '' || login === null) {
    alert("Cancellation");
} else {
    alert("You're stranger");
}