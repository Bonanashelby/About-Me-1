'use strict';
var score = 0;
var user = prompt('Hello, what is your name?');

alert('Hello ' + user + '!');

var confirmQuiz = confirm ('Would you like to take a quiz?');

if(confirmQuiz === true){
  alert('Awesome! Lets get started!');
} else {
  alert('Too bad, starting anyway!');
}

var quizResponseOne = prompt('Please answer with Y or N for all the following questions. Does Glen have a dog?');

if(quizResponseOne.toUpperCase() === 'Y'){
  alert('Bingo! You are correct! Glen has a pomeranian named Molly, and she is the cutest dog in the world!');
  score += 1;
} else {
  alert('Wrong! You are wrong. Glen does have a dog!');
}
var quizResponseTwo = prompt('Does Glen like to fight?');
if(quizResponseTwo.toUpperCase() === 'Y'){
  alert('Correcto! But not innocent people, only for beating up static punching bags!');
  score += 1;
} else {
  alert('Wrong! He likes to fight, but only towards punching bags!');
}
var quizResponseThree = prompt('Does Glen love electronic music??');
if(quizResponseThree.toUpperCase() === 'Y'){
  alert('Bingo! Glen LOVES electronic music and is an electronic music snob!');
  score += 1;
} else {
  alert('WRONG! Glen would be offended if you answered this wrong as he LOOOOOOVES electronic music!');
}
var quizResponseFour = prompt('Does Glen have a girlfriend?');
if(quizResponseFour.toUpperCase() === 'Y'){
  alert('You are correct! But why are you asking this question nosy person?!?!');
  score += 1;
} else {
  alert('Wrong! Are you trying to say he is ugly and has a horrible personality and is probably single!?');
}
var quizResponseFive = prompt('Does Glen enjoy weightlifting?');
if(quizResponseFive.toUpperCase() === 'Y'){
  alert('Correct! He will take that as a compliment, because you are assuming he looks likes he lifts! Thank you!');
  score += 1;
} else {
  alert('Wrong! Are you trying to say he looks small and pathetic and needs to workout!? He will be offended!');
}
for (var i = 0; i < 4; i++) {
  var quizResponseSix = prompt('Finally, guess how old I am? You get four tries!');
  if(quizResponseSix == 30) {
    alert('Correct! I am 30 years old!');
    score += 1;
    break;
  } else if (quizResponseSix > 31) {
    alert('Too high! Do I seriously look that old!?');
  } else if (quizResponseSix < 29) {
    alert ('Too low! But thanks for the compliment!');
  }
}
var multiChoice = ['JAPAN', 'TAIWAN', 'INDONESIA', 'THAILAND'];
for (var i = 0; i < 6; i++) {
  var isCorrect = false;
  var userChoice = prompt('Can you guess which countries I\'ve visited?');
  for (var j = 0; j < multiChoice.length; j++) {
    if(userChoice.toUpperCase() === multiChoice[j]) {
      isCorrect = true;
      break;
    }
  }
  if(isCorrect === true){
    alert('Correct! He has been to that country!');
    score += 1;
    break;
  } else {
    alert('Wrong answer! Try again!');
  }
}

if (score == 7){
  alert('Your score is ' + score + 'out of 7');
  alert('Perfect! You are so fucking smart ' + user + '!');
} else{
  alert('Your score is ' + score + 'out of 7');
  alert('You didn\'t get a perfect score ' + user + '! Always strive for perfection! Try again!');
}
