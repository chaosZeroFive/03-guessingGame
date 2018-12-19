$(document).ready(function () {

	// array of possible words
	var possibleWords = ['North America', 'South America', 'Asia', 'Australia', 'Europe', 'Africa']
	const maxGuess = 10
		var pauseGame = false
		var guessedLetters = []
		var guessingWord = []
		var wordToMatch
		var numGuess
		var wins = 0
		resetGame()
		
		// Wait for key press
		document.onkeypress = function (event) {
		
			// Make sure key pressed is an alpha character
		if (isAlpha(event.key) && !pauseGame) {
			checkForLetter(event.key.toUpperCase())
		}
	}
	// Game Functions
	
	// Check if letter is in word & process
	function checkForLetter(letter) {
		var foundLetter = false
			var correctSound = document.createElement('audio')
			var incorrectSound = document.createElement('audio')
			correctSound.setAttribute('src', 'assets/sounds/not-bad.mp3')
			incorrectSound.setAttribute('src', 'assets/sounds/gets-in-the-way.mp3')
			// Search string for letter
			for (var i = 0, j = wordToMatch.length; i < j; i++) {
				if (letter === wordToMatch[i]) {
					guessingWord[i] = letter
						foundLetter = true
						correctSound.play()
						// If guessing word matches random word
						if (guessingWord.join('') === wordToMatch) {
							// Increment # of wins
							wins++
							pauseGame = true
								updateDisplay()
								setTimeout(resetGame, 5000)
						}
				}
			}
			if (!foundLetter) {
				incorrectSound.play()
				// Check if inccorrect guess is already on the list
				if (!guessedLetters.includes(letter)) {
					// Add incorrect letter to guessed letter list
					guessedLetters.push(letter)
					// Decrement the number of remaining guesses
					numGuess--
				}
				if (numGuess === 0) {
					// Display word before reseting game
					guessingWord = wordToMatch.split()
						pauseGame = true
						setTimeout(resetGame, 5000)
				}
			}
			updateDisplay()
	}
    
    //hide mask images
    //function hideMask(){

	//}
    
    
    
	// Check in keypressed is between A-Z or a-z
	function isAlpha(ch) {
		return /^[A-Z]$/i.test(ch)
	}
	function resetGame() {
		numGuess = maxGuess
			pauseGame = false

			// Get a new word
			wordToMatch = possibleWords[
				Math.floor(Math.random() * possibleWords.length)
			].toUpperCase()
			console.log(wordToMatch)
			
			// Reset word arrays
			guessedLetters = []
			guessingWord = []
			
			// Reset the guessed word
			for (var i = 0, j = wordToMatch.length; i < j; i++) {
				
				// Put a space instead of an underscore between multi word "words"
				if (wordToMatch[i] === ' ') {
					guessingWord.push(' ')
				} else {
					guessingWord.push('_')
				}
			}
			// Update the Display
			updateDisplay()
	}
	function updateDisplay() {
		document.getElementById('totalWins').innerText = wins
			document.getElementById('currentWord').innerText = guessingWord.join('')
			document.getElementById('remainingGuesses').innerText = numGuess
			document.getElementById('guessedLetters').innerText = guessedLetters.join(' ')
	}
	// toggle function sets the display for image mask blocks when the player selects a correct letter
	// toggle('mask1', 'block'); // Shows
	// toggle('mask1', 'none'); // hides

	// document.getElementById("l1").innerHTML = "Value of l1";
	function toggle(className, displayState) {
		var elements = document.getElementsByClassName(className)
			for (var i = 0; i < elements.length; i++) {
				elements[i].style.display = displayState
			}
	}
})
