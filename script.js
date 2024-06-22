document.addEventListener('DOMContentLoaded', function() {
    let secretNumber;
    let attempts;
    let roundCount;
    let maxAttempts = 10;

    const guessInput = document.getElementById('guessInput');
    const submitGuessBtn = document.getElementById('submitGuess');
    const feedbackText = document.getElementById('feedback');
    const attemptCount = document.getElementById('attemptCount');
    const roundCountText = document.getElementById('roundCount');
    const newGameBtn = document.getElementById('newGame');

    function startNewGame() {
        secretNumber = Math.floor(Math.random() * 100) + 1;
        attempts = 0;
        roundCount = 0;
        updateRoundCount();
        resetFeedback();
        guessInput.value = '';
        guessInput.disabled = false;
        submitGuessBtn.disabled = false;
        newGameBtn.style.display = 'none';
    }

    function updateRoundCount() {
        roundCount++;
        roundCountText.textContent = roundCount;
    }

    function resetFeedback() {
        feedbackText.textContent = '';
        attemptCount.textContent = attempts;
    }

    function handleGuess() {
        let userGuess = parseInt(guessInput.value);
        attempts++;

        if (userGuess === secretNumber) {
            feedbackText.textContent = `Congratulations! You guessed the number ${secretNumber} correctly in ${attempts} attempts!`;
            guessInput.disabled = true;
            submitGuessBtn.disabled = true;
            newGameBtn.style.display = 'block';
        } else if (userGuess < secretNumber) {
            feedbackText.textContent = 'Too low! Try again.';
        } else {
            feedbackText.textContent = 'Too high! Try again.';
        }

        attemptCount.textContent = attempts;

        if (attempts >= maxAttempts && userGuess !== secretNumber) {
            feedbackText.textContent = `Sorry, you've run out of attempts. The number was ${secretNumber}.`;
            guessInput.disabled = true;
            submitGuessBtn.disabled = true;
            newGameBtn.style.display = 'block';
        }
    }

    submitGuessBtn.addEventListener('click', handleGuess);
    newGameBtn.addEventListener('click', startNewGame);

    startNewGame(); // Start the first game when the page loads
});
