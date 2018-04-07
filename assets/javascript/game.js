//Variables for DOM Manipulation
var playDOM = document.getElementById('play-button');
var wordPlaceHolderDOM = document.getElementById('word-placeholder');
var lettersGuessedDOM = document.getElementById('letters-guessed');
var guessRemainDOM = document.getElementById('guess-remmain');
var winsDOM = document.getElementById('wins');
var lossesDOM = document.getElementById('losses');

// Variables for Game
var gameStart = false;
var wins = 0;
var losses = 0;
var guessLeft = 10;
var charGuessed = '';
var wordPicked = " ";
var lettersGuessedArray = [];
var incorrectLetterGuessed = [];
var wordPlaceHolderArr = [];
var characterList= ["Marge Simpson", "Homer Simpson", "Bart Simpson", "Maggie Simpson", "Lisa Simpson",
                    "Moe Szyslak", "Mr Burns", "Nelson Muntz", "Ned Flanders", "Milhouse Van Houten", 
                    "Principal Skinner", "Barney Gumbo"];


function Game () {
    var wins = 0;
    var losses = 0;
    var guessLeft = 10;
    var wordPicked = " ";
    var lettersGuessedArray = [];
    var incorrectLetterGuessed = [];
    var wordPlaceHolderArr = [];

    wordPicked = characterList[Math.floor(Math.random() * characterList.length)];

    for (var i = 0; i < wordPicked.length; i++)
    {
        if (wordPicked[i] === ' ')
        {
            wordPlaceHolderArr.push(' ');
        }
        else
        {
            wordPlaceHolderArr.push('x');
        }
    }

    wordPlaceHolderDOM.textContent = wordPlaceHolderArr.join('');    
}

function Guess(letter) {

}


document.onkeyup = function (event) {
    letterGuessed = event.key;
    Guess(charGuessed);
    console.log(charGuessed);
}

playDOM.addEventListener('click', Game);

