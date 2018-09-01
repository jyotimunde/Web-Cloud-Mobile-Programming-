// User will select rock paper or scissors
var userChoice = prompt("Select rock, paper or scissors");
window.alert("You have selected-" + userChoice );
// Computer will give one there input- select is computer choice here
var select = Math.random();
if (select < 0.32) {
    select == "rock";
} else if(select <= 0.62) {
    select = "paper";
} else {
    select = "scissors";
}
// It will show us what computer has selected
window.alert("Computer-" + select);
// Now let us compare the computer and user choice
var compare = function(ch1,ch2) {
    if (ch1 === ch2) {
        return "It is a tie!";
    }
    if (ch1 === "rock") {
        if (ch2 === "scissors") {
            // rock will win
            return "You Won";
        } else {
            // paper will win
            return "You lose";
        }
    }
    if (ch1 === "paper") {
        if (ch2 === "rock") {
            // paper will win
            return "You Won";
        } else {
            // scissors will win
            return "You lose";
        }
    }
    if (ch1 === "scissors") {
        if (ch2 === "rock") {
            // rock will win
            return "You lose";
        } else {
            // scissors will win
            return "You Won";
        }
    }
};
var results = compare(userChoice,select);// now compare the results for computer and user
window.alert("Here is the result- " + results); // it will show us the output
