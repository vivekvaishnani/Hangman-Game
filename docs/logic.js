
var wordsList = ["ronaldo","messi","beckhem","rooney","ibrahimovic","pogba","salah","bale","benzema"];


var chosenWord = "";


var lettersInChosenWord = [];


var numBlanks = 0;


var blanksAndSuccesses = [];


var wrongGuesses = [];


var letterGuessed = "";

// Hangman game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


function startGame() {

  
  numGuesses = 9;

  
  chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

  
  lettersInChosenWord = chosenWord.split("");
  console.log(lettersInChosenWord);

  
  numBlanks = lettersInChosenWord.length;

  
  console.log(chosenWord);

  
  blanksAndSuccesses = [];

  
  wrongGuesses = [];


  for (var i = 0; i < numBlanks; i++) {
    blanksAndSuccesses.push("_");
  }

  
  console.log(blanksAndSuccesses);

 
  document.getElementById("guesses-left").innerHTML = numGuesses;

  
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
}


function checkLetters(letter) {

  
  var letterInWord = false;

  
  for (var i = 0; i < numBlanks; i++) {

    if (chosenWord[i] === letter) {

      
      letterInWord = true;
    }
  }

  if (letterInWord) {

   
    for (var j = 0; j < numBlanks; j++) {

      
      if (chosenWord[j] === letter) {

      
        blanksAndSuccesses[j] = letter;
      }
    }

    
    console.log(blanksAndSuccesses);
  }

  
  else {

   
    wrongGuesses.push(letter);

    
    numGuesses--;

  }

}


function roundComplete() {

 
  console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);

  
  
  document.getElementById("guesses-left").innerHTML = numGuesses;

  // This will print the array of guesses and blanks onto the page.
  document.getElementById("word-blanks").innerHTML = blanksAndSuccesses.join(" ");

  // This will print the wrong guesses onto the page.
  document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

  // If our Word Guess string equals the solution.
  // (meaning that we guessed all the letters to match the solution)...
  if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {

    
    winCounter++;

    // Give the user an alert
    alert("You win!");

    // Update the win counter in the HTML
    document.getElementById("you-guessedIt").innerHTML = ("Keep it up !! . You guessed the correct player name:");
    document.getElementById("correct-word").innerHTML = chosenWord;
    document.getElementById("win-counter").innerHTML = winCounter;
    document.getElementById("winner-img").innerHTML = ("<img src = 'goal.gif'>");

    // Restart the game
    startGame();
  }

  // If we've run out of guesses
  else if (numGuesses === 0) {

    // Add to the loss counter
    lossCounter++;

    // Give the user an alert
    alert("You lose");

    // Update the loss counter in the HTML
    document.getElementById("you-guessedIt").innerHTML = ("You guessed the wrong player name lets get the next one right !!");
    document.getElementById("loss-counter").innerHTML = lossCounter;
    document.getElementById("winner-img").innerHTML = ("<img src = 'redcard.gif'>");
    

    

    // Restart the game
    startGame();

  }

}



// Starts the Game by running the startGame() function
startGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {

  // Converts all key clicks to lowercase letters.
  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  // Runs the code to check for correct guesses.
  checkLetters(letterGuessed);

  // Runs the code that ends each round.
  roundComplete();
};
