function checkAnswer() {
    const correctAnswer = "4"; // Correct answer for the question "What is 2 + 2?"
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    const feedbackElement = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
    }
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
