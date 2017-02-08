'use strict';

var confirmQuiz = confirm ('Hello, would you like to take a quiz?');

if(confirmQuiz === true){
  console.log('Awesome! Lets get started!');
} else {
  console.log('Too bad, starting anyway!');
}

var quizResponseOne = prompt('Please answer with Y or N. Does Glen have a dog?');

if(quizResponseOne.toUpperCase() === 'Y'){
  console.log('Bingo! You are correct!');
} else {
  console.log('Wrong! You are wrong. Glen does have a dog!');
}
