"use strict";

var userPoints = 0;

alert("Welcome to Khoa's first webpage! You're going to learn a little more about him.");

//  Collecting user's name to make the game more personal
var user = prompt("What's your name?")
console.log("user's name is: " + user);

// Seeing if user is ready to play the game
var answer1 = prompt("WELCOME, " + user + ", TO TRIVIAL PURSUIT: KHOA EDITION!!!! Do you think you know Khoa very well?" , "Respond with Yes or No").toLowerCase();
console.log("answer to question 1 is: " + answer1);

//Starting the loop to wait for the user to be ready to play the game
if (answer1 === "yes" || answer1 === "y") {
    answer1 = 1;
} else {
    alert("Okay, " + user + ", I'll give you some time to stalk Khoa on Facebook or Instagram.");
    answer1 = 0;
} while (answer1 !== 1) {
    var answer2 = prompt("Alright, you've done your research. Are you ready now, " + user + "?", "Respond with Yes or No" ).toLowerCase();
    console.log("answer to question 2 is: " + answer2);
    if (answer2 === "y" || answer2 === "yes") {
        answer1 = 1;
        break;
    } else {
        answer2 = 0;
    } while (answer2 !== 1) {
        alert(user + "... You are taking too long. Hurry up.");
        var answer3 = prompt("Are you ready now?", "Respond with Yes or No").toLowerCase();
        console.log("answer to question 3 is: " + answer3);
        if (answer3 === "yes" || answer3 === "y") {
            answer2 = 1;
            answer1 = 1;
        } else {
            answer2 = 0;
        }
    }
}
// End of loop. The user is now ready to play the game
alert("Right on! Let's see how well you know Khoa, " + user + ". The Grand Prize: you can exchange 7 points for a brand new Tesla!");

// Question 1
var answer4 = prompt("First question: What is Khoa's favorite food?").toLowerCase();
console.log("answer to question 4 is: " + answer4);

if (answer4 === "pizza") {
    userPoints++;
    alert("Correctomundo! Everyone's favorite food should be pizza. You now have " + userPoints + " point(s)");
} else {
    alert("Ouch. If you got that question wrong, good luck with the next questions. The correct answer is pizza. You now have " + userPoints + " point(s)");
}
// Question 2
var answer5 = prompt(" Question 2: What is Khoa's favorite TV show?" , "HINT: It's better than The Office").toLowerCase();
console.log("answer to question 5 is: " + answer5); 

if (answer5 === "parks and rec" || answer5 === "parks and recreation" || answer5 === "parks & recreation" || answer5 === "parks & rec") {
    userPoints++;
    alert("I knew you could do it, " + user + "! You now have " + userPoints + " point(s)!");
} else {
    alert("I thought you would've gotten this one right, " + user + ". I'm losing my faith in you. Everyone knows, hands down, Parks and Recreation is better than The Office. You now have " + userPoints + " point(s).");

}
// Question 3
var answer6 = prompt("We're moving on to question 3 now. Does Khoa own more than 20 pairs of shoes?" ,"Respond with Yes or No").toLowerCase();
console.log("answer to question 6 is: " + answer6);

if (answer6 === "yes" || "y") {
    userPoints++;
    alert("Yeah it's shocking. I think he has a problem.");
} else {
    alert("Actually, " + user + ", you'd be surprised. I think he has a problem.");
}

// Half way mark
alert("You're half way there! you now have " + userPoints + " point(s).");

// Question 4

var answer7 = prompt("Question 4: Was Khoa born in Vietnam?").toLowerCase();
console.log("answer to question 7 is: " + answer7);



