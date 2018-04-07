// Need to make condition to not allow keys that are not letters;
// Need condition to avoid taking away guesses for choosing the same letter twice.

// game variables
var charList = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var lettersGuessed = [];
var charGuess = [];
var wins = 0;
var losses = 0;
var guessRemain = 10;
var randomChoice = charList[Math.floor(Math.random() * charList.length)];
console.log(randomChoice);

document.onkeyup = function (event) { 
    if (event.keyCode >= 65 && event.keyCode <= 90)
    {
         var guess = event.key;
    }

    for (var i = 0; i < charList.length; i++)
    {
        if (charList[i] != guess)
        {
            console.log(guess);
        }
    }

    if (guess === randomChoice)
    {
        wins++;
        randomChoice = charList[Math.floor(Math.random() * charList.length)];
        guessRemain = 10;
        console.log(randomChoice);   
        lettersGuessed.splice(guess);
        alert("Hmmmmmm DONUTS!");
    }
    else
    {
        guessRemain--;
        lettersGuessed.push(guess);
    }

    if (guessRemain === 0) 
    {
        losses++;
        randomChoice = charList[Math.floor(Math.random() * charList.length)];
        guessRemain = 10;
        console.log(randomChoice);
        lettersGuessed.splice(guess); 
        alert("DOH!");
    }
    

    var winsHTML = "<p> Wins: " + wins + "</p>";
    var guessRemainHTML = "<p> Remaining: " + guessRemain + "</p>";
    var lossesHTML = "<p> Losses: " + losses + "</p>";
    var letterGuestHTML = "<p> Letters: [ " + lettersGuessed.join(' ') + " ]</p>";
    
    document.querySelector("#wins").innerHTML = winsHTML;
    document.querySelector("#guess-remain").innerHTML = guessRemainHTML;
    document.querySelector("#losses").innerHTML = lossesHTML;    
    document.querySelector("#letters-guessed").innerHTML = letterGuestHTML;
};





