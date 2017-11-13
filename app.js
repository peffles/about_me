'use strict';
var tally = 0;
console.log(tally, 'score');

function dogQuestion(dogAns) {
  dogAns = prompt('Does Wyatt have a dog?');
  console.log('dogAnswer:', dogAns, dogAns.toUpperCase());
  if (dogAns.toUpperCase() === 'N' || dogAns.toUpperCase() === 'NO') {
    alert('Correct! He only has a cat, named puddy! (as in "I tot i taw a puddy tat")');
    tally++;
    console.log(tally, 'score');
  } else {
    alert('incorrect im afraid... he does have a cat named Puddy though! (as in "I tot i taw a puddy tat")');
  }
}
dogQuestion();

// Color
function colorQuestion(colorAns) {
  colorAns = prompt('Is lime green is Wyatt\'s favorite color?');
  console.log('colorAnswer', colorAns, colorAns.toUpperCase());
  if (colorAns.toUpperCase() === 'N' || colorAns.toUpperCase() === 'NO') {
    alert('Correct! His favorite color is cyan.');
    tally++;
    console.log(tally, 'score');
  } else {
    alert('incorrect! His favorite color is Cyan!');
  }
}
colorQuestion();
// Favorite Animal
function animalQuestion(animalAns) {
  animalAns = prompt('Is Wyatt\'s favorite animal Ailurus fulgens?');
  console.log('animalAnswer', animalAns, animalAns.toUpperCase());
  if (animalAns.toUpperCase() === 'Y' || animalAns.toUpperCase() === 'YES') {
    alert('Correct! His favorite animal is Ailurus fulgens aka the Red panda!, they\'re really cute but they are also endangered.');
    tally++;
    console.log(tally, 'score');
  } else {
    alert('incorrect! His favorite animal is Ailurus fulgens aka the Red panda!, they\'re really cute but they are also endangered.');
  }
}
animalQuestion();

// Horses
function fourthQuestion(fourthAns) {
  fourthAns = prompt('Does Wyatt\'s family own a ranch in Oregon? with over 200 horses?');
  console.log('fourthAnswer', fourthAns);
  if (fourthAns.toUpperCase() === 'N' || fourthAns.toUpperCase() === 'NO') {
    alert('Correct! Actually, he is terrified of horses... This is not a joke, horses are right next to spiders in his book.');
    tally++;
    console.log(tally, 'score');
  } else {
    alert('incorrect! Fun fact though, he is terrified of horses... This is not a joke, horses are right next to spiders in his book.');
  }
}
fourthQuestion();

// following along?
function fifthQuestion(fifthAns){
  fifthAns = prompt('Wyatt rides his horse Daisy every Saturday');
  console.log('fifthAnswer', fifthAns, fifthAns.toUpperCase());
  if (fifthAns.toUpperCase() === 'N' || fifthAns.toUpperCase() === 'NO') {
    alert('Correct!, You\'re actually paying attention!');
    tally++;
    console.log(tally, 'score');
  } else {
    alert('tsk...tsk...tsk...');
  }
}
fifthQuestion();

function sixthQuestion (){
  var sixGuessLimit = 4;
  var sixGuessCount = 0;
  var sixCorrectAnswer = Math.floor((Math.random() * 10)+ 1);
  var currentAnswer;
  while (sixGuessCount < sixGuessLimit && currentAnswer !== sixCorrectAnswer) {
    currentAnswer = prompt('What is my favorite number?');
    console.log('currentAnswer', currentAnswer);
    sixGuessCount++;
    if (currentAnswer > sixCorrectAnswer) {
      alert('Your guess is too high! Guesses: ' + sixGuessCount);
    } else if (currentAnswer < sixCorrectAnswer) {
      alert('Your guess is too low! Guesses: ' + sixGuessCount);
    }
  }
  if (currentAnswer === sixCorrectAnswer) {
    alert('Thats Right! My favorite number is ' + sixCorrectAnswer);
    tally++;
    console.log(tally, 'score');
  }
  if (sixGuessCount >= sixGuessLimit) {
    alert('Too many guesses!');
  }
}
sixthQuestion ();



function sevQuestion () {
  var sevGuessLimit = 6;
  var sevGuessCount = 0;
  var sevCurrentAnswer = '';
  while (sevGuessCount < sevGuessLimit) {
    sevCurrentAnswer = prompt('What is one of my favoite candy bars?');
    console.log('currentAnswer', sevCurrentAnswer);
    if (sevCurrentAnswer === 'butterfinger' || sevCurrentAnswer === 'snickers') {
      alert('Thats Right! One of my favotite candy bars is: ' + sevCurrentAnswer);
      tally++;
      console.log(tally, 'score');
      break;
    }
    else {
      alert('WRONG! Guesses: '+ sevGuessCount);
    }
    if ((sevGuessCount === 5) && ((sevCurrentAnswer !== 'butterfinger' )||( sevCurrentAnswer !== 'snickers'))) {
      alert('Thats incorrect! Butterfinger and Snickers would be accepted!');
    }
    sevGuessCount++;
  }
}

sevQuestion();

function keepTrack() {
  alert ('Your score was '+ tally);
  console.log(tally, 'score');
}
keepTrack();
