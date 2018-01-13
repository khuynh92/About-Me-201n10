'use strict';

var userPoints = 0;

alert('Welcome to Khoa\'s first webpage! You\'re going to learn a little more about him.');

//  Collecting user\'s name to make the game more personal
var user = prompt('What\'s your name?');
console.log('user\'s name is: ' + user);

// Seeing if user is ready to play the game
var answer1 = prompt('WELCOME, ' + user + ', TO TRIVIAL PURSUIT: KHOA EDITION!!!! Do you think you know Khoa very well?' , 'Respond with Yes or No').toLowerCase();
console.log('answer to question 1 is: ' + answer1);

//Starting the loop to wait for the user to be ready to play the game
if (answer1 === 'yes' || answer1 === 'y') {
  answer1 = 1;
} else {
  alert('Okay, ' + user + ', I\'ll give you some time to stalk Khoa on Facebook or Instagram.');
  answer1 = 0;
} while (answer1 !== 1) {
  var answer2 = prompt('Alright, you\'ve done your research. Are you ready now, ' + user + '?', 'Respond with Yes or No' ).toLowerCase();
  console.log('answer to question 2 is: ' + answer2);
  if (answer2 === 'y' || answer2 === 'yes') {
    answer1 = 1;
    break;
  } else {
    answer2 = 0;
  } while (answer2 !== 1) {
    alert(user + '... You are taking too long. Hurry up.');
    var answer3 = prompt('Are you ready now?', 'Respond with Yes or No').toLowerCase();
    console.log('answer to question 3 is: ' + answer3);
    if (answer3 === 'yes' || answer3 === 'y') {
      answer2 = 1;
      answer1 = 1;
    } else if (answer3 === 'no' || answer3 === 'n') {
      answer2 = 0;
    } else {
      // Typo error check
      alert('You must answer with Yes or No.');
    }
  }
}
// End of loop. The user is now ready to play the game
alert('Right on! Let\'s see how well you know Khoa, ' + user + '. The Grand Prize: you can exchange 10 points for a brand new Tesla!');

// Question 1
while (answer4 !== 'yes' || answer4 !== 'y' || answer4 !== 'no' || answer4 !== 'n') {
  var answer4 = prompt('Question 1: Was Khoa born in Vietnam?', 'Respond with Yes or No').toLowerCase();
  console.log('answer to trivia 1 is: ' + answer4);
  if (answer4 === 'yes' || answer4 === 'y') {
    alert('Incorrect! Khoa was actually born and raised in Washington!');
    break;
  } else if (answer4 === 'no' || answer4 === 'n') {
    userPoints++;
    alert('Correct! You got your first point! One step closer to your Tesla!');
    break;
  } else {
    // Typo error check
    alert('you must answer with a Yes or No.');
  }
}

// Score update
alert('You now have ' + userPoints + ' point(s)! Let\'s move on to the next question.');

// Question 2
while (answer5 !== 'yes' || answer5 !== 'y' || answer5 !== 'no' || answer5 !== 'n') {
  var answer5 = prompt('Question 2: Does Khoa love mushrooms?', 'Respond with Yes or No').toLowerCase();
  console.log('answer to trivia 2 is: ' + answer5);
  if (answer5 === 'yes' || answer5 === 'y') {
    alert('Yeah no.......sorry. Mushrooms are gross. Why would you want ot eat fungi!?!');
    break;
  } else if (answer5 === 'no' || answer5 === 'n') {
    userPoints++;
    alert('That\'s right! There is no other food more unappealing than mushrooms. Why would you want to eat fungi!?!');
    break;
  } else {
    // Typo error check
    alert ('you must answer with a Yes or No.');
  }
}

// Score update
alert('You currently have ' + userPoints + ' point(s)! Keep going!');

