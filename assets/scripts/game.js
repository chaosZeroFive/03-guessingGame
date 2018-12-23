//need var to hold values
//----possible words
var possibleWords = ['boat', 'car', 'house'];
//console.log(possibleWords);

//----select random word
var randomWord = '';

//---get number of letters in word
var maxGuess = randomWord.length;
//console.log('maxGuess: ' + maxGuess);

//----random word split into an array
var wordLetters = [];

//----number of blank spaces
var blanks = 0;


//----var to hold correctly guessed letters and blank spaces
var blanksAndCorrect = [];


//----var to hold incorrectly guessed letters 
var incorrectLetters = [];
//console.log('incorrectLetters: ' + incorrectLetters);

//----var to hold counters
var wins = 0;
//console.log('wins: ' + wins);

var losses = 0;
//console.log('losses: ' + losses);

var numGuesses = 0;
//console.log('numGuesses: ' + numGuesses);

var numGuessRem = maxGuess-numGuesses;
//console.log('numGuessRem: ' + numGuessRem);

//need a function to process player guess
function game(){
    randomWord = possibleWords[Math.floor(Math.random() * possibleWords.length)];
    
    //split random word and assign to empty array
    wordLetters = randomWord.split('');
    
    //generate value for blanks var
    blanks = wordLetters.length;
    
    //need to insert underscore for each letter of the word
    for (var i = 0; i < blanks; i++){
        blanksAndCorrect.push('_');
    }
    
    //insert underscores in HTML
    //document.getElementById('current-word').innerHTML  = ' ' + blanksAndCorrect.join(' ');
    
    console.log('randomWord: ' + randomWord);
    console.log('wordLetters: ' + wordLetters);
    console.log('blanks: ' + blanks);
    console.log('blanksAndCorrect: ' + blanksAndCorrect);
}
document.getElementById('max-guesses').innerHTML = ' ' + maxGuess;
function reset(){
    numGuesses = 0;
    incorrectLetters = [];
    blanksAndCorrect = [];
    game();
}
//need a function to check if guessed letter is found
function checkLetters(letter){
    //var is false
    var letterInWord = false;
    //loop through randomWord
    for (var i = 0; i < blanks; i++){
        if (randomWord[i] === letter){
            blanksAndCorrect[i] = letter;
        }
    }
    if (letterInWord){
        for (var i = 0; i < blanks; i++){
            if(randomWord[i] === letter){
                blanksAndCorrect[i] = letter;
            }
        }
    }
    else{
        incorrectLetters.push(letter);
        numGuessRem--;
    }
    console.log('blanksAndCorrect: ' + blanksAndCorrect);
    console.log('blanks: ' + blanks);
}
function complete(){
    console.log('wins:' + wins + '| losses:' + losses + '| numGuessesRem:' + numGuessRem);
    
    if (wordLetters.toString() === blanksAndCorrect.toString()){
        wins++;
        document.getElementById('num-wins').innerHTML = ' ' + wins;
    }
    else if (numGuessRem === 0){
        losses++;
        document.getElementById('num-losses').innerHTML = ' ' + losses;
    }
    
    document.getElementById('current-word').innerHTML = ' ' + blanksAndCorrect.join(' ');
    document.getElementById('rem-guesses').innerHTML = ' ' + numGuessRem;
}

game();

//need a function to process guesses
document.onkeyup = function (event){
    var guess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(guess);
    
    complete();
    
    console.log(guess);
    
    document.getElementById('incorrect-letters').innerHTML = ' ' + incorrectLetters.join(' ');
}





































