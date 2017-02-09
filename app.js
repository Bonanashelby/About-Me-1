'use strict';

var user = prompt('Hello, what is your name?');

alert('Hello ' + user + '!');

var confirmQuiz = confirm ('Would you like to take a quiz?');

if(confirmQuiz === true){
  console.log('Awesome! Lets get started!');
} else {
  console.log('Too bad, starting anyway!');
}

var quizResponseOne = prompt('Please answer with Y or N for all the following questions. Does Glen have a dog?');

if(quizResponseOne.toUpperCase() === 'Y'){
  console.log('Bingo! You are correct! Glen has a pomeranian named Molly, and she is the cutest dog in the world!');
} else {
  console.log('Wrong! You are wrong. Glen does have a dog!');
}
var quizResponseTwo = prompt('Does Glen like to fight?');
if(quizResponseTwo.toUpperCase() === 'Y'){
  console.log('Correcto! But not innocent people, only for beating up static punching bags!');
} else {
  console.log('Wrong! He likes to fight, but only towards punching bags!');
}
var quizResponseThree = prompt('Does Glen love electronic music??');
if(quizResponseThree.toUpperCase() === 'Y'){
  console.log('Bingo! Glen LOVES electronic music and is an electronic music snob!');
} else {
  console.log('WRONG! Glen would be offended if you answered this wrong as he LOOOOOOVES electronic music!');
}
var quizResponseFour = prompt('Does Glen have a girlfriend?');
if(quizResponseFour.toUpperCase() === 'Y'){
  console.log('You are correct! But why are you asking this question nosy person?!?!');
} else {
  console.log('Wrong! Are you trying to say he is ugly and has a horrible personality and is probably single!?');
}
var quizResponseFive = prompt('Does Glen enjoy weightlifting?');
if(quizResponseFive.toUpperCase() === 'Y'){
  console.log('Correct! He will take that as a compliment, because you are assuming he looks likes he lifts! Thank you!');
} else {
  console.log('Wrong! Are you trying to say he looks small and pathetic and needs to workout!? He will be offended!');
}