// Question 3
while (answer6 !== 'yes' || answer6 !== 'y' || answer6 !== 'no' || answer6 !== 'n') {
  var answer6 = prompt('Question 3: Does Khoa like sushi?', 'Respond with Yes or No');
  console.log('answer to trivia 3 is: ' + answer6);
  if (answer6 === 'yes' || answer6 === 'y') {
    userPoints++;
    alert('Correct! The quickest way to Khoa\'s heart is with sushi. You now have ' + userPoints + ' points!');
    break;
  } else if (answer6 === 'no' || answer6 === 'n') {
    alert('Wow.. I really thought you would\'ve gotten this one right. Of course he likes sushi. You still have ' + userPoints + ' point(s)');
    break;
  } else {
    // Typo error check
    alert('You must answer with a Yes or No.');
  }
}

// Question 4
while (answer7 !== 'yes' || answer7 !== 'y' || answer7 !== 'no' || answer7 !== 'n') {
  var answer7 = prompt('We\'re moving on to question 4 now. Does Khoa own more than 15 pairs of shoes?' ,'Respond with Yes or No').toLowerCase();
  console.log('answer to trivia 4 is: ' + answer7);
  if (answer7 === 'yes' || answer7 === 'y') {
    userPoints++;
    alert('Yeah it\'s shocking. I think he has a problem.');
    break;
  } else if (answer7 === 'no' || answer7 === 'n') {
    alert('Actually, ' + user + ', he does... I think he has a problem.');
    break;
  } else {
    // Typo error check
    alert('You must answer with Yes or No');
  }
}

// Question 5
while (answer8 !== 'yes' || answer8 !== 'y' || answer8 !== 'no' || answer8 !== 'n') {
  var answer8 = prompt('Last question, ' + user + '! Are Khoa\'s favorite animals dogs?', 'Respond with Yes or No').toLowerCase();
  console.log('answer to trivia 5 is: ' + answer8);
  if (answer8 === 'yes' || answer8 === 'y') {
    alert('Ooh so close. Dog\'s are his favorite second animal. his first favorite are wolves!');
    break;
  } else if (answer8 === 'n' || answer8 === 'no') {
    userPoints++;
    alert('Fantastic job! Dog\'s are Khoa\'s second favorite animal. His first favorite are wolves!');
    break;
  } else {
    // Typo error check
    alert('You must answer with Yes or No');
  }
}

// Scor update and Bonus Question Alert
alert('You now have ' + userPoints + ' point(s).');

alert('We are now entering the BONUS round, where each correct answer is 2 points!');

//Bonus Question 1
var answer9 = prompt('First question: What is Khoa\'s favorite food?').toLowerCase();
console.log('answer to bonus 1 is: ' + answer9);
if (answer9 === 'pizza') {
  userPoints += 2;
  alert('Correctomundo! Everyone\'s favorite food should be pizza. You now have ' + userPoints + ' point(s)');
} else {
  alert('Ouch. If you got that question wrong, good luck with the next questions. The correct answer is pizza. You now have ' + userPoints + ' point(s)');
}
// Bonus Question 2
var answer10 = prompt(' Question 2: What is Khoa\'s favorite TV show?' , 'HINT: It\'s better than The Office').toLowerCase();
console.log('answer to bonus 2 is: ' + answer10);

if (answer10 === 'parks and rec' || answer10 === 'parks and recreation' || answer10 === 'parks & recreation' || answer10 === 'parks & rec') {
  userPoints += 2;
  alert('I knew you could do it, ' + user + '! You now have ' + userPoints + ' point(s)!');
} else {
  alert('I thought you would\'ve gotten this one right, ' + user + '. I\'m losing my faith in you. Everyone knows, hands down, Parks and Recreation is better than The Office. You now have ' + userPoints + ' point(s).');
}

if (userPoints === 9 ) {
  alert('Woah there. You made it. You only need 1 more point to be able to redeem a brand new Tesla!');
  alert('ERROR!');
  userPoints = 0;
  alert('Thank you for playing! you now have ' + userPoints + ' point(s). Try again next time!');
} else {
  alert('Oh, ' + user + ', you were pretty close. Feel free to try again! You can try as many times as you want to!');
}
